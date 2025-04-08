export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background text-foreground">
      <div className="bg-secondary p-6 rounded-xl shadow-md border border-border">
        <h2 className="text-4xl font-bold text-destructive">404</h2>
        <p className="mt-2 text-muted-foreground">
          This page could not be found.
        </p>
      </div>
    </div>
  );
}
