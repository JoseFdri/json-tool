import * as jsondiffpatch from "jsondiffpatch";

export const getDiff = (jsonA: any, jsonB: any) => {
  const delta = jsondiffpatch.diff(jsonA, jsonB);
  const result = {
    JsonA: {
      modified: [],
      deleted: [],
    },
    JsonB: {
      added: [],
      modified: [],
      deleted: [],
    },
  };

  function walk(obj: any, path: string[] = []) {
    if (obj && typeof obj === "object" && !Array.isArray(obj)) {
      // Array diff
      if (obj._t === "a") {
        Object.entries(obj).forEach(([key, value]) => {
          if (key === "_t") return;
          walk(value, [...path, key]);
        });
      } else {
        Object.entries(obj).forEach(([key, value]) => {
          walk(value, [...path, key]);
        });
      }
    } else if (Array.isArray(obj)) {
      // Added: [newValue]
      if (obj.length === 1) {
        // @ts-ignore
        result.JsonB.added.push(path.join("."));
      }
      // Modified: [oldValue, newValue]
      else if (obj.length === 2) {
        // @ts-ignore
        result.JsonA.modified.push(path.join("."));
        // @ts-ignore
        result.JsonB.modified.push(path.join("."));
      }
      // Deleted: [oldValue, 0, 0]
      else if (obj.length === 3) {
        // @ts-ignore
        result.JsonA.deleted.push(path.join("."));
        // @ts-ignore
        result.JsonB.deleted.push(path.join("."));
      }
      // Text diff: [unidiff, 0, 2]
      else if (obj.length === 3 && obj[2] === 2) {
        // @ts-ignore
        result.JsonA.modified.push(path.join("."));
        // @ts-ignore
        result.JsonB.modified.push(path.join("."));
      }
    }
  }

  walk(delta);
  console.log("Delta:", delta);
  return result;
};
