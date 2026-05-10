import lineGraph from '../../files/lineGraph.svg';

const playfair = { fontFamily: "'Playfair Display', serif" };

export default function Philosophy() {
  return (
    <div className="bg-white antialiased text-gray-900 selection:bg-hushh-blue selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 lg:pb-24">
        {/* Hero — matches home hero: Playfair + italic emphasis line */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h1
            className="text-[2.25rem] leading-[1.15] font-normal text-black tracking-tight sm:text-[2.75rem] lg:text-[3.25rem] mb-6 lg:mb-8 font-serif"
            style={playfair}
          >
            Investment meets
            <br />
            <span className="text-gray-400 italic font-light">Innovation</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed">
            We're building a movement toward a future where wealth is built through <span className="text-hushh-blue font-medium">intelligent, responsible investing</span>,
            powered by <span className="font-medium text-gray-900">cutting-edge mathematical models, statistical analysis, and artificial intelligence (AI)</span>.
          </p>
        </div>

        {/* Mission (gray card) + chart (white bordered card) — layout per marketing About mock */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20 items-stretch">
          <section className="bg-ios-gray-bg rounded-2xl p-6 sm:p-8 lg:p-10 text-left">
            <h2
              className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-4 lg:mb-6 font-serif"
              style={playfair}
            >
              Our <span className="text-hushh-blue">Mission</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-4">
              To empower individuals and institutions to achieve long-term financial success
              through <span className="font-medium text-gray-900">data-driven, intelligent investment strategies</span>.
            </p>
            <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
              We believe that investment should be both powerful and personal—designed to work for people, not just portfolios.
              We're committed to transparency and ethical data use, ensuring that wealth creation is both impactful and aligned with
              our investors' values.
            </p>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200/60 p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center rounded-xl bg-ios-gray-bg border border-gray-200/50 overflow-hidden">
              <img src={lineGraph} alt="SVG Image" className="w-full h-full object-contain p-2" />
            </div>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-md">
              Our approach is built on <span className="font-medium text-gray-900">rigorous research, strategic precision</span>, and an
              <span className="font-medium text-gray-900"> unwavering focus</span> on delivering consistent, sustainable growth for our investors.
            </p>
          </section>
        </div>

        {/* What We Do Section */}
        <section className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-6 lg:mb-8 font-serif"
            style={playfair}
          >
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed mb-4">
            We specialize in generating income through innovative options-based strategies, capitalizing on market opportunities.
          </p>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            Our proprietary strategies, such as <span className="text-hushh-blue font-medium">Sell the Wall</span> and <span className="text-hushh-blue font-medium">Strategy 69</span>, are meticulously designed to generate
            consistent "alpha income" by leveraging price movement and volatility.
          </p>
        </section>

        {/* Investment Philosophy Section */}
        <section className="text-center mb-16 lg:mb-20">
          <h2
            className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-8 lg:mb-12 font-serif max-w-3xl mx-auto"
            style={playfair}
          >
            Our <span className="text-hushh-blue">Investment Philosophy</span>
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-ios-gray-bg rounded-2xl border border-gray-200/60 p-6 sm:p-8 text-center hover:border-hushh-blue/30 transition-colors">
              <div className="mb-4">
                <span className="text-4xl">∫𝑥</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 font-serif" style={playfair}>
                Math-Driven Precision
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                We apply advanced mathematical models to guide our investment decisions, ensuring consistency and removing bias.
              </p>
            </div>
            <div className="bg-ios-gray-bg rounded-2xl border border-gray-200/60 p-6 sm:p-8 text-center hover:border-hushh-blue/30 transition-colors">
              <div className="mb-4">
                <span className="text-4xl">🧠</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 font-serif" style={playfair}>
                AI-Powered Insight
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                Leveraging AI and machine learning, we identify market inefficiencies and predict opportunities in real-time.
              </p>
            </div>
            <div className="bg-ios-gray-bg rounded-2xl border border-gray-200/60 p-6 sm:p-8 text-center hover:border-hushh-blue/30 transition-colors">
              <div className="mb-4">
                <span className="text-4xl">⚖️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 font-serif" style={playfair}>
                Long-Term Stability
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                We focus on consistent returns through balanced strategies and prudent risk management.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section — same grid + card sizing as Investment Philosophy */}
        <section className="text-center mb-16 lg:mb-20">
          <h2
            className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-8 lg:mb-12 font-serif max-w-3xl mx-auto"
            style={playfair}
          >
            Why Choose Hu<span className="text-hushh-blue">$$</span>h?
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-ios-gray-bg rounded-2xl border border-gray-200/60 p-6 sm:p-8 text-center hover:border-hushh-blue/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 font-serif" style={playfair}>
                Simplicity Meets Sophistication
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                Our models are complex, but our approach is straightforward—designed to perform in any market.
              </p>
            </div>
            <div className="bg-ios-gray-bg rounded-2xl border border-gray-200/60 p-6 sm:p-8 text-center hover:border-hushh-blue/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 font-serif" style={playfair}>
                Unlocking Options Income
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                Our strategies capture premium income from market movements, creating a consistent revenue stream.
              </p>
            </div>
            <div className="bg-ios-gray-bg rounded-2xl border border-gray-200/60 p-6 sm:p-8 text-center hover:border-hushh-blue/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 font-serif" style={playfair}>
                Human-Centric Wealth Creation
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                We respect the privacy, goals, and interests of our investors, ensuring ethical and impactful wealth creation.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-4 lg:mb-6 font-serif"
            style={playfair}
          >
            Our <span className="text-hushh-blue">Vision</span>
          </h2>
          <p className="font-bold mb-4 text-base sm:text-lg text-gray-900 leading-relaxed">
            Our goal is to create lasting wealth that empowers financial freedom for generations.
          </p>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            At Hushh Technologies LLC, we blend innovative strategies with human-centric values to deliver exceptional value.
          </p>
        </section>

        {/* Join Us Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-6 lg:mb-8 font-serif"
            style={playfair}
          >
            Join <span className="text-hushh-blue">Us</span>
          </h2>
          <p className="mb-8 text-base sm:text-lg text-gray-500 font-light leading-relaxed">
            Whether you're an individual or an institution, Hushh 🤫 Technologies LLC invites you to join us on our journey.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/manishsainani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hushh-blue hover:text-hushh-blue/80 flex items-center transition-colors"
            >
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
