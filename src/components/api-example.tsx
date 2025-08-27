"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Play } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useState } from "react"

export function ApiExample() {
  const examples: Record<string, string> = {
    nodejs: `// Node.js example using fetch
const fetch = require('node-fetch');

fetch('https://api.authapi.com/v1/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  },
  body: JSON.stringify({
    email: 'user@email.com',
    password: 'password123'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`,

    python: `# Python example
import requests

url = "https://api.authapi.com/v1/login"
headers = {"Authorization": "Bearer YOUR_TOKEN_HERE"}
data = {"email": "user@email.com", "password": "password123"}

response = requests.post(url, json=data, headers=headers)
print(response.json())`,

    java: `// Java example using HttpClient
import java.net.http.*;
import java.net.URI;
import java.net.http.HttpRequest.BodyPublishers;

public class Main {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.authapi.com/v1/login"))
            .header("Authorization", "Bearer YOUR_TOKEN_HERE")
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString("{\\"email\\": \\"user@email.com\\", \\"password\\": \\"password123\\"}"))
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

    react: `// React example using fetch
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("https://api.authapi.com/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;`
  }

  const [language, setLanguage] = useState("nodejs")

  return (
    <section id="example" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple as Copy and Paste</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how easy it is to integrate our API into any project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-secundary border-primary/20 ">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Login Example</CardTitle>
              <div className="flex gap-2">
                <Button
                className="cursor-pointer"
                  size="sm"
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(examples[language])}
                >
                  <Copy className="h-4 w-4 mr-2 " />
                  Copy
                </Button>
               
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex gap-2 mb-4 border-b">
                {Object.keys(examples).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 py-2  text-sm cursor-pointer
                      ${language === lang 
                        ? " text-primary  border-b-1 border-primary"
                        : ""
                      }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <SyntaxHighlighter
                language={
                  language === "java" ? "java" :
                  language === "react" ? "jsx" :
                  "javascript"
                }
                style={dracula}
                customStyle={{
                  fontFamily: "JetBrains Mono",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  background: "#1a1a1a"
                }}
              >
                {examples[language]}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
