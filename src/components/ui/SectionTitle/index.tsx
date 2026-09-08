export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="border-t border-[var(--line)] pt-6 mb-3">
      <h2 className="text-13px font-600 uppercase tracking-[0.22em] text-[var(--ink)]">{title}</h2>
    </div>
  );
}
