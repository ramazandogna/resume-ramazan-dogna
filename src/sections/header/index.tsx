import { icons } from '../../assets/Icons/icons';

export default function Header() {
  return (
    <section className="flex flex-col gap-10px">
      <h2 className="text-2xl font-400 uppercase text-32px hover-container">
        <span className="hover-wrapper">Ramazan</span>{' '}
        <span className="font-bold hover-wrapper">Doğan</span>
      </h2>
      <h3>Frontend Developer</h3>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-2">
        <div>Türkiye</div>
        <div className="flex">
          <a href="mailto:doganrmzn40@gmail.com" className="link-effect flex! items-center gap-2">
            <img src={icons.mail} alt="mail Icon" className="mr-2" />
            doganrmzn40@gmail.com
          </a>
        </div>
        <div className="flex">
          <a href="tel:+905071016179" className="link-effect flex! items-center gap-2">
            <img src={icons.phone} alt="phone Icon" className="mr-2" />
            (+90) 507 101 61 79
          </a>
        </div>
        <div className="flex">
          <a
            href="https://ramazandogna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-effect flex! items-center gap-2 relative group"
          >
            <img src={icons.site} alt="site Icon" className="mr-2" />
            ramazandogna.com
            <span className="tooltip transition-all absolute left-full ml-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
              Years ago, I accidentally wrote my last name as "Dogna" instead of "Dogan," and since
              then, I've been using it that way on all my social media accounts.
            </span>
          </a>
        </div>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/ramazandogna/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-effect flex! items-center gap-2"
          >
            <img src={icons.linkedin} alt="Linkedin Icon" className="mr-2" />
            LinkedIn
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/ramazandogna"
            target="_blank"
            rel="noopener noreferrer"
            className="link-effect flex! items-center gap-2"
          >
            <img src={icons.github} alt="GitHub Icon" className="mr-2" />
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
