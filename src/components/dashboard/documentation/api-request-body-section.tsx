"use client"; // This component needs client-side rendering due to useState

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CodeBlock } from "@/components/ui/code-block";
import { ApiRequestBodyExamples } from "./types"; // Import the type

interface ApiRequestBodySectionProps {
  requestBody: ApiRequestBodyExamples | null;
}

export const ApiRequestBodySection: React.FC<ApiRequestBodySectionProps> = ({ requestBody }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<keyof ApiRequestBodyExamples>("json");

  if (!requestBody) {
    return null; // Don't render if no request body
  }

  const languages = Object.keys(requestBody) as (keyof ApiRequestBodyExamples)[];

  return (
    <div>
      <h3 className="font-semibold mb-4 text-lg">Request Body Example</h3>
      <div className="flex justify-end mb-2">
        <Select onValueChange={(value: keyof ApiRequestBodyExamples) => setSelectedLanguage(value)} defaultValue={selectedLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1).replace('javascript', 'JavaScript (Fetch)').replace('curl', 'cURL')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <CodeBlock language={selectedLanguage === 'javascript' ? 'javascript' : selectedLanguage === 'python' ? 'python' : selectedLanguage === 'java' ? 'java' : selectedLanguage === 'php' ? 'php' : selectedLanguage === 'curl' ? 'bash' : 'json'} value={requestBody[selectedLanguage] || ''} />
    </div>
  );
};
