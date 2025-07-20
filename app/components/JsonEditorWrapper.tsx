import dynamic from "next/dynamic";
import React from "react";

const JSONEditorReact = dynamic(() => import("../../JSONEditorReact"), {
  ssr: false,
});

import type { Mode, OnRenderValue } from "vanilla-jsoneditor";

export interface JsonEditorWrapperProps {
  value: string;
  onChange?: (v: string) => void;
  disabled: boolean;
  mode?: Mode; // Editor mode (see vanilla-jsoneditor docs)
  onRenderMenu?: any; // Optional custom toolbar renderer
  onChangeMode?: (mode: Mode) => void;
  onRenderValue?: OnRenderValue; // Optional custom value renderer
  onClassName?: (path: string[], value: any) => string;
}

/**
 * A modular wrapper for the JSON editor, handling valid/invalid JSON gracefully.
 */
const JsonEditorWrapper: React.FC<JsonEditorWrapperProps> = ({
  value,
  onChange,
  disabled,
  mode,
  onRenderMenu,
  onChangeMode,
  onRenderValue,
  onClassName,
}) => {
  // Only pass json or text, never both
  const content = React.useMemo(() => {
    try {
      return { json: JSON.parse(value) };
    } catch {
      return { text: value };
    }
  }, [value]);

  const handleChange = React.useCallback(
    (content: any) => {
      if (typeof content.text === "string" && onChange) {
        onChange(content.text);
      } else if (content.json !== undefined && onChange) {
        try {
          onChange(JSON.stringify(content.json, null, 2));
        } catch {
          onChange("");
        }
      }
    },
    [onChange]
  );

  return (
    <div style={{ width: "100%", height: "100%", minHeight: 200 }}>
      <JSONEditorReact
        content={content}
        readOnly={disabled}
        mode={mode}
        onChange={handleChange}
        mainMenuBar={false}
        onRenderMenu={onRenderMenu}
        onChangeMode={onChangeMode}
        onRenderValue={onRenderValue}
        onClassName={onClassName}
      />
    </div>
  );
};

export default JsonEditorWrapper;
