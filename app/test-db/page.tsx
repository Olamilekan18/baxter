// app/test-db/page.tsx
import React from 'react'; // Add this import
import { connectToDatabase } from '../lib/mongodb';

export default async function TestDBPage() {
  try {
    await connectToDatabase();
    return (
      <div>
        <h1>Database Connection Test</h1>
        <p>✅ Successfully connected to MongoDB</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Database Connection Test</h1>
        <p>❌ Failed to connect to MongoDB</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}