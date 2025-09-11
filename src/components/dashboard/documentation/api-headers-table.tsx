import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApiRequestHeader } from "./types"; // Import the type

interface ApiHeadersTableProps {
  headers: ApiRequestHeader[];
}

export const ApiHeadersTable: React.FC<ApiHeadersTableProps> = ({ headers }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-lg">Headers</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Header</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {headers.map((header) => (
            <TableRow key={header.name}>
              <TableCell className="font font-medium">{header.name}</TableCell>
              <TableCell>{header.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
