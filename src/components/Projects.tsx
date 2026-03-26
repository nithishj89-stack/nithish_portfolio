import DecryptedText from "@/DecryptedText";

const projects = [
  {
    title: "Water Tank Monitoring System",
    description:
      "An IoT-based system that monitors water levels in real-time, sending alerts when levels are critically low or high. Built with embedded sensors and a microcontroller.",
    tags: ["IoT", "Embedded", "C++"],
  },
  {
    title: "C++ Calculator",
    description:
      "A feature-rich command-line calculator supporting arithmetic operations, history tracking, and error handling. Designed with clean OOP principles.",
    tags: ["C++", "CLI", "OOP"],
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-card/25 backdrop-blur-2xl">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <DecryptedText
          text="Projects"
          speed={40}
          maxIterations={15}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          className="text-3xl md:text-4xl font-display font-bold text-foreground"
          parentClassName="block"
          encryptedClassName="text-muted-foreground"
          animateOn="scroll"
        />
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/40 cursor-target"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-primary/5 text-primary px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
