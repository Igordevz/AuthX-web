"use client"; 

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord, prism, base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

interface CodeBlockProps {
  language: string;
  value: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const { theme } = useTheme(); 

  const currentThemeStyle = theme === 'dark' ? nord : base16AteliersulphurpoolLight;

  return (
    <SyntaxHighlighter language={language} style={currentThemeStyle} customStyle={{ margin: 0, padding: '1rem', borderRadius: '0.5rem' }}>
      {value}
    </SyntaxHighlighter>
  );
};
