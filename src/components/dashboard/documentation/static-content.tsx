import React from "react";
import { StaticDocItem } from "./types"; // Import the type

interface StaticContentProps {
  item: StaticDocItem;
}

export const StaticContent: React.FC<StaticContentProps> = ({ item }) => {
  return (
    <div className="space-y-8">
      {item.content}
    </div>
  );
};
