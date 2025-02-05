
"use client"; 

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    
    console.error("Caught an error in app error boundary:", error);
  }, [error]);

  return (
    <html>
      <body style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <button
          onClick={() => reset()}
          style={{
            padding: "0.5rem 1rem",
            background: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
