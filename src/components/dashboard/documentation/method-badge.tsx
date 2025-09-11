import { Badge } from "@/components/ui/badge";
import React from "react";

interface MethodBadgeProps {
  method: "GET" | "POST" | "PUT" | "DELETE"; // Assuming these are the only methods
}

export const MethodBadge: React.FC<MethodBadgeProps> = ({ method }) => {
  const badgeClass = method === 'POST' 
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : method === 'GET'
      ? "bg-green-600 hover:bg-green-700 text-white"
      : "bg-gray-600 hover:bg-gray-700 text-white"; // Default for other methods

  return <Badge className={badgeClass}>{method}</Badge>;
};
