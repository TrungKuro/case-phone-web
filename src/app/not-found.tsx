export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <div className="rounded-xl border border-border bg-secondary p-6 shadow-md">
        <h2 className="text-4xl font-bold text-destructive">404</h2>
        <p className="mt-2 text-muted-foreground">
          This page could not be found.
        </p>
      </div>
    </div>
  );
}
