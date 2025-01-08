import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";

const IconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
} as const;

interface FooterLink {
  id: string;
  icon: keyof typeof IconMap;
  link: string;
}

const FOOTER_LINKS: FooterLink[] = [
  {
    id: "facebook",
    icon: "facebook",
    link: "#",
  },
  {
    id: "twitter",
    icon: "twitter",
    link: "#",
  },
  {
    id: "instagram",
    icon: "instagram",
    link: "#",
  },
];

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex items-center justify-center gap-2 lg:justify-end"
    >
      {FOOTER_LINKS?.map((item) => {
        const Icon: IconType = IconMap[item?.icon];

        return (
          <a
            key={`footer-icon-${item?.id}-key`}
            href={item?.link}
            className="border rounded-full w-8 h-8 flex items-center justify-center lg:w-9 lg:h-9 group hover:border-primary-soft-magenta transition-colors duration-300"
          >
            <Icon className="w-4 h-auto lg:w-[18px] text-white group-hover:text-primary-soft-magenta transition-colors duration-300" />
          </a>
        );
      })}
    </motion.footer>
  );
};
