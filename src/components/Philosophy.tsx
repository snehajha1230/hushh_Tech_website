import lineGraph from "../../files/lineGraph.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import HushhTechHeader from "./hushh-tech-header/HushhTechHeader";
import HushhTechFooter from "./hushh-tech-footer/HushhTechFooter";
import HushhTechCta, { HushhTechCtaVariant } from "./hushh-tech-cta/HushhTechCta";

const playfair = { fontFamily: "'Playfair Display', serif" };

const philosophyPillars = [
  {
    icon: "functions",
    title: "Math-Driven Precision",
    body: "We apply rigorous quantitative models to guide allocation decisions with discipline and consistency.",
  },
  {
    icon: "neurology",
    title: "AI-Powered Insight",
    body: "Machine learning helps us detect patterns, inefficiencies, and opportunities before they become obvious.",
  },
  {
    icon: "balance",
    title: "Long-Term Stability",
    body: "Our risk framework prioritizes durable growth through prudent exposure and capital protection.",
  },
];

const principles = [
  {
    title: "Simplicity Meets Sophistication",
    body: "Our infrastructure is advanced, but the investor experience stays transparent and easy to understand.",
  },
  {
    title: "Unlocking Options Income",
    body: "We design premium-capture strategies such as Sell the Wall and Strategy 69 to generate steady alpha income.",
  },
  {
    title: "Human-Centric Wealth Creation",
    body: "We build with ethics first, ensuring investor goals, privacy, and trust remain central to every decision.",
  },
];

export default function Philosophy() {
  return (
    <div className="bg-white antialiased text-gray-900 min-h-screen flex flex-col selection:bg-hushh-blue selection:text-white">
      <HushhTechHeader rightAccessory={<LanguageSwitcher variant="light" />} />
      <main className="flex-1 w-full max-w-md mx-auto px-6 pb-28 pt-1 lg:max-w-7xl lg:px-10 xl:px-16 lg:pt-4 lg:pb-32">
        <section className="text-center mb-12 lg:mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">About Hushh</p>
          <h1
            className="text-[2.5rem] leading-[1.1] font-normal text-black tracking-tight lg:text-[3.25rem] mb-4"
            style={playfair}
          >
            Investment Meets <br />
            <span className="text-gray-400 italic font-light">Innovation</span>
          </h1>
          <p className="text-gray-500 text-sm font-light mt-4 leading-relaxed max-w-3xl mx-auto lg:text-base">
            We build a future where wealth creation is intelligent, responsible, and powered by data science,
            mathematics, and AI.
          </p>
        </section>

        <section className="mb-12 lg:mb-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="bg-ios-gray-bg p-6 md:p-8 rounded-2xl border border-gray-200/60">
              <h2 className="text-2xl md:text-3xl font-light text-black mb-4 tracking-tight" style={playfair}>
                Our Mission
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light mb-4">
                To empower individuals and institutions to achieve long-term financial success through data-driven,
                intelligent investment strategies.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                We believe investing should be powerful and personal - designed to work for people, not only for
                portfolios.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/60 shadow-sm">
              <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-ios-gray-bg border border-gray-200/60">
                <img src={lineGraph} alt="Investment growth graph" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <p className="text-center text-sm md:text-base text-gray-500 font-light leading-relaxed">
                Research-first execution with strategic precision and a relentless focus on sustainable performance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-black mb-8 text-center tracking-tight" style={playfair}>
            Our Investment Philosophy
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {philosophyPillars.map((item) => (
              <article
                key={item.title}
                className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors"
              >
                <span className="material-symbols-outlined thin-icon text-3xl text-hushh-blue mb-4">{item.icon}</span>
                <h3 className="text-xl font-medium mb-3 text-black font-serif" style={playfair}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-black mb-8 text-center tracking-tight" style={playfair}>
            Why Choose Hu<span className="text-hushh-blue">$$</span>h
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="bg-ios-gray-bg p-6 rounded-2xl border border-gray-200/60">
                <h3 className="text-lg text-black mb-3 font-medium" style={playfair}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl mb-4 text-black tracking-tight font-serif" style={playfair}>
            Our Vision
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-6">
            We aim to create lasting wealth that enables financial freedom across generations through ethical,
            innovation-led investing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <HushhTechCta
              type="button"
              variant={HushhTechCtaVariant.BLACK}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact Us
            </HushhTechCta>
            <HushhTechCta
              type="button"
              variant={HushhTechCtaVariant.WHITE}
              onClick={() => {
                window.location.href = "/faq";
              }}
            >
              Explore FAQ
            </HushhTechCta>
          </div>
        </section>
      </main>
      <HushhTechFooter />
    </div>
  );
}
