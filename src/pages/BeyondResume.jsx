import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Trophy, Users, Brain, Calendar, Globe, Mail, Instagram, Linkedin, ChevronDown } from "lucide-react";

// Import gallery images
import img1 from '../images-collage/IMG_9799.JPG.jpeg';
import img2 from '../images-collage/IMG_9814.JPG.jpeg';
import img3 from '../images-collage/IMG_9820.JPG.jpeg';
import img4 from '../images-collage/IMG_9829.JPG.jpeg';
import img5 from '../images-collage/WhatsApp Image 2026-01-21 at 2.29.31 PM.jpeg';

const BeyondResume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Parallax & Opacity
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-slate-950 text-slate-50 overflow-x-hidden font-sans selection:bg-cyan-500/30">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col pt-20 bg-slate-950 overflow-hidden font-sans selection:bg-cyan-500/30">

        {/* Hero Content Grid */}
        <div className="flex-1 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12 lg:py-0">

          {/* Left Column */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-wider text-slate-300">
              Departmental Club • Main Event
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Selection Experience</p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                BEYOND<br />RESUME
              </h1>
              <p className="text-xl text-slate-400 font-light max-w-md">Go beyond your CV. Show what you can do.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2">
                Apply <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Rounds</div>
                <div className="text-3xl font-bold text-white">03</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Format</div>
                <div className="text-sm font-medium text-white">Aptitude → GD → Interview</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Goal</div>
                <div className="text-sm font-medium text-white">Show what you can do</div>
              </div>
            </div>
          </div>

          {/* Right Column - Card */}
          <div className="relative animate-fade-in-right hidden lg:block h-[600px] w-full">
            <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img src={img4} alt="Event Stage" className="w-full h-full object-cover filter brightness-50 contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase mb-2">Departmental Club Main Event</div>
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-pink-200 to-pink-500 drop-shadow-md mb-20 italic transform -rotate-2">
                  BEYOND RESUME
                </h2>

                {/* Person Image (Placeholder for Speaker/Participant) */}
                {/* <img src="person.png" className="h-64 absolute bottom-20" />  Using motion div if image not available or just CSS shape */}
              </div>

              {/* Bottom Card - Roadmap Cue */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1">Roadmap</div>
                    <div className="text-sm font-semibold text-white">Scroll to reveal rounds one by one</div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -inset-4 bg-blue-600/20 blur-[50px] -z-10 rounded-full" />
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="relative w-full py-4 border-t border-white/5 bg-slate-900/50 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-slow">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mx-4">
                <span className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-4">
                  <span className="text-blue-500">❖</span> Beyond Resume
                </span>
                <span className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-4">
                  ★ Apply
                </span>
                <span className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-4">
                  ★ Prepare
                </span>
                <span className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-4">
                  ★ Perform
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Styles for animation */}
        <style>{`
          .animate-marquee-slow {
            animation: marquee 30s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

      </section>

      {/* --- ABOUT SECTION (Redesigned) --- */}
      <section className="py-24 px-6 relative z-10 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Typography & Stats */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              ACADS' <span className="text-blue-500">Premier</span><br />
              Selection Experience.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-normal">
              <strong className="text-white font-medium">Beyond Resume</strong> is a carefully crafted simulation shaped by years of community, creativity, and innovation to find the best talent.
            </p>

            <div className="flex items-center gap-16 pt-8 border-t border-white/5">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white">6+</div>
                <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mt-2">Years of Legacy</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white">100+</div>
                <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mt-2">Participants</div>
              </div>
            </div>
          </div>

          {/* Right Column: Track Cards */}
          <div className="space-y-6">
            {/* Main Process Card (Dark) */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-[2rem] p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 border border-white/10 md:p-10">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 border border-blue-500/20">
                  Main Process
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Selection Process</h3>
                <p className="text-slate-400 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
                  The open arena for all ideas. If you can dream it, you can do it here.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-medium rounded-full border border-white/5">Aptitude Test</span>
                  <span className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-medium rounded-full border border-white/5">Group Discussion</span>
                </div>
              </div>
            </div>

            {/* Exclusive Stage Card (Dark) */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-[2rem] p-8 relative overflow-hidden group hover:border-lime-500/30 transition-all duration-500 border border-white/10 md:p-10">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-lime-500/10 text-lime-400 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 border border-lime-500/20">
                  Exclusive Stage
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Final Frontier</h3>
                <p className="text-slate-400 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
                  Exclusive for shortlisted candidates. Prove your mettle in the final interview.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-medium rounded-full border border-white/5">Personal Interview</span>
                  <span className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-medium rounded-full border border-white/5">HR Round</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TREE ROADMAP SECTION --- */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">The Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">A three-stage filter designed to test every facet of your professional persona.</p>
            </div>
          </ScrollReveal>

          <TreeRoadmap />
        </div>
      </section>

      {/* --- PIXELMATOR GALLERY (13-IMAGE REPLICA) --- */}
      <section className="py-32 px-6 overflow-hidden relative min-h-screen bg-slate-950">
        <div className="max-w-[1400px] mx-auto h-full flex flex-col items-center">
          <ScrollReveal>
            <div className="text-center mb-10 relative z-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Glimpses of Legacy</h2>
              <p className="text-slate-400 text-lg">Past editions that set the benchmark.</p>
            </div>
          </ScrollReveal>

          {/* 13-Image Standard Hero Layout (Pixelmator style) */}
          <div className="relative h-[900px] w-full hidden md:block scale-[0.85] lg:scale-100 origin-top perspective-1200">

            {/* --- CENTER ANCHOR (Layer 3 - Top) --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ zIndex: 40 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[580px] rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-slate-800"
            >
              <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <img src={img3} alt="Main" className="w-full h-auto object-cover opacity-95" />
            </motion.div>

            {/* --- LEFT CLUSTER --- */}

            {/* Top Left - Group Photo (Landscape) */}
            <GalleryItem src={img2} rotate="-6deg" top="5%" left="5%" z={20} delay={0.1} aspectRatio="16/9" width="w-64 md:w-80" opacity={0.9} />

            {/* Mid Left - Woman with Trophy (Large Portrait) */}
            <GalleryItem src={img1} rotate="-3deg" top="28%" left="1%" z={30} delay={0.2} aspectRatio="3/4" width="w-[280px] md:w-[340px]" opacity={1} />

            {/* Bottom Left - Crowd (Landscape) */}
            <GalleryItem src={img3} rotate="4deg" bottom="5%" left="5%" z={20} delay={0.3} aspectRatio="16/9" width="w-64 md:w-80" opacity={0.9} />

            {/* Background Poster Left (Subtle) */}
            <GalleryItem src={img5} rotate="-15deg" bottom="15%" left="25%" z={10} delay={0.4} aspectRatio="3/4" width="w-48" opacity={0.6} />


            {/* --- RIGHT CLUSTER --- */}

            {/* Top Right - Blue Poster (Portrait) */}
            <GalleryItem src={img5} rotate="6deg" top="5%" right="18%" z={20} delay={0.2} aspectRatio="4/5" width="w-56 md:w-64" opacity={0.9} />

            {/* Mid Right (Background) - Ceremony */}
            <GalleryItem src={img2} rotate="12deg" top="30%" right="5%" z={15} delay={0.5} aspectRatio="16/9" width="w-64" opacity={0.7} />

            {/* Main Bottom Right - Large Group (Centerpiece Landscape) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ zIndex: 40 }}
              className="absolute bottom-[8%] right-[15%] w-[400px] md:w-[500px] rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-slate-800 rotate-[-2deg]"
            >
              <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <img src={img4} alt="Main" className="w-full h-auto object-cover opacity-95" />
            </motion.div>

            {/* Far Bottom Right - Portrait */}
            <GalleryItem src={img1} rotate="5deg" bottom="2%" right="2%" z={30} delay={0.6} aspectRatio="3/4" width="w-48 md:w-52" opacity={0.9} />


            {/* Floating Labels */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="absolute top-[28%] left-[22%] bg-white/95 backdrop-blur text-slate-900 px-3 py-1 rounded shadow-lg z-50 rotate-[-12deg] pointer-events-none"
            >
              <p className="text-[10px] font-black tracking-[0.2em] uppercase">Memories</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-[35%] right-[25%] bg-blue-500/90 backdrop-blur text-white px-4 py-2 rounded-full shadow-lg z-50 rotate-[6deg] pointer-events-none"
            >
              <p className="text-xs font-bold">2024 ✨</p>
            </motion.div>
          </div>

          {/* Mobile Stack Grid */}
          <div className="md:hidden grid grid-cols-1 gap-6 mt-12 w-full">
            {[img1, img3, img2, img4, img5, img1, img2].map((src, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={i}
                className="rounded-xl overflow-hidden shadow-lg border border-white/10"
              >
                <img src={src} alt="Gallery" className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-24 px-6 bg-slate-950 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Help & Support Card */}
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-white/10 flex flex-col justify-between h-full hover:border-white/20 transition-colors">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-6">Help & Support</div>
              <h3 className="text-3xl font-bold text-white mb-4">Got questions? We're here.</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Whether it's about registration, the roadmap, or just saying hello — we're here.
              </p>
              <div className="flex gap-3 mb-10">
                <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-colors">General enquiries</button>
                <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-full transition-colors border border-white/5">Code of conduct</button>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">Contact</div>
              <a href="mailto:contact@acadskitcoek.in" className="text-white font-bold underline decoration-blue-500 underline-offset-4 hover:text-blue-400 transition-colors">CONTACT@ACADSKITCOEK.IN</a>

              <div className="mt-8">
                <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1">Organized By</div>
                <div className="text-white font-bold">Departmental Club</div>
                <div className="text-slate-500 text-xs">KITCoEK • Kolhapur</div>
              </div>
            </div>
          </div>

          {/* Coordinators Card */}
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-white/10 flex flex-col h-full lg:col-span-2 hover:border-white/20 transition-colors">
            <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-8">Coordinators</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 h-full">
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-1">Faculty Coordinator</div>
                  <div className="text-xl font-bold text-white mb-2">Prof. M. S. Salunkhe</div>
                  <div className="text-slate-400 font-mono text-sm">+91 90000 00000</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-1">Faculty Coordinator</div>
                  <div className="text-xl font-bold text-white mb-2">Prof. R. B. Patil</div>
                  <div className="text-slate-400 font-mono text-sm">+91 90000 00000</div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-1">Student Coordinator</div>
                  <div className="text-xl font-bold text-white mb-2">Tanishq Jaiswal</div>
                  <div className="text-slate-400 font-mono text-sm">+91 79947 44144</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-1">Student Coordinator</div>
                  <div className="text-xl font-bold text-white mb-2">Aditya Patange</div>
                  <div className="text-slate-400 font-mono text-sm">+91 89437 13703</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
};

// --- TREE ROADMAP COMPONENT ---
const TreeRoadmap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">
      {/* The Vertical Line */}
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2">
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="w-full h-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
        />
      </div>

      <div className="space-y-12 md:space-y-16 py-10 relative">
        <TreeNode
          index={1}
          title="Aptitude Round"
          subtitle="Logical & Quantitative"
          desc="A timed high-intensity test to filter the sharpest minds. Speed and accuracy are your only allies here."
          align="right"
        />
        <TreeNode
          index={2}
          title="Group Discussion"
          subtitle="Leadership & Communication"
          desc="Collaborate to dominate. A panel-moderated round testing your ability to articulate, listen, and lead."
          align="left"
        />
        <TreeNode
          index={3}
          title="Personal Interview"
          subtitle="Technical & HR"
          desc="The final frontier. A deep dive into your technical core, problem-solving approach, and cultural fit."
          align="right"
        />
      </div>
    </div>
  );
};

const TreeNode = ({ index, title, subtitle, desc, align }) => {
  // Basic InView check for popping the node
  const isRight = align === "right";

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`relative flex items-center md:items-start flex-col ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 pl-12 md:pl-0`}
    >
      {/* Node Dot */}
      <div className="absolute left-[20px] md:left-1/2 top-0 md:top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20" />
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${isRight ? 'text-left' : 'md:text-right text-left'}`}>
        <div className="inline-block text-cyan-500 font-mono text-sm font-bold tracking-widest mb-2">STAGE 0{index}</div>
        <h3 className="text-3xl font-bold text-white mb-1">{title}</h3>
        <p className="text-slate-400 font-medium mb-4">{subtitle}</p>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base">{desc}</p>
      </div>

      {/* Spacer for the other side of the tree */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

// --- SUBCOMPONENTS ---

const ScrollReveal = ({ children, width = "100%" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
  >
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
      <Icon className="w-8 h-8 text-cyan-400" />
    </div>
    <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
    <p className="text-slate-400">{label}</p>
  </motion.div>
);

const GalleryItem = ({ src, rotate, top, left, right, bottom, z, delay, aspectRatio, width = "w-64 md:w-80", opacity = 1 }) => (
  <motion.div
    style={{ top, left, right, bottom, zIndex: z, rotate }}
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    whileInView={{ opacity, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: "backOut" }}
    whileHover={{ scale: 1.05, zIndex: 50, rotate: "0deg", transition: { duration: 0.3 }, opacity: 1 }}
    className={`absolute ${width} rounded-xl overflow-hidden shadow-2xl border-4 border-white/5 cursor-pointer bg-slate-800 transition-opacity`}
  >
    <div style={{ aspectRatio }} className="w-full relative">
      <img src={src} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
    </div>
  </motion.div>
);

const SocialLink = ({ href, icon: Icon }) => (
  <a href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
    <Icon className="w-5 h-5" />
  </a>
);

export default BeyondResume;
