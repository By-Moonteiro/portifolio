export default function Footer() {
  return (
    <footer
      className="relative z-10 py-8 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
 
  <span className="font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
    © 2026 —  <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
    @By-Moonteiro<span style={{ animation: "blink 1s step-end infinite" }}>_</span>
  </span>
  </span>
</div>
    </footer>
  );
}