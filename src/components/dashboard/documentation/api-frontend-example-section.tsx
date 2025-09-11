import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface ApiFrontendExampleSectionProps {
  frontendExample: string | null;
}

export const ApiFrontendExampleSection: React.FC<ApiFrontendExampleSectionProps> = ({ frontendExample }) => {
  if (!frontendExample) {
    return null;
  }

  return (
    <div>
      <h3 className="font-semibold mb-4 text-lg">Frontend Example (Axios)</h3>
      <CodeBlock language="javascript" value={frontendExample} />
    </div>
  );
};
