import Image from "next/image";
import { contact } from "@/lib/content";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-4 inline-block text-[17px] font-normal text-black underline decoration-1 underline-offset-4">
      {children}
    </h4>
  );
}

export function SiteFooter() {
  return (
    <footer id="footer" className="relative">
      <div
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(222,155,161,0.35) 1%, rgba(251,243,238,0.22) 65%)",
          backgroundColor: "#FBF3EE",
        }}
      >
        <div className="mx-auto grid max-w-[1425px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-3 lg:px-10 lg:py-20">
          {/* Brand */}
          <Reveal>
            <Image
              src="/images/festive-flair-logo.png"
              alt="Festive Flair Event Planner"
              width={240}
              height={240}
              className="h-[190px] w-auto"
            />
            <p className="mt-4 text-[22px] font-medium leading-snug text-black">
              Let us help you create a day that
              <br />
              is truly unforgettable!
            </p>
          </Reveal>

          {/* Address + Quick Links */}
          <Reveal delay={100}>
            <FooterHeading>Address</FooterHeading>
            <address className="not-italic">
              {contact.address.map((line) => (
                <p key={line} className="text-[21px] leading-[33px] text-black">
                  {line}
                </p>
              ))}
            </address>

            <div className="mt-10">
              <FooterHeading>Quick Links</FooterHeading>
              <ul>
                {contact.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[17px] leading-[30px] text-brand transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Connect + Follow */}
          <Reveal delay={200}>
            <FooterHeading>Connect</FooterHeading>
            <div className="space-y-1">
              {contact.phones.map((phone) => (
                <p key={phone} className="text-[17px] text-black">
                  {phone}
                </p>
              ))}
              <p className="text-[17px] text-black">{contact.email}</p>
            </div>

            <div className="mt-10">
              <FooterHeading>Follow Us</FooterHeading>
              <div className="flex items-center gap-3">
                <a href={contact.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-brand transition-opacity hover:opacity-70">
                  <InstagramIcon className="h-9 w-9" />
                </a>
                <a href={contact.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-brand transition-opacity hover:opacity-70">
                  <YoutubeIcon className="h-9 w-9" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#FBF3EE]">
        <div className="mx-auto flex max-w-[1425px] flex-col items-center justify-between gap-2 px-6 py-6 text-[17px] text-black sm:flex-row lg:px-10">
          <p>© 2026 Festive Flair. All Rights Reserved.</p>
          <a
            href="#"
            className="text-black underline decoration-1 underline-offset-4 transition-colors hover:text-brand"
          >
            Designed by JBW Tech Co
          </a>
        </div>
      </div>
    </footer>
  );
}
