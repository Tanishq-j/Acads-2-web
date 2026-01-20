import logo1 from '../spn-logo/logo1.jpeg';
import logo2 from '../spn-logo/logo2.jpeg';
import logo3 from '../spn-logo/logo3.jpeg';
import logo4 from '../spn-logo/logo4.jpeg';
import logo5 from '../spn-logo/logo5.jpeg';
import logo6 from '../spn-logo/logo6.jpeg';

const sponsors = [
  { id: 1, logo: logo1, name: 'Sponsor 1' },
  { id: 2, logo: logo2, name: 'Sponsor 2' },
  { id: 3, logo: logo3, name: 'Sponsor 3' },
  { id: 4, logo: logo4, name: 'Sponsor 4' },
  { id: 5, logo: logo5, name: 'Sponsor 5' },
  { id: 6, logo: logo6, name: 'Sponsor 6' },
];

const SponsorsSection = () => {
  return (
    <section className="py-12 md:py-20 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center tracking-tight">Our Sponsors</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for smooth fade feeling */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="glass-card py-12 rounded-3xl border border-white/40 shadow-xl backdrop-blur-md bg-white/60">
          <div className="flex animate-marquee whitespace-nowrap min-w-full">
            {[...sponsors, ...sponsors, ...sponsors].map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex-shrink-0 flex items-center justify-center h-20 w-40 md:w-48 mr-12 md:mr-24 transition-all duration-500 hover:scale-110 cursor-pointer">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-100% / 3)); }
            }
            .animate-marquee {
                display: flex;
                width: max-content; /* Ensure exact width based on content */
                will-change: transform; /* Hint for GPU acceleration */
                animation: marquee 20s linear infinite; /* Adjusted speed for smoothness */
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
        `}</style>
    </section>
  );
};

export default SponsorsSection;
