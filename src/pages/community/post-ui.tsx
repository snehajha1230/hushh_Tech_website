/**
 * Community Post — UI / Presentation (Revamped)
 * Apple iOS colors, Playfair Display headings, proper English.
 * Matches Home + Fund A design language.
 * Logic stays in post-logic.ts — zero data here.
 */
import { useCommunityPostLogic } from "./post-logic";
import HushhTechBackHeader from "../../components/hushh-tech-back-header/HushhTechBackHeader";
import HushhTechCta, {
  HushhTechCtaVariant,
} from "../../components/hushh-tech-cta/HushhTechCta";
import HushhTechFooter, {
  HushhFooterTab,
} from "../../components/hushh-tech-footer/HushhTechFooter";

/* ── Playfair heading style ── */
const playfair = { fontFamily: "'Playfair Display', serif" };

const downloadPdf = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', '');
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function CommunityPostPage() {
  const { post, loading, handleBack } = useCommunityPostLogic();

  /* loading state */
  if (loading) {
    return (
      <div
        className="bg-white min-h-screen flex items-center justify-center"
        role="status"
        aria-live="polite"
      >
        <div
          className="w-8 h-8 border-2 border-gray-200 border-t-hushh-blue rounded-full animate-spin"
          aria-hidden="true"
        />
        <span className="sr-only">Loading post</span>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white text-gray-900 min-h-screen antialiased flex flex-col selection:bg-hushh-blue selection:text-white">
        <HushhTechBackHeader onBackClick={handleBack} rightType="hamburger" />
        <main
          id="main-content"
          className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-32"
        >
          <h1
            className="text-2xl font-normal text-black tracking-tight font-serif mb-2"
            style={playfair}
          >
            Post not found
          </h1>
          <p className="text-sm text-gray-500 font-light mb-8 max-w-sm">
            This post may have been moved or is no longer available.
          </p>
          <div className="w-full max-w-xs">
            <HushhTechCta variant={HushhTechCtaVariant.BLACK} onClick={handleBack}>
              Back to Community
            </HushhTechCta>
          </div>
        </main>
        <HushhTechFooter activeTab={HushhFooterTab.COMMUNITY} />
      </div>
    );
  }

  const PostComponent = post.Component;

  /* ── PDF Post ── */
  if (post.pdfUrl) {
    return (
      <div className="bg-white text-gray-900 min-h-screen antialiased flex flex-col selection:bg-hushh-blue selection:text-white">
        {/* Header */}
        <HushhTechBackHeader
          onBackClick={handleBack}
          rightType="hamburger"
        />

        <main id="main-content" className="flex-1 flex flex-col">
          {/* Desktop: Full-screen iframe */}
          <div className="hidden md:block flex-1">
            <iframe
              src={`${post.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              className="w-full h-[calc(100vh-64px)] border-none"
              title={post.title}
            />
          </div>

          {/* Mobile: Clean card with open/download */}
          <div className="md:hidden px-6 flex-grow max-w-md mx-auto w-full pb-32">
            <section className="pt-8">
              {/* PDF icon */}
              <div
                className="w-16 h-16 rounded-2xl bg-hushh-blue/5 border border-hushh-blue/20 flex items-center justify-center mb-8"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-hushh-blue !text-[1.8rem]">
                  description
                </span>
              </div>

            {/* title */}
            <h1
              className="text-[2rem] leading-[1.2] font-normal text-black tracking-tight font-serif mb-3"
              style={playfair}
            >
              {post.title}
            </h1>
            <p className="text-[13px] text-gray-400 font-light leading-relaxed mb-10">
              Tap below to view the full PDF document in your browser.
            </p>

            {/* CTAs */}
            <div className="space-y-3">
              <HushhTechCta
                variant={HushhTechCtaVariant.BLACK}
                onClick={() => window.open(post.pdfUrl, "_blank")}
              >
                Open PDF Document
                <span className="material-symbols-outlined !text-[1.1rem]" aria-hidden="true">
                  open_in_new
                </span>
              </HushhTechCta>

              <HushhTechCta
                variant={HushhTechCtaVariant.WHITE}
                onClick={() => downloadPdf(post.pdfUrl!)}
              >
                Download PDF
                <span className="material-symbols-outlined !text-[1.1rem]" aria-hidden="true">
                  download
                </span>
              </HushhTechCta>
            </div>
            </section>
          </div>
        </main>

        {/* Footer Nav */}
        <HushhTechFooter activeTab={HushhFooterTab.COMMUNITY} />
      </div>
    );
  }

  /* ── Regular Post (React component) ── */
  return (
    <div className="bg-white text-gray-900 min-h-screen antialiased flex flex-col selection:bg-hushh-blue selection:text-white">
      {/* Header */}
      <HushhTechBackHeader
        onBackClick={handleBack}
        rightType="hamburger"
      />

      {/* Post content */}
      <main
        id="main-content"
        className="flex-1 max-w-[900px] mx-auto w-full px-4 md:px-8 py-6 md:py-10 pb-32"
      >
        <PostComponent />
      </main>

      {/* Footer Nav */}
      <HushhTechFooter activeTab={HushhFooterTab.COMMUNITY} />
    </div>
  );
}
