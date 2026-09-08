export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mt-2 mb-1">
      <h2 className="text-12px font-500 uppercase tracking-[0.18em] text-[var(--muted)] whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}
