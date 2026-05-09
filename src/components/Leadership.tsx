import React from "react";
import img from "../../files/img.png";
import img2 from "../../files/img (1).png";
import LanguageSwitcher from "./LanguageSwitcher";
import HushhTechHeader from "./hushh-tech-header/HushhTechHeader";
import HushhTechFooter from "./hushh-tech-footer/HushhTechFooter";
import HushhTechCta, { HushhTechCtaVariant } from "./hushh-tech-cta/HushhTechCta";

const playfair = { fontFamily: "'Playfair Display', serif" };

export default function Leadership() {
  return (
    <div className="bg-white antialiased text-gray-900 min-h-screen flex flex-col selection:bg-hushh-blue selection:text-white">
      <HushhTechHeader rightAccessory={<LanguageSwitcher variant="light" />} />
      <main className="flex-1 w-full max-w-md mx-auto px-6 pb-28 pt-1 lg:max-w-7xl lg:px-10 xl:px-16 lg:pt-4 lg:pb-32">
        {/* Hero Section */}
        <section className="text-center mb-12 lg:mb-16">
          <h1
            className="text-[2.5rem] leading-[1.1] font-normal text-black tracking-tight lg:text-[3.25rem] mb-4"
            style={playfair}
          >
            Empowering Wealth Creation with <br />
            <span className="text-gray-400 italic font-light">Integrity and Innovation</span>
          </h1>

          <p className="text-gray-500 text-sm font-light mt-4 leading-relaxed max-w-3xl mx-auto lg:text-base">
            We blend quantitative expertise with ethical investment practices to deliver personalized financial solutions.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-12 lg:mb-16 py-8 lg:py-12 rounded-2xl bg-ios-gray-bg px-4 md:px-8 border border-gray-200/60">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-4xl font-light text-black mb-8 text-center tracking-tight"
              style={playfair}
            >
              Our Mission
            </h2>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/60 shadow-sm mb-12 md:mb-32">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light mb-6">
                At Hushh Technologies LLC, our mission is to democratize access to sophisticated investment strategies by leveraging cutting-edge
                artificial intelligence and advanced mathematical models. We are committed to generating consistent, risk-adjusted returns while
                maintaining the highest standards of transparency and ethical conduct.
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light mb-6">
                We believe that through the power of data science and machine learning, we can unlock investment opportunities that were previously
                available only to institutional investors, making them accessible to individual investors and smaller institutions alike.
              </p>
            </div>

            {/* Unique Approach Section */}
            <h2
              className="text-2xl md:text-4xl font-light text-black mb-8 text-center tracking-tight mt-8 md:mt-10"
              style={playfair}
            >
              Unique Approach to Investment Management
            </h2>

            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed font-light text-center max-w-3xl mx-auto">
              At <span className="font-medium text-black">Hushh Technologies</span>, we combine the art of investment with the science of technology:
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-16">
              <article className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
                <h3 className="text-lg text-black mb-3 font-medium" style={playfair}>
                  Differentiation in Investment Approach
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Unlike traditional funds that rely on speculative returns, Hushh combines high-frequency options income with disciplined,
                  data-driven long-term growth. We prioritize stability, focusing on high-FCF SPX10 companies that represent the backbone of global markets.
                </p>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
                <h3 className="text-lg text-black mb-3 font-medium" style={playfair}>
                  Math-Driven Decision Making
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Every strategy is informed by rigorous quantitative analysis, ensuring precision and accuracy in our investment decisions.
                </p>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
                <h3 className="text-lg text-black mb-3 font-medium" style={playfair}>
                  AI-Powered Insights
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Leveraging the latest advancements in machine learning, we identify market inefficiencies and capitalize on opportunities in real-time.
                </p>
              </article>

              <article className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
                <h3 className="text-lg text-black mb-3 font-medium" style={playfair}>
                  Transparency You Can Trust
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Clear communication and a human-centric approach to wealth creation ensures you always understand our strategies and performance.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="mb-12 lg:mb-16 py-8 lg:py-12 px-0">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-4xl font-light text-black mb-4 text-center tracking-tight"
              style={playfair}
            >
              Our Leadership Team
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto mb-12 text-center font-light leading-relaxed">
              At Hushh Technologies LLC, our leadership team combines expertise in technology, finance, and strategy to redefine wealth creation.
            </p>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Manish Sainani */}
              <article className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm text-center transition-colors hover:border-hushh-blue/20">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto mb-6 border-[3px] border-hushh-blue">
                  <img src={img} alt="Manish Sainani" className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl mb-2 text-black font-serif" style={playfair}>
                  Manish <span className="text-hushh-blue">Sainani</span>
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                  Founder & CEO
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                  With over a decade of leadership at Google, Microsoft, and Splunk, Manish brings unmatched expertise in AI,
                  machine learning, and data-driven innovation. His vision drives Hushh&apos;s mission to empower investors with
                  sustainable, technology-powered wealth strategies.
                </p>
              </article>

              {/* Justin Donaldson */}
              <article className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm text-center transition-colors hover:border-hushh-blue/20">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto mb-6 border-[3px] border-hushh-blue">
                  <img src={img2} alt="Justin Donaldson" className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl mb-2 text-black font-serif" style={playfair}>
                  Justin <span className="text-hushh-blue">Donaldson</span>
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                  Chief Scientist & Investment Strategist
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Justin leads Hushh&apos;s scientific and strategic investment approaches. As the architect behind proprietary
                  options strategies like &quot;Sell the Wall,&quot; he uses advanced quantitative models to deliver consistent,
                  risk-optimized returns.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Investment Philosophy Section */}
        <section className="mb-12 lg:mb-16 py-8 lg:py-12 rounded-2xl bg-ios-gray-bg px-4 md:px-8 border border-gray-200/60">
          <div className="max-w-5xl mx-auto space-y-6">
            <article className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="text-4xl shrink-0 mt-1">💰</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-3xl font-medium text-black mb-6 font-serif" style={playfair}>
                    Focus on Free Cash Flow
                  </h3>
                  <p className="text-base md:text-xl text-gray-600 leading-relaxed font-light">
                    We prioritize companies with strong, predictable free cash flow generation and healthy fundamentals. These are the engines of sustainable returns and perpetual income.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="text-4xl shrink-0 mt-1">🏢</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-3xl font-medium text-black mb-6 font-serif" style={playfair}>
                    Long-Term Ownership
                  </h3>
                  <p className="text-base md:text-xl text-gray-600 leading-relaxed font-light">
                    &quot;We do not gamble on companies. We own the best businesses on the planet.&quot; Our approach is to take significant ownership stakes and hold them to compound value over decades.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="text-4xl shrink-0 mt-1">⚡</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-3xl font-medium text-black mb-6 font-serif" style={playfair}>
                    AI-Driven Alpha & Systematic Risk Management
                  </h3>
                  <p className="text-base md:text-xl text-gray-600 leading-relaxed font-light">
                    We leverage proprietary algorithms, advanced mathematics, and AI to continuously extract alpha across internal, value-maximizing strategies — every second, every day. This includes monitoring volatility of varied instruments and ensuring capital preservation while generating superior yield.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="text-4xl shrink-0 mt-1">🌟</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-3xl font-medium text-black mb-6 font-serif" style={playfair}>
                    Human Expertise x AI Synergy
                  </h3>
                  <p className="text-base md:text-xl text-gray-600 leading-relaxed font-light">
                    We believe in the power of human brains and beings to work well together with machines and AI systems. AI provides speed, scale, and data breadth; human insight provides deep understanding, qualitative judgment, and strategic oversight.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200/60 shadow-sm hover:border-hushh-blue/20 transition-colors">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="text-4xl shrink-0 mt-1">📈</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-3xl font-medium text-black mb-6 font-serif" style={playfair}>
                    Modern Infrastructure, Enhanced Value
                  </h3>
                  <p className="text-base md:text-xl text-gray-600 leading-relaxed font-light">
                    By building on cutting-edge automation and analytics from day one, we operate with efficiency, aiming to deliver superior risk-adjusted returns by moving beyond outdated, higher-fee models.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl mb-6 text-black tracking-tight font-serif" style={playfair}>
            Join <span className="text-hushh-blue">Us</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Whether you&apos;re an individual or an institution, Hushh Technologies LLC invites you to join us on our journey
            to transform investment strategies through innovative technology and ethical practices.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <HushhTechCta
              type="button"
              variant={HushhTechCtaVariant.BLACK}
              onClick={() => {
                window.location.href = "/contact";
              }}
              className="sm:w-auto sm:min-w-[200px]"
            >
              Contact Us
            </HushhTechCta>
            <HushhTechCta
              type="button"
              variant={HushhTechCtaVariant.WHITE}
              onClick={() => {
                window.location.href = "/signUp";
              }}
              className="sm:w-auto sm:min-w-[200px]"
            >
              Sign Up Now
            </HushhTechCta>
          </div>
        </section>
      </main>
      <HushhTechFooter />
    </div>
  );
}
