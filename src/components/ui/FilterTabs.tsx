"use client";

import clsx from "clsx";

type FilterTabsProps<T extends string> = {
  tabs: readonly T[];
  activeTab: T;
  onChange: (tab: T) => void;
};

export default function FilterTabs<T extends string>({
  tabs,
  activeTab,
  onChange,
}: FilterTabsProps<T>) {
  return (
    <div className="flex justify-center gap-6">
      {tabs.map((tab) => {
        const active = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={clsx(
              "cursor-pointer text-lg font-semibold",
              active
                ? "text-secondary"
                : "text-foreground transition hover:text-secondary",
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
