"use client";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FallbackUI } from "./FallbackUI";

const ErrorBoundaryProvider = ({children} : {children: React.ReactNode}) => {
  const [retryCount, setRetryCount] = useState(0);

  return (
    <ErrorBoundary
      FallbackComponent={(props) => (
        <FallbackUI
          {...props}
          retryCount={retryCount}
          setRetryCount={setRetryCount}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryProvider;
