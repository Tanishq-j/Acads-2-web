import { ScrollText, Users, BadgeCheck, Trophy } from "lucide-react";

const BeyondResume = () => {
  const rounds = [
    {
      icon: ScrollText,
      title: "Round 1 · Aptitude",
      description:
        "Objective test to assess logical reasoning, quantitative ability, and verbal skills.",
    },
    {
      icon: Users,
      title: "Round 2 · Group Discussion",
      description:
        "Panel-evaluated discussion focused on clarity, structure, listening, and leadership.",
    },
    {
      icon: BadgeCheck,
      title: "Round 3 · One-on-One Interview",
      description:
        "Personal interview to evaluate communication, thinking process, and presence.",
    },
  ];

  const highlights = [
    { label: "Integrity", color: "from-primary via-accent to-secondary" },
    { label: "and", color: "from-secondary via-primary to-accent" },
    { label: "Excellence", color: "from-accent via-primary to-secondary" },
    { label: "Community", color: "from-secondary via-accent to-primary" },
  ];

  const images = [1, 2, 3, 4].map(
    (i) => `https://unsplash.it/900/600?random=${i}`
  );

  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-background">
      {/* Title and highlights row */}
      <section className="container mx-auto max-w-5xl text-center mb-12">
        <h1 className="display-title text-4xl md:text-6xl mb-6 font-extrabold text-blue-200">
          <span className="gradient-text">Beyond Resume 2025</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Flagship event of ACADS under the national level event{" "}
          <span className="text-white/90 font-medium">Pioneer</span>.
        </p>
        <div className="flex flex-wrap gap-3 justify-center items-center my-4">
          {highlights.map((highlight, idx) => (
            <span
              key={idx}
              className={`rounded-full px-4 py-1 font-semibold text-base bg-gradient-to-r ${highlight.color} text-white shadow-md`}
            >
              {highlight.label}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Conducted on{" "}
          <span className="text-white/90 font-bold">22nd March 2025</span> &#x2022; 3
          Rounds: Aptitude &rarr; Group Discussion &rarr; One-on-One Interview &#x2022; Cash Prize:{" "}
          <span className="text-white/90 font-bold">INR 10,000</span>
        </p>
      </section>

      {/* Gallery */}
      <section className="container mx-auto max-w-6xl mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Event highlight ${idx + 1}`}
              className="w-full h-56 sm:h-64 md:h-72 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Rounds */}
      <section className="container mx-auto max-w-6xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rounds.map((round, idx) => (
            <div
              key={idx}
              className="glass-card p-7 rounded-2xl text-left shadow-xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-2xl group-hover:scale-110 transition-transform">
                <round.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{round.title}</h3>
              <p className="text-sm text-muted-foreground">{round.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facts */}
      <section className="container mx-auto max-w-6xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="glass-card p-5 rounded-2xl text-center shadow-lg">
            <div className="text-sm text-muted-foreground mb-1">Date</div>
            <div className="text-lg font-semibold">22 March 2025</div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center shadow-lg">
            <div className="text-sm text-muted-foreground mb-1">Prize</div>
            <div className="text-lg font-semibold flex items-center gap-2 justify-center">
              <Trophy className="w-5 h-5 text-yellow-400" /> INR 10,000
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center shadow-lg">
            <div className="text-sm text-muted-foreground mb-1">Rounds</div>
            <div className="text-lg font-semibold">Aptitude &middot; GD &middot; Interview</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto max-w-6xl mb-20">
        <div className="glass-card p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-3 text-center">About the event</h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Beyond Resume 2025 is a mock campus placement experience crafted to mirror real hiring pipelines. Participants move through an aptitude test, a panel-moderated group discussion, and a one-on-one interview—just like day-zero placement rounds. The focus is on clarity of thinking, collaboration, presence, and practical decision-making rather than rote preparation. Shortlisted candidates progress through each stage, and top performers receive certificates and the cash prize.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="glass-button px-7 py-3 inline-flex items-center justify-center font-semibold hover:scale-105 transition-all"
            >
              Register Interest
            </a>
            <a
              href="#guidelines"
              className="text-sm text-muted-foreground hover:text-foreground underline hover:scale-105 transition-all"
            >
              View guidelines →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeyondResume;
