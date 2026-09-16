export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <a href="/" className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition-opacity">
          Go Home
        </a>
      </div>
    </div>
  );
}
