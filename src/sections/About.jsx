import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Scalable Architecture",
    description:
      "Designed a shared UI component library with 20+ reusable components, standardizing patterns across teams and cutting duplicate development effort by 35%.",
  },
  {
    icon: Rocket,
    title: "Performance Engineering",
    description:
      "Optimized data-intensive enterprise apps with 55% lower memory usage via CDK virtual scrolling, 40% bundle reduction, and sub-100ms render times for 10,000+ row datasets.",
  },
  {
    icon: Code2,
    title: "Legacy Integration",
    description:
      "Architected micro-frontend solutions that integrate modern Angular with legacy monoliths, enabling unified RBAC and seamless cross-module state management.",
  },

  {
    icon: Lightbulb,
    title: "Compliance & Quality",
    description:
      "Shipped WCAG 2.2 AA compliant interfaces supporting 8 languages, wrote 200+ unit tests (80% coverage), and resolved 15+ critical security issues during VAPT audits.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a frontend engineer with 3+ years of experience building
                high-performance Angular applications for enterprise SaaS
                platforms. I enjoy solving complex UI problems, especially in
                data-intensive systems, where performance, scalability, and
                reliability matter.
              </p>
              <p>
                My work focuses on optimizing frontend performance and designing
                scalable architectures — from reducing memory usage and
                improving rendering efficiency to building micro-frontend
                systems that integrate modern applications with legacy
                platforms.
              </p>
              <p>
                I have strong experience with Angular, NgRx, RxJS, and
                TypeScript, and I’ve built reusable component systems and
                data-heavy interfaces that handle complex workflows efficiently.
              </p>
              <p>
                Outside of work, I like exploring new frontend patterns,
                improving my understanding of system design, and staying updated
                with modern web technologies.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I turn slow, complex frontend systems into fast, scalable
                applications built for real-world data and scale."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
