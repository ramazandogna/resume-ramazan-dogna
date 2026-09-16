import { icons } from '../../assets/Icons/icons';
import profileImage from '../../assets/images/ramazan-vesika-son.webp';
import { portraitPlaceholder } from '../../assets/images/placeholder';
import BlurImage from '../../components/ui/BlurImage';

export default function Header() {
  return (
    <section className="flex flex-col gap-10px">
      {/* Header Layout: Name/Contact on Left, Image on Right */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Name + Contact Info */}
        <div className="flex flex-col justify-between flex-1">
          {/* Name and Title - Top Left */}
          <div className="mb-6 md:mb-4">
            <h2 className="text-32px md:text-42px font-300 uppercase tracking-[0.02em]">
              Ramazan <span className="font-600">Doğan</span>
            </h2>
            <h3 className="text-lg mt-2 text-[var(--ink-soft)]">Software Engineer</h3>
          </div>

          {/* Contact Information - Bottom Left */}
          <div className="grid text-13px grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[var(--ink-soft)]">
            <div className="flex items-center">
              <img src={icons.location} alt="location Icon" className=" mr-2" />
              Tokyo, Japan
            </div>
            <div className="flex ">
              <a
                href="mailto:doganrmzn40@gmail.com"
                className="link-effect flex! items-center gap-2"
              >
                <img src={icons.mail} alt="mail Icon" className="mr-2" />
                doganrmzn40@gmail.com
              </a>
            </div>
            <div className="flex">
              <a href="tel:+819054773317" className="link-effect flex! items-center gap-2">
                <img src={icons.phone} alt="phone Icon" className="mr-2" />
                (+81) 90-5477-3317
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
                  Years ago, I accidentally wrote my last name as "Dogna" instead of "Dogan," and
                  since then, I've been using it that way on all my social media accounts.
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
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="portrait relative w-40 h-48 md:w-44 md:h-52 rounded-[var(--radius-image)] overflow-hidden border border-[var(--line)]">
            <BlurImage
              src={profileImage}
              placeholder={portraitPlaceholder}
              alt="Ramazan Doğan"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
