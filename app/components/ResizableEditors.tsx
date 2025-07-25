import { useEffect, useRef, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { getDiff } from "../utils/jsonDiff";
import { JsonEditor } from "./JsonEditor";
import { useMemo } from "react";
import type { OnRenderValue } from "vanilla-jsoneditor";
import { parse } from "lossless-json";

type Props = {
  leftValue: string;
  rightValue: string;
  onLeftChange?: (v: string) => void;
  onRightChange?: (v: string) => void;
  onChangeMode?: (mode: "tree" | "text" | "table") => void;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  compareToggle?: ReactNode;
  leftMode?: "tree" | "text" | "table"; // Editor mode for left editor
  setLeftMode: (mode: "tree" | "text" | "table") => void;
  rightMode?: "tree" | "text" | "table"; // Editor mode for
  setRightMode: (mode: "tree" | "text" | "table") => void;
  onLeftRenderValue?: OnRenderValue;
  onRightRenderValue?: OnRenderValue;
  isCompare?: boolean; // Whether to show diff
};

export function ResizableEditors(props: Props) {
  const {
    leftValue,
    rightValue,
    onLeftChange,
    onRightChange,
    leftDisabled,
    rightDisabled,
    compareToggle,
    leftMode = "text",
    rightMode = "text",
    setLeftMode,
    setRightMode,
    onLeftRenderValue,
    onRightRenderValue,
    isCompare = false,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [leftWidth, setLeftWidth] = useState(50); // percent
  const [dragging, setDragging] = useState(false);

  // Persist and restore leftWidth from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("jsonEditorLeftWidth");
      if (raw) {
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) setLeftWidth(parsed);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jsonEditorLeftWidth", String(leftWidth));
    }
  }, [leftWidth]);

  // --- Drag logic refactor ---
  const onMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current || !dragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      let percent = (x / rect.width) * 100;
      percent = Math.max(10, Math.min(90, percent));
      setLeftWidth(percent);
      if (typeof window !== "undefined") {
        localStorage.setItem("jsonEditorLeftWidth", String(percent));
      }
    },
    [containerRef, dragging]
  );

  const onUp = useCallback(() => {
    setDragging(false);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    } else {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [dragging, onMove, onUp]);

  let leftObj: any = null;
  let rightObj: any = null;
  try {
    leftObj = parse(leftValue);
  } catch {}
  try {
    rightObj = parse(rightValue);
  } catch {}

  const diff = useMemo(() => getDiff(leftObj, rightObj), [leftObj, rightObj]);
  
  // console.log('debugg', leftValue, rightValue, leftDiffPaths, rightDiffPaths, leftSelection, rightSelection);
  console.log('diff', diff);
  const onClassNameA = useCallback((path: string[], value: any): string => {
    if(!isCompare) {
      return "";
    }
    const pathString = path.join(".");
    console.log('_diff', diff)
    console.log('onClassNameA', pathString, (diff.JsonA.modified as string[]).includes(pathString), (diff.JsonA.deleted as string[]).includes(pathString));
    if ((diff.JsonA.modified as string[]).includes(pathString) || (diff.JsonA.modified as string[]).includes(path[0]) ) {
      return "json-diff-modified";
    }
		if ((diff.JsonA.deleted as string[]).includes(pathString) || (diff.JsonA.deleted as string[]).includes(path[0])) {
      return "json-diff-deleted";
    }
    
    return "";
  }, [diff]);

  const onClassNameB = useCallback((path: string[], value: any): string => {
     if(!isCompare) {
      return "";
    }
		const pathString = path.join(".");
		if ((diff.JsonB.modified as string[]).includes(pathString) || (diff.JsonB.modified as string[]).includes(path[0])) {
      return "json-diff-modified";
    }
		if ((diff.JsonB.added as string[]).includes(pathString) || (diff.JsonB.added as string[]).includes(path[0])) {
      return "json-diff-added";
    }

    console.log('onClassNameB', pathString, value);
    return "";
  }, [diff]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "stretch",
        position: "relative",
        height: `calc(100vh - 180px)`,
        minHeight: 300,
        maxHeight: "100vh",
      }}
    >
      <div
        style={{
          flexBasis: `${leftWidth}%`,
          flexGrow: 0,
          flexShrink: 0,
          minWidth: 80,
          transition: dragging ? "none" : "flex-basis 0.15s",
					borderRadius: "6px",
					borderTop: isCompare
						? diff && (
								(diff.JsonA.modified && diff.JsonA.modified.length > 0) ||
								(diff.JsonA.deleted && diff.JsonA.deleted.length > 0) ||
								(diff.JsonB.added && diff.JsonB.added.length > 0) ||
								(diff.JsonB.modified && diff.JsonB.modified.length > 0)
							)
							? "1px solid #f1af21"
							: "1px solid #aae10f"
						: "1px solid transparent",
        }}
      >
        {useMemo(
          () => (
            <JsonEditor
              value={leftValue}
              onChange={onLeftChange}
              disabled={leftDisabled}
              view={leftMode}
              setView={setLeftMode}
              onRenderValue={onLeftRenderValue}
              onClassName={onClassNameA}
            />
          ),
          [
            leftMode,
            setLeftMode,
            onLeftChange,
            leftDisabled,
            onLeftRenderValue,
            onClassNameA,
          ]
        )}
      </div>
      <div
        style={{
          width: 10,
          cursor: "col-resize",
          background: "#181b20",
          zIndex: 2,
          position: "relative",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseDown={() => {
          setDragging(true);
        }}
      >
        <div
          style={{
            width: 50,
            height: "60%",
            background: "#50545e",
            borderRadius: 2,
          }}
        />
        <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
      </div>
      <div
        style={{
          flexBasis: `${100 - leftWidth}%`,
          flexGrow: 0,
          flexShrink: 0,
          minWidth: 80,
          transition: dragging ? "none" : "flex-basis 0.15s",
					borderRadius: "6px",
					borderTop: isCompare
						? diff && (
								(diff.JsonA.modified && diff.JsonA.modified.length > 0) ||
								(diff.JsonA.deleted && diff.JsonA.deleted.length > 0) ||
								(diff.JsonB.added && diff.JsonB.added.length > 0) ||
								(diff.JsonB.modified && diff.JsonB.modified.length > 0)
							)
							? "1px solid #f1af21"
							: "1px solid #aae10f"
						: "1px solid transparent",
        }}
      >
        {useMemo(
          () => (
            <JsonEditor
              value={rightValue}
              onRenderValue={onRightRenderValue}
              onChange={onRightChange}
              disabled={rightDisabled}
              view={rightMode}
              setView={setRightMode}
              onClassName={onClassNameB}
            />
          ),
          [
            rightMode,
            setRightMode,
            onRightChange,
            rightDisabled,
            onRightRenderValue,
            onClassNameB,
          ]
        )}
      </div>
    </div>
  );
}
