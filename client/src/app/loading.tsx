export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-4"
      >
        <div
          aria-hidden="true"
          className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"
        />

        <span className="sr-only">Loading page...</span>
      </div>
    </main>
  );
}