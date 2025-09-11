import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ApiDocItem } from "./types"; // Import the type
import { MethodBadge } from "./method-badge";
import { ApiHeadersTable } from "./api-headers-table";
import { ApiRequestBodySection } from "./api-request-body-section";
import { ApiResponseSection } from "./api-response-section";
import { ApiFrontendExampleSection } from "./api-frontend-example-section";

interface ApiContentProps {
  item: ApiDocItem;
}

export const ApiContent: React.FC<ApiContentProps> = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4 mb-2">
          <MethodBadge method={item.method} />
          <h2 className="text-2xl font-bold font tracking-tight">{item.path}</h2>
        </div>
        <CardDescription className="text-base">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <ApiHeadersTable headers={item.headers} />
        <ApiRequestBodySection requestBody={item.requestBody} />
        <ApiResponseSection responses={item.responses} />
        <ApiFrontendExampleSection frontendExample={item.frontendExample} />
      </CardContent>
    </Card>
  );
};
