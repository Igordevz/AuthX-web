import React from "react";
import { ChevronRight } from "lucide-react";
import { DocSection, DocItem } from "./types"; // Import types

interface DocSidebarProps {
  docSections: DocSection[];
  selectedItemId: string;
  onSelectItemId: (id: string) => void;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({ docSections, selectedItemId, onSelectItemId }) => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4">
      <div className="sticky top-24">
        <nav className="flex flex-col gap-6">
          {docSections.map((section) => (
            <div key={section.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {section.title}
              </h3>
              <div className="flex flex-col gap-1">
                {section.items.map((item: DocItem) => ( // Explicitly type item
                  <button
                    key={item.id}
                    onClick={() => onSelectItemId(item.id)}
                    className={`flex items-center justify-between text-left p-2 rounded-md text-sm transition-all duration-150 ${
                      selectedItemId === item.id
                        ? "bg-muted text-primary font-semibold border-l-2 border-primary"
                        : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${selectedItemId === item.id ? 'translate-x-0' : '-translate-x-1'}`} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
