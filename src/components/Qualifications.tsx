const qualifications = [
  {
    degree: "B.Tech Computer Science and Business System",
    college: "Madras Engineering College",
    year: "2025 – 2029",
  },
  {
    degree: "Higher Secondary (12th)",
    college: "St Joseph's Hr Sec School",
    year: "2023 – 2025",
  },
];

const Qualifications = () => (
  <section id="qualifications" className="py-24 px-6">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Qualifications
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {qualifications.map((q) => (
          <div
            key={q.degree}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              {q.degree}
            </h3>
            <p className="text-muted-foreground mb-1">{q.college}</p>
            <span className="inline-block bg-accent/10 text-accent font-semibold text-sm px-3 py-1 rounded-full">
              {q.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Qualifications;
