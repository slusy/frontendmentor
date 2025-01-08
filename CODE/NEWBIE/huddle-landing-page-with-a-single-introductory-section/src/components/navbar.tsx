import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <a href="#">
        <img
          src="images/logo.svg"
          alt="company logo"
          className="w-36 lg:w-48"
        />
      </a>
    </motion.nav>
  );
};
