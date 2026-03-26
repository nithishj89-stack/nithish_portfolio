import DecryptedText from "@/DecryptedText";

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <DecryptedText
        text="About Me"
        speed={40}
        maxIterations={15}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        className="text-3xl md:text-4xl font-display font-bold text-foreground"
        parentClassName="block"
        encryptedClassName="text-muted-foreground"
        animateOn="scroll"
      />
      <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      <p className="text-muted-foreground text-lg leading-relaxed">
        I'm a passionate student with a deep curiosity for programming and technology.
        I love building projects that solve real-world problems — from embedded systems
        to web applications. Currently exploring the world of software development,
        I'm always eager to learn new tools and frameworks that push the boundaries
        of what I can create.
      </p>
    </div>
  </section>
);

export default About;
