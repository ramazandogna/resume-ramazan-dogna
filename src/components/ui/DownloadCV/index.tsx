import cvPdf from '../../../assets/001_Ramazan_Dogan_Software_Engineer.pdf?url';

export default function DownloadCV() {
  return (
    <a
      className="cv-fab"
      href={cvPdf}
      download="Ramazan_Dogan_Software_Engineer.pdf"
      aria-label="Download Ramazan Doğan's CV (PDF)"
      title="Download CV (PDF)"
    >
      <svg
        className="cv-fab__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path className="cv-fab__arrow" d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      <span className="cv-fab__label">Download CV</span>
    </a>
  );
}
