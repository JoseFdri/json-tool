import { Tabs, Checkbox, Flex } from "@radix-ui/themes";
import { ResizableEditors } from "./ResizableEditors";
import { useEffect, useState, useMemo, useCallback } from "react";
import type {
  OnRenderValue,
  RenderValueProps,
  RenderValueComponentDescription,
} from "vanilla-jsoneditor";
import { useHydratedState } from "../hooks/useHydrateState";

type Props = {
  id: string;
};

const LOCAL_STORAGE_KEYS = {
  tabs: "jsonEditorTabs",
  activeTab: "jsonEditorActiveTab",
  jsonA: "jsonEditorJsonA",
  jsonB: "jsonEditorJsonB",
  compare: "jsonEditorCompare",
  nextTabId: "jsonEditorNextTabId",
};

type JsonMap = { tabId: string, data: string };

const defaultJson = "{\n  \"hello\": 1\n}"

export const Tab = ({
  id,
}: Props) => {
  const [compare, setCompare] = useState(false);
  const [leftEditorView, setLeftEditorView] = useState<
    "text" | "tree" | "table"
  >("text");
  const [rightEditorView, setRightEditorView] = useState<
    "text" | "tree" | "table"
  >("text");

  const [jsonA, setJsonA] = useHydratedState<JsonMap>(
    `${LOCAL_STORAGE_KEYS.jsonA}:${id}`,
    {
      tabId: `${id}`,
      data: defaultJson,
    }
  );
  const [jsonB, setJsonB] = useHydratedState<JsonMap>(
    `${LOCAL_STORAGE_KEYS.jsonB}:${id}`,
    {
      tabId: `${id}`,
      data: defaultJson,
    }
  );

  useEffect(() => {
    if (!compare) {
      return;
    }
    setRightEditorView("tree");
    setLeftEditorView("tree");
  }, [compare]);

	const onLeftChange = useCallback((value: string) => {
		setJsonA((prev) => ({ ...prev, data: value }));
	}, [setJsonA]);

	const onRightChange = useCallback((value: string) => {
		console.log('prop changed', value)
		setJsonB((prev) => ({ ...prev, data: value }));
	}, [setJsonB]);

  return (
    <Tabs.Content key={id} value={id}>
      <Flex align="center" gap="3" mb="3">
				<Flex align="center" gap="2">
					<Checkbox
						id={`compare-checkbox-${id}`}
						variant="surface"
						checked={compare}
						onCheckedChange={(checked) => {
							setCompare(!!checked);
						}}
					/>
					<label htmlFor={`compare-checkbox-${id}`} className="cursor-pointer">Compare</label>
				</Flex>
      </Flex>
      <ResizableEditors
        leftValue={jsonA.data}
        rightValue={jsonB.data}
        leftMode={leftEditorView}
        rightMode={rightEditorView}
        setLeftMode={setLeftEditorView}
        setRightMode={setRightEditorView}
        onLeftChange={onLeftChange}
        onRightChange={onRightChange}
        isCompare={compare}
      />
    </Tabs.Content>
  );
};
