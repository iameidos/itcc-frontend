export function PageTransition({ page, children }: { page: number; children: React.ReactNode }) {
  return (
    <div key={page} className="fade-in">
      {children}
    </div>
  );
}
