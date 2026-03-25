import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Mail className="w-5 h-5 text-accent" />
          <a href="mailto:nithishj89@gmail.com" className="hover:text-accent transition-colors">
            nithishj89@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <MapPin className="w-5 h-5 text-accent" />
          <span>Chengalpattu, Tamil Nadu, India</span>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/nithishj89-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nithish-j-841669355/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
