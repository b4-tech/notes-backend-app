import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    const data = {
      greeting: "Task 3 for Radency",
      fields: {
        name: "string",
        category: "string",
        content: "string",
        active: "boolean",
        date: "string (optional)"
      },
      endpoints: [
        { method: "POST", path: "/notes", action: "Create a note object." },
        { method: "DELETE", path: "/notes/:id", action: "Remove item." },
        { method: "PATCH", path: "/notes/:id", action: "Edit item." },
        { method: "GET", path: "/notes/:id", action: "Retrieve item." },
        { method: "GET", path: "/notes", action: "Get all notes." },
        { method: "GET", path: "/notes/stats", action: "Get aggregated data statistics." }
      ]
    };

    let result = `<h1>${data.greeting}</h1>`;

    result += '<h2>Fields:</h2><ul>';
    for (const field in data.fields) {
      result += `<li><strong>${field}:</strong> ${data.fields[field]}</li>`;
    }
    result += '</ul>';

    result += '<h2>Endpoints:</h2><ul>';
    for (const endpoint of data.endpoints) {
      result += `<li><strong>${endpoint.method} ${endpoint.path}:</strong> ${endpoint.action}</li>`;
    }
    result += '</ul>';

    return result;
  }
}
