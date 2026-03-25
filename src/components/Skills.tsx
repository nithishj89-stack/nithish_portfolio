const skills = [
  { name: "C++", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "✨" },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-card">
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Skills
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-background rounded-2xl p-6 text-center shadow-sm border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/40 cursor-default"
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
