"use client";
import * as React from "react";
import { Tabs, Button, Checkbox, Flex, Box, Separator } from "@radix-ui/themes";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import JsonEditorWrapper from "./components/JsonEditorWrapper";

function prettifyJson(jsonStr: string) {
  try {
    const obj = JSON.parse(jsonStr);
    return JSON.stringify(obj, null, 2);
  } catch {
    return jsonStr;
  }
}

type TreeCollapseState = { [path: string]: boolean };

function JsonTree({
  data,
  path = "root",
  collapsed,
  setCollapsed,
  label,
}: {
  data: any;
  path?: string;
  collapsed: TreeCollapseState;
  setCollapsed: (s: TreeCollapseState) => void;
  label?: string;
}) {
  // Color palette based on VSCode dark and your screenshot
  const COLOR_KEY = "#82aaff";
  const COLOR_STRING = "#e6b674";
  const COLOR_NUMBER = "#ffcb6b";
  const COLOR_BOOL_NULL = "#c792ea";
  const COLOR_BRACE = "#555";

  const isCollapsible =
    typeof data === "object" &&
    data !== null &&
    (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0);
  const isCollapsed = collapsed[path];

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed({ ...collapsed, [path]: !isCollapsed });
  };

  // Helper for rendering values
  function renderValue(val: any) {
    if (typeof val === "string")
      return <span style={{ color: COLOR_STRING }}>&quot;{val}&quot;</span>;
    if (typeof val === "number")
      return <span style={{ color: COLOR_NUMBER }}>{val}</span>;
    if (typeof val === "boolean" || val === null)
      return <span style={{ color: COLOR_BOOL_NULL }}>{String(val)}</span>;
    return <span style={{ color: COLOR_STRING }}>{JSON.stringify(val)}</span>;
  }

  const INDENT_PX = 12;
  if (typeof data === "object" && data !== null) {
    if (Array.isArray(data)) {
      return (
        <ul
          className={`pl-[${INDENT_PX}px] list-none font-mono text-[15px] m-0`}
        >
          <li style={{ position: "relative", minHeight: 22 }}>
            {isCollapsible && (
              <span
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  marginRight: 4,
                  color: COLOR_BRACE,
                  display: "inline-block",
                  width: 16,
                  textAlign: "center",
                }}
                onClick={handleToggle}
              >
                {isCollapsed ? "▶" : "▼"}
              </span>
            )}
            {label && (
              <span className="text-blue-300" style={{ color: COLOR_KEY }}>
                {label}
                <span className="text-gray-400" style={{ color: "#949494" }}>
                  :
                </span>
              </span>
            )}
            <span
              className="text-gray-500"
              style={
                label
                  ? { color: COLOR_BRACE, marginLeft: 4 }
                  : { color: COLOR_BRACE }
              }
            >
              [
            </span>
            {/* Floating badge for array size */}
            <span
              style={{
                display: "inline-block",
                background: "#23272e",
                color: "#bdbdbd",
                fontSize: 10,
                opacity: 0.92,
                position: "relative",
                top: -1,
                borderRadius: 6,
                padding: "1px 3px",
                fontWeight: 500,
                letterSpacing: 0.2,
                border: "1px solid #333",
                boxShadow: "0 1px 2px #0002",
              }}
            >
              {data.length} item{data.length !== 1 ? "s" : ""}
            </span>
            {!isCollapsed && data.length > 0 && (
              <ul style={{ paddingLeft: 12, listStyle: "none", margin: 0 }}>
                {data.map((item, idx) => {
                  const itemPath = `${path}.${idx}`;
                  const itemIsCollapsible =
                    typeof item === "object" &&
                    item !== null &&
                    (Array.isArray(item)
                      ? item.length > 0
                      : Object.keys(item).length > 0);
                  const itemIsCollapsed = collapsed[itemPath];
                  const handleItemToggle = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    setCollapsed({
                      ...collapsed,
                      [itemPath]: !itemIsCollapsed,
                    });
                  };
                  return (
                    <li key={idx} style={{ minHeight: 22 }}>
                      {itemIsCollapsible && (
                        <span
                          style={{
                            cursor: "pointer",
                            userSelect: "none",
                            marginRight: 4,
                            color: COLOR_BRACE,
                            display: "inline-block",
                            width: 16,
                            textAlign: "center",
                          }}
                          onClick={handleItemToggle}
                        >
                          {itemIsCollapsed ? "▶" : "▼"}
                        </span>
                      )}
                      <span style={{ color: "#828790" }}>{idx}</span>
                      <span style={{ color: COLOR_BRACE }}>: </span>
                      {itemIsCollapsible && itemIsCollapsed ? null : (
                        <JsonTree
                          data={item}
                          path={itemPath}
                          collapsed={collapsed}
                          setCollapsed={setCollapsed}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            <span style={{ color: COLOR_BRACE }}>]</span>
          </li>
        </ul>
      );
    }
    // Object
    return (
      <ul className="pl-0 list-none font-mono text-[15px] m-0">
        {label && (
          <li className="relative min-h-[22px]">
            {isCollapsible && (
              <span
                className="cursor-pointer select-none mr-1 inline-block w-4 text-center text-gray-500"
                style={{ color: COLOR_BRACE }}
                onClick={handleToggle}
              >
                {isCollapsed ? "▶" : "▼"}
              </span>
            )}
            <span className="text-blue-300" style={{ color: COLOR_KEY }}>
              {label}
            </span>
            <span
              className="text-gray-500 ml-0.5"
              style={{ color: COLOR_BRACE }}
            >
              {"{"}
            </span>
            {!isCollapsed && (
              <ul className={`pl-[${INDENT_PX}px] list-none m-0`}>
                {Object.entries(data).map(([k, v]) => (
                  <li key={k}>
                    <JsonTree
                      data={v}
                      path={`${path}.${k}`}
                      collapsed={collapsed}
                      setCollapsed={setCollapsed}
                      label={k}
                    />
                  </li>
                ))}
              </ul>
            )}
            <span className="text-gray-500" style={{ color: COLOR_BRACE }}>
              {"}"}
            </span>
          </li>
        )}
        {/* For the root object, just render children */}
        {!label &&
          Object.entries(data).map(([k, v]) => (
            <li key={k}>
              <JsonTree
                data={v}
                path={`${path}.${k}`}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                label={k}
              />
            </li>
          ))}
      </ul>
    );
  }
  // Primitive value
  return label !== undefined ? (
    <span className="font-mono text-[15px]">
      <span className="text-blue-300" style={{ color: COLOR_KEY }}>
        {label}
      </span>
      <span className="text-gray-500" style={{ color: COLOR_BRACE }}>
        {" "}
        :{" "}
      </span>
      {renderValue(data)}
    </span>
  ) : (
    <span
      className="text-yellow-300 font-mono text-[15px]"
      style={{ color: COLOR_STRING }}
    >
      {JSON.stringify(data)}
    </span>
  );
}
function renderJsonTable(data: any) {
  if (Array.isArray(data)) {
    if (data.length === 0) return <div>Empty array</div>;
    const keys = Array.from(
      new Set(
        data.flatMap((obj) =>
          typeof obj === "object" && obj !== null ? Object.keys(obj) : []
        )
      )
    );
    return (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
          color: "#cbd5e1",
        }}
      >
        <thead>
          <tr>
            {keys.map((k) => (
              <th key={k} style={{ border: "1px solid #333", padding: 4 }}>
                {k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {keys.map((k) => (
                <td key={k} style={{ border: "1px solid #333", padding: 4 }}>
                  {row && row[k] !== undefined ? JSON.stringify(row[k]) : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (typeof data === "object" && data !== null) {
    return renderJsonTable([data]);
  }
  return <div>Not an array or object</div>;
}

interface JsonEditorProps {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  diffPaths?: DiffPath[];
  side?: 'left' | 'right';
}

function JsonEditor({
  value,
  onChange,
  disabled,
  diffPaths,
  side,
}: JsonEditorProps) {
  // Supported modes per vanilla-jsoneditor docs: 'tree', 'text', 'table'
  const [view, setView] = React.useState<'tree' | 'text' | 'table'>('tree');
  let parsed: any = null;
  let error: string | null = null;
  try {
    parsed = JSON.parse(value);
  } catch (e) {
    error = "Invalid JSON";
  }

  return (
    <div className="rounded-lg border border-gray-700 overflow-hidden bg-[#23272e] h-full flex flex-col">
      {/* Custom Toolbar */}
      <Flex
        align="center"
        gap="2"
        mb="2"
        style={{ padding: 8, background: "#181a20" }}
      >
        <Button
          size="1"
          variant={view === "text" ? "solid" : "soft"}
          onClick={() => setView("text")}
        >
          Text
        </Button>
        <Button
          size="1"
          variant={view === "tree" ? "solid" : "soft"}
          onClick={() => setView("tree")}
        >
          Tree
        </Button>
        <Button
          size="1"
          variant={view === "table" ? "solid" : "soft"}
          onClick={() => setView("table")}
        >
          Table
        </Button>
      </Flex>
      <div style={{ flex: 1, minHeight: 0, background: "#23272e" }} className="jse-theme-dark">
        <JsonEditorWrapper
          value={value}
          onChange={onChange}
          disabled={!!disabled}
          mode={view as any}
        />
      </div>
    </div>
  );
}


import { computeJsonDiff, DiffPath } from './utils/jsonDiff';

function ResizableEditors({
  leftValue,
  rightValue,
  onLeftChange,
  onRightChange,
  leftDisabled,
  rightDisabled,
  leftPrettify,
  rightPrettify,
  compareToggle,
}: {
  leftValue: string;
  rightValue: string;
  onLeftChange: (v: string) => void;
  onRightChange: (v: string) => void;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  leftPrettify?: () => void;
  rightPrettify?: () => void;
  compareToggle?: React.ReactNode;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [leftWidth, setLeftWidth] = React.useState(50); // percent
  const [dragging, setDragging] = React.useState(false);

  // Persist and restore leftWidth from localStorage
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("jsonEditorLeftWidth");
      if (raw) {
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) setLeftWidth(parsed);
      }
    }
  }, []);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jsonEditorLeftWidth", String(leftWidth));
    }
  }, [leftWidth]);

  // --- Drag logic refactor ---
  const onMove = React.useCallback(
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

  const onUp = React.useCallback(() => {
    setDragging(false);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  React.useEffect(() => {
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
  try { leftObj = JSON.parse(leftValue); } catch {}
  try { rightObj = JSON.parse(rightValue); } catch {}
  const diffPaths: DiffPath[] = (leftObj && rightObj) ? computeJsonDiff(leftObj, rightObj) : [];

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "stretch",
        position: "relative",
        height: `calc(100vh - 180px)`, // Adjust 180px if you have more/less header
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
        }}
      >
        <JsonEditor
          value={leftValue}
          onChange={onLeftChange}
          disabled={leftDisabled}
          diffPaths={diffPaths}
          side="left"
        />
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
            background: "#444",
            borderRadius: 2,
          }}
        />
        {compareToggle && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {compareToggle}
          </div>
        )}
      </div>
      <div
        style={{
          flexBasis: `${100 - leftWidth}%`,
          flexGrow: 0,
          flexShrink: 0,
          minWidth: 80,
          transition: dragging ? "none" : "flex-basis 0.15s",
        }}
      >
        <JsonEditor
          value={rightValue}
          onChange={onRightChange}
          disabled={rightDisabled}
          diffPaths={diffPaths}
          side="right"
        />
      </div>
    </div>
  );
}

export default function Home() {
  // Hydration state
  const [hydrated, setHydrated] = React.useState(false);

  // Tab renaming state
  const [editingTabId, setEditingTabId] = React.useState<string | null>(null);
  const [editingTabValue, setEditingTabValue] = React.useState("");

  // SSR-safe defaults
  const [tabs, setTabs] = React.useState<{ id: string; label: string }[]>([
    { id: "tab-1", label: "Tab 1" },
  ]);
  const [activeTab, setActiveTab] = React.useState("tab-1");
  const [jsonA, setJsonA] = React.useState<{ [tabId: string]: string }>({
    "tab-1": '{\n  "hello": 1\n}',
  });
  const [jsonB, setJsonB] = React.useState<{ [tabId: string]: string }>({
    "tab-1": '{\n  "hello": 2\n}',
  });
  const [compare, setCompare] = React.useState<{ [tabId: string]: boolean }>({
    "tab-1": false,
  });
  const [nextTabId, setNextTabId] = React.useState(2);

  // Hydrate from localStorage on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const rawTabs = localStorage.getItem("jsonEditorTabs");
      const rawActiveTab = localStorage.getItem("jsonEditorActiveTab");
      const rawJsonA = localStorage.getItem("jsonEditorJsonA");
      const rawJsonB = localStorage.getItem("jsonEditorJsonB");
      const rawCompare = localStorage.getItem("jsonEditorCompare");
      const rawNextTabId = localStorage.getItem("jsonEditorNextTabId");
      if (rawTabs) setTabs(JSON.parse(rawTabs));
      if (rawActiveTab) setActiveTab(JSON.parse(rawActiveTab));
      if (rawJsonA) setJsonA(JSON.parse(rawJsonA));
      if (rawJsonB) setJsonB(JSON.parse(rawJsonB));
      if (rawCompare) setCompare(JSON.parse(rawCompare));
      if (rawNextTabId) setNextTabId(JSON.parse(rawNextTabId));
      setHydrated(true);
    }
  }, []);

  // Persist to localStorage on change
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("jsonEditorTabs", JSON.stringify(tabs));
    localStorage.setItem("jsonEditorActiveTab", JSON.stringify(activeTab));
    localStorage.setItem("jsonEditorJsonA", JSON.stringify(jsonA));
    localStorage.setItem("jsonEditorJsonB", JSON.stringify(jsonB));
    localStorage.setItem("jsonEditorCompare", JSON.stringify(compare));
    localStorage.setItem("jsonEditorNextTabId", JSON.stringify(nextTabId));
  }, [tabs, activeTab, jsonA, jsonB, compare, nextTabId]);

  if (!hydrated) return null; // Or a spinner

  const startEditTab = (id: string, label: string) => {
    setEditingTabId(id);
    setEditingTabValue(label);
  };
  const finishEditTab = (id: string) => {
    setTabs((prev: { id: string; label: string }[]) =>
      prev.map((tab: { id: string; label: string }) =>
        tab.id === id
          ? { ...tab, label: editingTabValue.trim() || "Untitled" }
          : tab
      )
    );
    setEditingTabId(null);
    setEditingTabValue("");
  };
  const cancelEditTab = () => {
    setEditingTabId(null);
    setEditingTabValue("");
  };

  const handleAddTab = () => {
    const newId = `tab-${nextTabId}`;
    setTabs([...tabs, { id: newId, label: `New Tab` }]);
    setJsonA((prev: { [tabId: string]: string }) => ({
      ...prev,
      [newId]: "{}",
    }));
    setJsonB((prev: { [tabId: string]: string }) => ({
      ...prev,
      [newId]: "{}",
    }));
    setCompare((prev: { [tabId: string]: boolean }) => ({
      ...prev,
      [newId]: false,
    }));
    setActiveTab(newId);
    setNextTabId((id: number) => id + 1);
  };

  const handleDeleteTab = (tabId: string) => {
    const idx = tabs.findIndex(
      (t: { id: string; label: string }) => t.id === tabId
    );
    const newTabs = tabs.filter(
      (t: { id: string; label: string }) => t.id !== tabId
    );
    setTabs(newTabs);
    setJsonA((prev: { [tabId: string]: string }) => {
      const copy = { ...prev };
      delete copy[tabId];
      return copy;
    });
    setJsonB((prev: { [tabId: string]: string }) => {
      const copy = { ...prev };
      delete copy[tabId];
      return copy;
    });
    setCompare((prev: { [tabId: string]: boolean }) => {
      const copy = { ...prev };
      delete copy[tabId];
      return copy;
    });
    // Switch to previous tab, or first tab if deleted first
    if (newTabs.length > 0) {
      const prevIdx = Math.max(0, idx - 1);
      setActiveTab(newTabs[prevIdx].id);
    }
  };

  return (
    <Box p="6" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        orientation="horizontal"
      >
        <Flex align="center" gap="3">
          <Tabs.List>
            {tabs.map((tab: { id: string; label: string }, i: number) => (
              <div key={tab.id} className="flex items-center group">
                <Tabs.Trigger value={tab.id}>
                  {editingTabId === tab.id ? (
                    <input
                      autoFocus
                      value={editingTabValue}
                      style={{
                        font: "inherit",
                        width: Math.max(60, editingTabValue.length * 8),
                        background: "transparent",
                        border: "1px solid #555",
                        color: "inherit",
                        borderRadius: 4,
                        padding: "0 4px",
                      }}
                      onChange={(e) => setEditingTabValue(e.target.value)}
                      onBlur={() => finishEditTab(tab.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          finishEditTab(tab.id);
                        } else if (e.key === "Escape") {
                          cancelEditTab();
                        }
                      }}
                    />
                  ) : (
                    <span
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        startEditTab(tab.id, tab.label);
                      }}
                      style={{
                        cursor: "pointer",
                        minWidth: 60,
                        display: "inline-block",
                      }}
                    >
                      {tab.label}
                    </span>
                  )}
                </Tabs.Trigger>
                {/* Delete tab button, only if more than 1 tab */}
                {tabs.length > 1 && (
                  <button
                    type="button"
                    className="ml-1 opacity-60 group-hover:opacity-100 hover:bg-gray-700 rounded p-0.5 transition"
                    tabIndex={-1}
                    aria-label="Close tab"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTab(tab.id);
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="4" x2="10" y2="10" />
                      <line x1="10" y1="4" x2="4" y2="10" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </Tabs.List>
          <Button size="1" onClick={handleAddTab}>
            +
          </Button>
        </Flex>
        <Separator my="3" size="4" />
        {tabs.map((tab) => (
          <Tabs.Content key={tab.id} value={tab.id}>
            <Flex align="center" gap="3" mb="3">
              <Flex align="center" gap="2">
                <Checkbox
                  variant="surface"
                  onCheckedChange={(checked) =>
                    setCompare((prev) => ({ ...prev, [tab.id]: !!checked }))
                  }
                />
                Compare
              </Flex>
            </Flex>
            <ResizableEditors
              leftValue={jsonA[tab.id] || ""}
              rightValue={jsonB[tab.id] || ""}
              onLeftChange={(v) =>
                setJsonA((prev) => ({ ...prev, [tab.id]: v }))
              }
              onRightChange={(v) =>
                setJsonB((prev) => ({ ...prev, [tab.id]: v }))
              }
              leftDisabled={false}
              rightDisabled={false}
              leftPrettify={() =>
                setJsonA((prev) => ({
                  ...prev,
                  [tab.id]: prettifyJson(jsonA[tab.id] || ""),
                }))
              }
              rightPrettify={() =>
                setJsonB((prev) => ({
                  ...prev,
                  [tab.id]: prettifyJson(jsonB[tab.id] || ""),
                }))
              }
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
}
