import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="opacity-0 flex-grow grid gap-12 content-center justify-items-center lg:grid-cols-[1fr_0.8fr] lg:gap-16"
    >
      <motion.div whileHover={{ y: -30 }} className="w-full">
        <img
          src="images/illustration-mockups.svg"
          alt="A skeleton illustration of the application"
          className="w-full"
        />
      </motion.div>
      <div className="flex flex-col gap-4 text-center lg:text-left lg:self-center">
        <h1 className="text-white font-heading font-semibold text-2xl leading-[42px] lg:text-[44px] lg:leading-[60px]">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-white font-paragraph text-opacity-85 md:w-[60%] self-center lg:w-full lg:text-lg lg:pt-4">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button
          type="button"
          className="bg-white text-primary-violet font-heading w-[200px] self-center rounded-full py-3 text-sm mt-4 shadow-[0_4px_8px_0px_rgba(0,0,0,0.3)] lg:self-start lg:w-[200px] lg:text-base lg:py-3.5 hover:bg-primary-soft-magenta hover:text-white transition-colors duration-300"
        >
          Register
        </button>
      </div>
    </motion.section>
  );
};
