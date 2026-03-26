import DecryptedText from "@/DecryptedText";

const skills = [
  { name: "C++", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "✨" },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-card/25 backdrop-blur-2xl">
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <DecryptedText
          text="Skills"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center shadow-sm border border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/40 cursor-target"
          >
            <span className="text-4xl block mb-3 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </span>
            <span className="font-semibold text-foreground">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
