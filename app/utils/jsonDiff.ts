import { JSONPath } from 'jsonpath-plus';
import diffSequences from 'diff-sequences';

export type DiffType = 'added' | 'removed' | 'changed';

export interface DiffPath {
  path: string; // JSONPath string
  type: DiffType;
}

/**
 * Recursively collect all JSONPaths for a given object.
 * 
 * @param obj The object to collect paths from.
 * @param basePath The base path to start from.
 * @returns An array of JSONPaths.
 */
function collectPaths(obj: unknown, basePath = '$'): string[] {
  let paths: string[] = [basePath];
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => {
      paths = paths.concat(collectPaths(item, `${basePath}[${idx}]`));
    });
  } else if (obj && typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    for (const key of Object.keys(obj as Record<string, unknown>)) {
      const val = (obj as Record<string, unknown>)[key];
      paths = paths.concat(collectPaths(val, `${basePath}.${key}`));
    }
  }
  return paths;
}

/**
 * Compute a flat list of changed paths between two objects using JSONPath and diff-sequences.
 * - Only marks paths that are added, removed, or changed (not identical).
 * 
 * @param left The left object to compare.
 * @param right The right object to compare.
 * @returns An array of diff paths.
 */
export function computeJsonDiff(left: unknown, right: unknown): DiffPath[] {
  // Collect all paths from both objects
  const leftPaths = collectPaths(left);
  const rightPaths = collectPaths(right);

  // Use diff-sequences to compute path-level diff
  const diffs: DiffPath[] = [];
  // Use diffSequences.diff (not the default import directly)
  diffSequences(
    leftPaths.length,
    rightPaths.length,
    (aIdx: number, bIdx: number) => leftPaths[aIdx] === rightPaths[bIdx],
    // @ts-expect-error diff-sequences runtime only calls with 4 args
    (aStart: number, aEnd: number, bStart: number, bEnd: number) => {
      // Removed from left
      for (let i = aStart; i < aEnd; ++i) {
        diffs.push({ path: leftPaths[i], type: 'removed' });
      }
      // Added to right
      for (let i = bStart; i < bEnd; ++i) {
        diffs.push({ path: rightPaths[i], type: 'added' });
      }
      // For common subsequences, check for value changes
      const len = Math.min(aEnd - aStart, bEnd - bStart);
      for (let offset = 0; offset < len; ++offset) {
        const aIdx = aStart + offset;
        const bIdx = bStart + offset;
        const leftVals = JSONPath({ path: leftPaths[aIdx], json: left as any }) as any[];
        const rightVals = JSONPath({ path: rightPaths[bIdx], json: right as any }) as any[];
        const leftVal = leftVals.length > 0 ? leftVals[0] : undefined;
        const rightVal = rightVals.length > 0 ? rightVals[0] : undefined;
        if (JSON.stringify(leftVal) !== JSON.stringify(rightVal)) {
          diffs.push({ path: leftPaths[aIdx], type: 'changed' });
        }
      }
    }
  );
  return diffs;
}
