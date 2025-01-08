import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/navbar";

export const App = () => {
  return (
    <div className="min-h-screen bg-[url('/images/bg-mobile.svg')] bg-contain bg-no-repeat bg-primary-violet px-8 py-8 flex flex-col gap-12 md:bg-cover lg:px-16 lg:bg-[url('/images/bg-desktop.svg')]">
      <Navbar />
      <HeroSection />
      <Footer />
      <a
        href="http://achal-socials.vercel.app/portfolio"
        target="_blank"
        className="w-10 h-10 bg-white fixed bottom-5 left-5 rounded-xl hover:scale-110 transition-transform ease-in flex items-center justify-center z-[99999]"
        data-testid="portfolio"
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
