import JsonEditorWrapper from "./JsonEditorWrapper";
import { useState, memo } from "react";
import { Button, Flex } from "@radix-ui/themes";
import type { OnRenderValue } from "vanilla-jsoneditor";
import { useEffect } from "react";

interface JsonEditorProps {
  value: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
  onRenderValue?: OnRenderValue;
  onModeChange?: (mode: "tree" | "text" | "table") => void;
  view: "tree" | "text" | "table";
  setView: (mode: "tree" | "text" | "table") => void;
  onClassName?: (path: string[], value: any) => string;
}

export function JsonEditor({
  value,
  onChange,
  disabled,
  onRenderValue,
  onModeChange,
  view,
  setView,
  onClassName,
}: JsonEditorProps) {

  useEffect(() => {
    if (onModeChange) {
      onModeChange(view);
    }
  }, [view, onModeChange]);

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
      <div
        style={{ flex: 1, minHeight: 0, background: "#23272e" }}
        className="jse-theme-dark"
      >
        <JsonEditorWrapper
          value={value}
          onChange={onChange}
          disabled={!!disabled}
          mode={view as any}
          onChangeMode={(mode) => setView(mode)}
          onRenderValue={onRenderValue}
          onClassName={onClassName}
        />
      </div>
    </div>
  );
}
