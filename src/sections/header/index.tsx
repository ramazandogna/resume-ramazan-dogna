export default function Header() {
  return (
    <section className="flex flex-col gap-10px">
      <h2 className="text-2xl font-400 uppercase text-32px">
        Ramazan <span className="font-bold">Doğan</span>
      </h2>
      <h3>Frontend Developer</h3>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-2">
        <div>Türkiye</div>
        <div>
          <a href="mailto:doganrmzn40@gmail.com" className="hover:underline">
            doganrmzn40@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+905071016179" className="hover:underline">
            (+90) 507 101 61 79
          </a>
        </div>
        <div>
          <a
            href="https://ramazandogna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ramazandogna.com
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/ramazandogna/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://github.com/ramazandogna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
