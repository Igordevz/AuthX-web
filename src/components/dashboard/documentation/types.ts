export interface ApiRequestHeader {
  name: string;
  description: string;
}

export interface ApiRequestBodyExamples {
  json?: string;
  javascript?: string;
  curl?: string;
  python?: string;
  java?: string;
  php?: string;
}

export interface ApiResponse {
  status: string;
  variant: "default" | "secondary" | "destructive" | "outline" | null | undefined;
  description: string;
  value: string;
}

export interface ApiDocItem {
  id: string;
  title: string;
  type: "api";
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  icon: JSX.Element;
  headers: ApiRequestHeader[];
  requestBody: ApiRequestBodyExamples | null;
  responses: ApiResponse[];
  frontendExample: string;
}

export interface StaticDocItem {
  id: string;
  title: string;
  type: "static";
  icon: JSX.Element;
  content: JSX.Element;
}

export type DocItem = ApiDocItem | StaticDocItem;

export interface DocSection {
  id: string;
  title: string;
  items: DocItem[];
}
