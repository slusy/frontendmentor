import { motion } from "motion/react";

interface Link {
  id: number;
  display: string;
  link: string;
}

const LINKS: Link[] = [
  {
    id: 1,
    display: "GitHub",
    link: "#",
  },
  {
    id: 2,
    display: "Frontend Mentor",
    link: "#",
  },
  {
    id: 3,
    display: "LinkedIn",
    link: "#",
  },
  {
    id: 4,
    display: "Twitter",
    link: "#",
  },
  {
    id: 5,
    display: "Instagram",
    link: "#",
  },
];

export const App = () => {
  return (
    <div className="font-custom-font min-h-screen bg-background-grey flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-[375px] bg-card-grey rounded-xl flex flex-col p-9"
      >
        <div className="self-center">
          <img
            src="avatar-jessica.jpeg"
            alt="avatar"
            className="rounded-full w-20"
          />
        </div>
        <div className="text-center mt-[24px]">
          <h1 className="text-white text-2xl">Jessica Randall</h1>
          <p className="text-custom-green text-xs font-bold mt-2">
            London, United Kingdom
          </p>
        </div>
        <p className="text-center text-white text-sm mt-[24px] text-opacity-75">
          "Front-end developer and avid reader."
        </p>
        <div className="mt-6 w-full flex flex-col gap-3">
          {LINKS?.map((link) => (
            <motion.a
              initial={{
                backgroundColor: "#333333",
                color: "#ffffff",
                scale: 1,
              }}
              whileHover={{
                backgroundColor: "#ffffff",
                color: "#333333",
                scale: 1.02,
                opacity: 0.75,
              }}
              key={`user-social-link-${link?.id}-key`}
              href={link?.link}
              className="w-full inline-block text-center py-2.5 rounded-lg font-semibold text-[13px]"
            >
              {link?.display}
            </motion.a>
          ))}
        </div>
      </motion.div>
      <a
        href="http://achal-socials.vercel.app/portfolio"
        target="_blank"
        className="w-10 h-10 bg-white fixed bottom-5 left-5 rounded-xl hover:scale-110 transition-transform ease-in flex items-center justify-center z-[99999]"
      >
        <img
          src="icon-globe.svg"
          alt="portfolio"
          className="w-full h-full p-2"
        />
      </a>
    </div>
  );
};
