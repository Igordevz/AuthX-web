"use client";
import React from "react";
import { FileJson, FilePlus2, LogIn, BookOpen, HelpCircle } from "lucide-react";
import { DocSection } from "./types";
import { CodeBlock } from "@/components/ui/code-block"; // Import CodeBlock

export const axiosConfig = `import axios from "./axios"; // Assuming axios instance is configured here

const APP_ID = "YOUR_APP_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// Common headers for all requests
const commonHeaders = {
  "app-id": APP_ID,
  "public-key": PUBLIC_KEY,
};
`;

export const docSections: DocSection[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        id: "getting-started",
        title: "Getting Started",
        type: "static",
        icon: <BookOpen className="h-5 w-5" />,
        content: (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Welcome to AuthX API Documentation!</h2>
            <p>This documentation is designed to help you integrate your application with our authentication system quickly and efficiently.</p>
            <p>To begin, ensure you have your `app-id` and `public-key` credentials. These are essential for all API requests.</p>
            <p>Navigate through the sections in the left menu to explore authentication endpoints and other important topics.</p>
            <h3 className="text-xl font-semibold mt-6">API Structure</h3>
            <p>Our API follows RESTful principles, using JSON for communication. All endpoints are accessed via HTTPS.</p>
            <h3 className="text-xl font-semibold mt-6">Application Authentication</h3>
            <p>All requests must include `app-id` and `public-key` headers to identify your application. Without them, requests will be rejected.</p>
            <CodeBlock language="javascript" value={`// Example headers in JavaScript (fetch API)\nconst headers = {\n  'app-id': 'YOUR_APP_ID',\n  'public-key': 'YOUR_PUBLIC_KEY',\n  'Content-Type': 'application/json'\n};`}/>
          </div>
        ),
      },
      {
        id: "faq",
        title: "FAQ",
        type: "static",
        icon: <HelpCircle className="h-5 w-5" />,
        content: (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Frequently Asked Questions (FAQ)</h2>
            <h3 className="text-xl font-semibold mt-6">What are `app-id` and `public-key`?</h3>
            <p>These are unique credentials provided to each application to identify and authorize it to use the AuthX API.</p>
            <h3 className="text-xl font-semibold mt-6">How do I handle errors?</h3>
            <p>Our API returns standard HTTP status codes (e.g., 400 Bad Request, 401 Unauthorized, 409 Conflict) and descriptive error messages in the JSON response body.</p>
            <CodeBlock language="json" value={`{\n  "error": "Descriptive error message"\n}`}/>
            <h3 className="text-xl font-semibold mt-6">Is there Rate Limiting?</h3>
            <p>Yes, we apply request limits based on your plan (Free, Basic, Pro). The counter resets every 7 days. Exceeding the limit will result in a 429 Too Many Requests error.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "authentication",
    title: "Authentication",
    items: [
      {
        id: "create-user",
        title: "Create User",
        type: "api",
        method: "POST",
        path: "/v1/auth/create",
        description: "Creates a new user in the authentication system.",
        icon: <FilePlus2 className="h-5 w-5" />,
        headers: [
            { name: "app-id", description: "Your application's ID." },
            { name: "public-key", description: "Your application's public key." },
        ],
        requestBody: {
            json: `{ 
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123"
}`,
            javascript: `fetch('https://your-api.com/v1/auth/create', {
  method: 'POST',
  headers: {
    'app-id': 'YOUR_APP_ID',
    'public-key': 'YOUR_PUBLIC_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword123"
  })
});`,
            curl: `curl -X POST \
  https://your-api.com/v1/auth/create \
  -H 'app-id: YOUR_APP_ID' \
  -H 'public-key: YOUR_APP_ID' \
  -H 'Content-Type: application/json' \
  -d '{\"name\": \"John Doe\", \"email\": \"john.doe@example.com\", \"password\": \"securepassword123\"}'`,
            python: `import requests\n\nurl = "https://your-api.com/v1/auth/create"
headers = {
    "app-id": "YOUR_APP_ID",\n    "public-key": "YOUR_PUBLIC_KEY",\n    "Content-Type": "application/json"
}
data = {
    "name": "John Doe",\n    "email": "john.doe@example.com",\n    "password": "securepassword123"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`,
            java: `import okhttp3.MediaType;\nimport okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.RequestBody;\nimport okhttp3.Response;\n
public class CreateUser {\n    public static void main(String[] args) throws Exception {\n        OkHttpClient client = new OkHttpClient();\n        MediaType mediaType = MediaType.parse("application/json");\n        String json = "{\"name\": \"John Doe\", \"email\": \"john.doe@example.com\", \"password\": \"securepassword123\"}";\n        RequestBody body = RequestBody.create(mediaType, json);\n        Request request = new Request.Builder()\n                .url("https://your-api.com/v1/auth/create")
                .post(body)
                .addHeader("app-id", "YOUR_APP_ID")
                .addHeader("public-key", "YOUR_PUBLIC_KEY")
                .addHeader("Content-Type", "application/json")
                .build();\n
        Response response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}`,
            php: `<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://your-api.com/v1/auth/create',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => '',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => 'POST',\n  CURLOPT_POSTFIELDS =>'{\n    \"name\": \"John Doe\",\n    \"email\": \"john.doe@example.com\",\n    \"password\": \"securepassword123\"\n}',\n  CURLOPT_HTTPHEADER => array(\n    'app-id: YOUR_APP_ID',\n    'public-key: YOUR_PUBLIC_KEY',\n    'Content-Type: application/json'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n\n?>`,
        },
        responses: [
          {
            status: "201 Created",
            variant: "secondary",
            description: "User created successfully.",
            value: `{ 
  "status": "success",
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
          },
          {
            status: "409 Conflict",
            variant: "destructive",
            description: "The provided email is already in use.",
            value: `{ 
  "error": "User already exists with this email"
}`,
          },
        ],
        frontendExample: axiosConfig + `\nasync function createUser(name, email, password) {\n  try {\n    const response = await axios.post('/v1/auth/create', { name, email, password }, { headers: commonHeaders });\n    console.log('User created:', response.data);\n    return response.data;\n  } catch (error) {\n    console.error('Error creating user:', error.response ? error.response.data : error.message);\n    throw error;\n  }
}`,
      },
      {
        id: "login-user",
        title: "Login",
        type: "api",
        method: "POST",
        path: "/v1/auth/login",
        description: "Authenticates an existing user and returns a JWT token.",
        icon: <LogIn className="h-5 w-5" />,
        headers: [
            { name: "app-id", description: "Your application's ID." },
            { name: "public-key", description: "Your application's public key." },
        ],
        requestBody: {
            json: `{ 
  "email": "john.doe@example.com",
  "password": "securepassword123"
}`,
            javascript: `fetch('https://your-api.com/v1/auth/login', {
  method: 'POST',
  headers: {
    'app-id': 'YOUR_APP_ID',
    'public-key': 'YOUR_PUBLIC_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: "john.doe@example.com",
    password: "securepassword123"
  })
});`,
            curl: `curl -X POST \
  https://your-api.com/v1/auth/login \
  -H 'app-id: YOUR_APP_ID' \
  -H 'public-key: YOUR_APP_ID' \
  -H 'Content-Type: application/json' \
  -d '{ \"email\": \"john.doe@example.com\", \"password\": \"securepassword123\" }'`,
            python: `import requests\n\nurl = "https://your-api.com/v1/auth/login"
headers = {
    "app-id": "YOUR_APP_ID",\n    "public-key": "YOUR_PUBLIC_KEY",\n    "Content-Type": "application/json"
}
data = {
    "email": "john.doe@example.com",\n    "password": "securepassword123"
}

response = requests.post(url, headers=headers, json=data)\nprint(response.json())`,
            java: `import okhttp3.MediaType;\nimport okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.RequestBody;\nimport okhttp3.Response;\n
public class Login {\n    public static void main(String[] args) throws Exception {\n        OkHttpClient client = new OkHttpClient();\n        MediaType mediaType = MediaType.parse("application/json");\n        String json = "{\"email\": \"john.doe@example.com\", \"password\": \"securepassword123\"}";\n        RequestBody body = RequestBody.create(mediaType, json);\n        Request request = new Request.Builder()\n                .url("https://your-api.com/v1/auth/login")
                .post(body)
                .addHeader("app-id", "YOUR_APP_ID")
                .addHeader("public-key", "YOUR_PUBLIC_KEY")
                .addHeader("Content-Type", "application/json")
                .build();\n
        Response response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}`,
            php: `<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://your-api.com/v1/auth/login',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => '',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => 'POST',\n  CURLOPT_POSTFIELDS =>'{\n    \"email\": \"john.doe@example.com\",\n    \"password\": \"securepassword123\"\n}',\n  CURLOPT_HTTPHEADER => array(\n    'app-id: YOUR_APP_ID',\n    'public-key: YOUR_PUBLIC_KEY',\n    'Content-Type: application/json'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n\n?>`,
        },
        responses: [
          {
            status: "200 OK",
            variant: "secondary",
            description: "Login successful.",
            value: `{ 
  "status": "success",
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
          },
          {
            status: "401 Unauthorized",
            variant: "destructive",
            description: "Invalid credentials.",
            value: `{ 
  "error": "Invalid email or password"
}`,
          },
        ],
        frontendExample: axiosConfig + `\nasync function loginUser(email, password) {\n  try {\n    const response = await axios.post('/v1/auth/login', { email, password }, { headers: commonHeaders });\n    console.log('Login successful:', response.data);\n    return response.data;\n  } catch (error) {\n    console.error('Login error:', error.response ? error.response.data : error.message);\n    throw error;\n  }
}`,
      },
      {
        id: "get-user",
        title: "Get User Data",
        type: "api",
        method: "GET",
        path: "/v1/token",
        description: "Returns the authenticated user's data using the JWT token.",
        icon: <FileJson className="h-5 w-5" />,
        headers: [
            { name: "app-id", description: "Your application's ID." },
            { name: "public-key", description: "Your application's public key." },
            { name: "jwt", description: "JWT token returned upon login." },
        ],
        requestBody: null, // GET requests typically don't have a body
        responses: [
          {
            status: "200 OK",
            variant: "secondary",
            description: "User data retrieved successfully.",
            value: `{ 
  "status": "success",
  "message": "Login successful",
  "token": {
    "id": "uuid-of-user",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "email_verified": false,
    "is_active": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "last_login_at": "2024-01-15T14:20:00.000Z",
    "updatedAt": "2024-01-15T14:20:00.000Z"
  }
}`,
          },
          {
            status: "401 Unauthorized",
            variant: "destructive",
            description: "Invalid, expired, or missing token.",
            value: `{ 
  "error": "Invalid token"
}`,
          },
        ],
        frontendExample: axiosConfig + `\nasync function getUserData(jwtToken) {\n  try {\n    const response = await axios.get('/v1/token', { 
      headers: { 
        ...commonHeaders,\n        'jwt': jwtToken 
      }
    });\n    console.log('User data:', response.data);\n    return response.data;\n  } catch (error) {\n    console.error('Error getting user data:', error.response ? error.response.data : error.message);\n    throw error;\n  }
}`,
      },
    ],
  },
];