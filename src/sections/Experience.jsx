const experiences = [
  {
    period: "2025 — present",
    role: "Software Engineer - Frontend Developer",
    company: "Rxlogix",
    description:
      "Leading Angular development across 5 enterprise SaaS products, including migrating a legacy monolith to a micro-frontend architecture. Architected a micro-frontend shell integrating Spring Boot APIs with a legacy Groovy on Grails monolith, unifying RBAC across modern and legacy layers.",
    technologies: ["Angular", "NgRx", "TypeScript", "Micro-Frontends", "RxJS"],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Associate Software Engineer 2 - Frontend Developer",
    company: "Rxlogix",
    description:
      "Drove migration from client-side to server-side pagination, cutting memory usage by 55% and load time by 74% for datasets exceeding 10,000 rows. Designed a shared UI component library (20+ components) and advanced data grid systems, reducing duplicate development effort by 35%.",
    technologies: ["Angular", "RxJS", "CDK Virtual Scrolling", "Angular Material"],
    current: false,
  },
  {
    period: "2023 — 2024",
    role: "Associate Software Engineer 1 - Frontend Developer",
    company: "Rxlogix",
    description:
      "Built a secure patient-facing portal with OAuth authentication, multi-step workflows, and RBAC using lazy-loaded modules. Implemented WCAG 2.2 AA compliant multilingual interfaces across 8 languages and wrote 200+ unit tests, achieving 80% coverage.",
    technologies: ["Angular", "NgRx", "Signals", "ngx-translate", "Jasmine/Karma"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Engineering frontend systems{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              for scale, performance, and real-world complexity.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Focused on data-intensive applications, performance optimization,
            and modernizing legacy systems into scalable, maintainable
            architectures.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
