import acadssLogo from '@/assets/ACADSS.png';
import kitlogo from '@/assets/kitlogo.png';

const SponsorsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Sponsors</h2>
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center gap-8 flex-wrap">
            <img src={acadssLogo} alt="ACADS" className="h-12 w-auto object-contain" loading="lazy" decoding="async" />
            <img src={kitlogo} alt="KITCoEK" className="h-12 w-auto object-contain" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
