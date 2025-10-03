"use client";

export default function Error({ error, reset }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-2">
        Something went wrong!
      </h1>
      <p className="text-gray-600 mb-4">
        {error?.message || "An unknown error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="bg-primary cursor-pointer text-white px-4 py-2 rounded transition">
        Try Again
      </button>
    </div>
  );
}
