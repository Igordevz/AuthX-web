"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "next-themes";

interface CodeBlockProps {
  language: string;
  value: string;
}

const chatGPTDarkStyle = {
  'code[class*="language-"]': { background: "#090909", color: "#EDEDED" },
  'pre[class*="language-"]': { background: "#090909", color: "#EDEDED" },
  comment: { color: "#6A9955" },
  keyword: { color: "#569CD6" },
  string: { color: "#CE9178" },
  number: { color: "#B5CEA8" },
  function: { color: "#DCDCAA" },
  class: { color: "#4EC9B0" },
  tag: { color: "#569CD6" },
  "attr-name": { color: "#9CDCFE" },
  "attr-value": { color: "#CE9178" },
  punctuation: { color: "#EDEDED" },
  operator: { color: "#EDEDED" },
  boolean: { color: "#569CD6" },
  property: { color: "#DCDCAA" },
  selector: { color: "#D7BA7D" },
  url: { color: "#CE9178" },
  variable: { color: "#9CDCFE" },
  entity: { color: "#EDEDED" },
  atrule: { color: "#C586C0" },
  regex: { color: "#D16969" },
  important: { color: "#F44747", fontWeight: "bold" },
  error: { color: "#F44747" },
};

const chatGPTLightStyle = {
  'code[class*="language-"]': { background: "#fff", color: "#000000" },
  'pre[class*="language-"]': { background: "#fff", color: "#000000" },
  comment: { color: "#008000" },
  keyword: { color: "#0000FF" },
  string: { color: "#A31515" },
  number: { color: "#098658" },
  function: { color: "#795E26" },
  class: { color: "#267F99" },
  tag: { color: "#267F99" },
  "attr-name": { color: "#0000FF" },
  "attr-value": { color: "#A31515" },
  punctuation: { color: "#000000" },
  operator: { color: "#000000" },
  boolean: { color: "#0000FF" },
  property: { color: "#795E26" },
  selector: { color: "#795E26" },
  url: { color: "#A31515" },
  variable: { color: "#000000" },
  entity: { color: "#000000" },
  atrule: { color: "#0000FF" },
  regex: { color: "#A31515" },
  important: { color: "#E51400", fontWeight: "bold" },
  error: { color: "#E51400" },
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const { theme } = useTheme();

  const currentStyle = theme === "dark" ? chatGPTDarkStyle : chatGPTLightStyle;
  const currentBackground = theme === "dark" ? "#090909" : "#FAFAFA";

  return (
    <div
      style={{
        margin: 10,
        padding: "20px",
        borderRadius: "0.5rem",
        overflow: "auto",
      }}
      className="border-2 "
    >
      <SyntaxHighlighter language={language} style={currentStyle}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};
