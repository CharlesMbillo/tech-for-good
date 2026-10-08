
const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Identify the operational problem, the users affected, the constraints and the expected outcome before writing a line of code.",
  },
  {
    number: "02",
    title: "Investigate",
    description:
      "Trace data and system behaviour rather than assuming the visible symptom is the root cause. Follow the evidence.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement a practical, maintainable solution. Prefer clarity over cleverness. Design for the next engineer who reads it.",
  },
  {
    number: "04",
    title: "Verify",
    description:
      "Test critical workflows and edge cases — especially failure paths, boundary conditions and financial accuracy.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Validate behaviour in the production environment. Confirm that performance and data integrity hold under real conditions.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Investigate failures. Strengthen the system continuously. Treat every production issue as an engineering lesson.",
  },
];

export const EngineeringApproach = () => {
  return (
    <section
      id="approach"
      className="section-py bg-ink"
      aria-labelledby="approach-heading"
    >
      <div className="section-container">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
            How I Work
          </p>
          <h2
            id="approach-heading"
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Engineering Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-ink p-8 group hover:bg-white/5 transition-colors"
            >
              <p className="text-4xl font-bold text-white/10 step-number mb-4 group-hover:text-brand/40 transition-colors">
                {step.number}
              </p>
              <h3 className="text-base font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
