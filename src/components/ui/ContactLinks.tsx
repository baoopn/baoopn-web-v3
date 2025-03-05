import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Reveal } from "../utils/Reveal";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

interface ContactLinksProps {
  className?: string;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ className = "" }) => {
  const contactMethods: ContactLink[] = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "me@baoopn.com",
      href: "mailto:me@baoopn.com",
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      value: "@baoopn",
      href: "https://github.com/baoopn",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      value: "Bao Nguyen",
      href: "https://linkedin.com/in/baoopn",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      label: "Instagram",
      value: "@baoongisoo",
      href: "https://www.instagram.com/baoongisoo",
    },
  ];

  return (
    <Reveal width="100%" className={className}>
			<div className="grid gap-6">
				{contactMethods.map((contact, index) => (
					<div key={index} className="grid grid-cols-5 gap-6 items-center">
						<div className="col-span-2 flex items-center gap-3">
							<span className="text-[var(--text-color-lighter)]">
								{contact.icon}
							</span>
							<span className="font-medium">{contact.label}</span>
						</div>
						<div className="col-span-3">
							<a
								href={contact.href}
								className="text-[var(--text-color)] hover:text-[var(--less-dark-pink)] underline transition-colors"
								target={contact.href.startsWith("mailto") ? undefined : "_blank"}
								rel={
									contact.href.startsWith("mailto")
										? undefined
										: "noopener noreferrer"
								}
							>
								{contact.value}
							</a>
						</div>
					</div>
				))}
			</div>
		</Reveal>
  );
};

export default ContactLinks;
