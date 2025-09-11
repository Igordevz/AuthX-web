"use client";

import { useState } from "react";
import { DashboardLayout } from "@/src/components/dashboard/dashboard-layout";
import {
  DocSidebar,
  ApiContent,
  StaticContent,
  docSections,
  DocItem,
} from "@/src/components/dashboard/documentation"; // Corrected import path

export default function DocumentationPage() {
  const [selectedItemId, setSelectedItemId] = useState<string>("getting-started");

  const selectedSection = docSections.find(section => 
    section.items.some(item => item.id === selectedItemId)
  );
  const selectedItem = selectedSection?.items.find(item => item.id === selectedItemId) as DocItem | undefined;

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
        <p className="text-muted-foreground max-w-3xl">
          Welcome to our authentication API documentation. Here you will find all the necessary endpoints to integrate your application with our system quickly and securely. Use the menu on the left to navigate through the available endpoints and general information.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <DocSidebar
          docSections={docSections}
          selectedItemId={selectedItemId}
          onSelectItemId={setSelectedItemId}
        />

        <main className="w-full md:w-2/3 lg:w-3/4">
          {selectedItem && selectedItem.type === "static" && (
            <StaticContent item={selectedItem} />
          )}

          {selectedItem && selectedItem.type === "api" && (
            <ApiContent item={selectedItem} />
          )}
        </main>
      </div>
    </DashboardLayout>
  );
}