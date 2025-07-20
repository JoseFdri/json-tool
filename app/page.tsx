"use client";
import * as React from "react";
import { Tabs, Button, Flex, Box, Separator } from "@radix-ui/themes";
import { Tab } from "./components/Tab";
import { useState, memo } from "react";
import { useHydratedState } from "./hooks/useHydrateState";

type Tab = {
  id: string;
  label: string;
};
type JsonMap = { [tabId: string]: string };

const LOCAL_STORAGE_KEYS = {
  tabs: "jsonEditorTabs",
  activeTab: "jsonEditorActiveTab",
  jsonA: "jsonEditorJsonA",
  jsonB: "jsonEditorJsonB",
  compare: "jsonEditorCompare",
  nextTabId: "jsonEditorNextTabId",
};

export default function Home() {
  const [hydrated, setHydrated] = React.useState(false);
  // Tab renaming state
  const [editingTabId, setEditingTabId] = React.useState<string | null>(null);
  const [editingTabValue, setEditingTabValue] = React.useState("");

  // SSR-safe defaults
  const [tabs, setTabs] = useHydratedState<Tab[]>(LOCAL_STORAGE_KEYS.tabs, [
    {
      id: "tab-1",
      label: "Tab 1",
    },
  ]);
  const [activeTab, setActiveTab] = useHydratedState<string>(
    LOCAL_STORAGE_KEYS.activeTab,
    "tab-1"
  );

  const [nextTabId, setNextTabId] = useHydratedState<number>(
    LOCAL_STORAGE_KEYS.nextTabId,
    2
  );

  // Hydration check
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  // Tab editing handlers
  const startEditTab = (id: string, label: string) => {
    setEditingTabId(id);
    setEditingTabValue(label);
  };
  const finishEditTab = (id: string) => {
    setTabs((prev) =>
      prev.map((tab) =>
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

  // Tab CRUD
  const handleAddTab = () => {
    const newId = `tab-${nextTabId}`;
    setTabs([...tabs, { id: newId, label: `New Tab` }]);
    setActiveTab(newId);
    setNextTabId((id) => id + 1);
  };

  const handleDeleteTab = (tabId: string) => {
    const idx = tabs.findIndex((t) => t.id === tabId);
    const newTabs = tabs.filter((t) => t.id !== tabId);
    setTabs(newTabs);
    if (newTabs.length > 0) {
      const prevIdx = Math.max(0, idx - 1);
      setActiveTab(newTabs[prevIdx].id);
    }
  };

  return (
    <Box p="6" >
      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        orientation="horizontal"
      >
        <Flex align="center" gap="3">
          <Tabs.List>
            {tabs.map((tab) => (
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
                        if (e.key === "Enter") finishEditTab(tab.id);
                        else if (e.key === "Escape") cancelEditTab();
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
          <Tab
            key={tab.id}
            id={tab.id}
          />
        ))}
      </Tabs.Root>
    </Box>
  );
}
