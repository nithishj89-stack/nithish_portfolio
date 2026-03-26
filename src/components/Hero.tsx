import profileImg from "@/assets/profile-update.jpg";
import DecryptedText from "@/DecryptedText";
import ScrollFloat from "./ScrollFloat";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent shadow-lg">
          <img
            src={profileImgSrc}
            alt="Profile photo"
            width={512}
            height={512}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <DecryptedText
            text="NITHISH J"
            speed={100}
            maxIterations={15}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            className="text-4xl md:text-6xl font-display font-bold text-foreground"
            parentClassName="block"
            encryptedClassName="text-muted-foreground"
            animateOn="scroll"
          />
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Aspiring Developer | Tech Enthusiast
          </p>
          <div className="text-base md:text-lg">
            <DecryptedText
              text="However to reveal your next opportunity"
              speed={30}
              maxIterations={20}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
              className="text-accent font-bold text-lg md:text-2xl drop-shadow-[0_0_15px_rgba(124,255,103,0.9)]"
              parentClassName="inline-block"
              encryptedClassName="text-muted-foreground font-semibold opacity-70"
              animateOn="scroll"
            />
          </div>
        </div>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
        >
          View My Work
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
