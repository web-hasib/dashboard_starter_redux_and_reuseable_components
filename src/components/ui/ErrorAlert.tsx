"use client";

import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import React from "react";

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface ApiErrorData {
  success?: boolean;
  statusCode?: number;
  message?: string;
  errorMessages?: { message: string }[];
}

interface ErrorAlertProps {
  error?: string | FetchBaseQueryError | SerializedError | null;
  className?: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error, className = "" }) => {
  if (!error) return null;

  // Handle string errors
  if (typeof error === "string") {
    return (
      <Alert
        variant="destructive"
        className={`border-red-400 bg-red-50 ${className}`}
      >
        <div className="ml-2">
          <AlertTitle className="font-semibold text-red-700">Error</AlertTitle>
          <AlertDescription className="text-xl text-red-600">
            {error}
          </AlertDescription>
        </div>
      </Alert>
    );
  }

  // Handle RTK Query / API structured error
  // Type safe extraction without `any`
  const fetchError = error as FetchBaseQueryError;
  const serializedError = error as SerializedError;

  let apiErrorData: ApiErrorData | undefined;

  if ("data" in fetchError && fetchError.data) {
    apiErrorData = fetchError.data as ApiErrorData;
  } else if ("error" in serializedError && serializedError.error) {
    apiErrorData = serializedError.error as ApiErrorData;
  }

  if (!apiErrorData || apiErrorData.success !== false) return null;

  const message =
    apiErrorData.message ||
    apiErrorData.errorMessages?.[0]?.message ||
    "Something went wrong.";

  return (
    <Alert
      variant="destructive"
      className={`border-red-400 bg-red-50 flex items-center ${className}`}
    >
      <div className="ml-2">
        <AlertDescription className="text-lg text-red-600">
          {message}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default ErrorAlert;
