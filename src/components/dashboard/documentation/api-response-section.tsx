import React from "react";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { ApiResponse } from "./types"; // Import the type

interface ApiResponseSectionProps {
  responses: ApiResponse[];
}

export const ApiResponseSection: React.FC<ApiResponseSectionProps> = ({ responses }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-lg">Responses</h3>
      <div className="space-y-6">
        {responses.map((res, index) => (
          <div key={index}>
            <Badge variant={res.variant}>{res.status}</Badge>
            <p className="text-sm text-muted-foreground mt-2 mb-2">
              {res.description}
            </p>
            <CodeBlock language="json" value={res.value} />
          </div>
        ))}
      </div>
    </div>
  );
};
