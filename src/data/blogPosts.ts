export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-walnut-ai-orchestrated-sdlc",
    title: "Introducing AI-Orchestrated SDLC: Ship Software While You Sleep",
    excerpt:
      "Discover how WalnutAI's AI bots coordinate across the entire software delivery lifecycle — from requirements to production — with zero human intervention.",
    content: `
      <p>Software delivery has always demanded constant human coordination — gathering requirements, writing code, creating tests, and managing releases. What if AI could handle the entire pipeline while you focus on what matters?</p>

      <h2>The Problem with Traditional SDLC</h2>
      <p>Most teams lose 40–60% of their development time to handoffs, context switching, and coordination overhead. Requirements get lost in translation, code drifts from specs, and testing is always the bottleneck.</p>

      <h2>How AI-Orchestrated SDLC Works</h2>
      <p>WalnutAI introduces specialized AI bots that handle every stage of delivery:</p>
      <ul>
        <li><strong>Requirements Bot</strong> — Extracts and structures requirements from documents, audio, and video files</li>
        <li><strong>Code Bot</strong> — Generates implementation code aligned with your architecture and standards</li>
        <li><strong>Test Bot</strong> — Creates comprehensive test suites from user stories in under 30 seconds</li>
        <li><strong>Review Bot</strong> — Performs gap analysis to catch drift between requirements and code</li>
      </ul>

      <p>These bots exchange context and coordinate dependencies in real time, keeping end-to-end execution aligned without human intervention.</p>

      <h2>The Outcome</h2>
      <blockquote><p>Wake up to a completely built app — requirements documented, code written, tests passing, and deployment ready.</p></blockquote>

      <p>Teams using WalnutAI's orchestrated SDLC have reported up to 70% reduction in delivery time while maintaining higher code quality and test coverage.</p>
    `,
    date: "2026-03-10",
    author: "WalnutAI Team",
    image: "/assets/blog/ai-orchestrated-sdlc.svg",
    category: "Product",
    tags: ["AI", "SDLC", "Automation"],
  },
  {
    slug: "why-gap-analysis-matters",
    title: "Why Continuous Gap Analysis Is the Secret to Shipping Quality Software",
    excerpt:
      "Learn how WalnutAI's gap analysis catches missing implementations, incomplete features, and misaligned code before they become costly production bugs.",
    content: `
      <p>Every engineering team has experienced the pain of discovering a critical gap days before a release. A feature that was partially implemented, a requirement that was misunderstood, or a test case that was never written.</p>

      <h2>What Is Gap Analysis?</h2>
      <p>Gap analysis is the process of comparing what was <em>intended</em> (requirements) with what was <em>built</em> (code and tests). WalnutAI automates this comparison continuously, not just at release time.</p>

      <h2>How WalnutAI Detects Gaps</h2>
      <p>WalnutAI traces every requirement through to its implementation and test coverage:</p>
      <ul>
        <li>Requirements without corresponding code are flagged as <strong>missing implementations</strong></li>
        <li>Code without test coverage is flagged as <strong>untested functionality</strong></li>
        <li>Tests that don't trace back to requirements are flagged as <strong>orphaned tests</strong></li>
      </ul>

      <h2>Real-Time Quality Monitoring</h2>
      <p>Unlike traditional code reviews that happen at PR time, WalnutAI monitors your codebase continuously. Drift and gaps are detected in real time, so quality issues are found before they reach production.</p>

      <blockquote><p>Fix code issues before they become production incidents. WalnutAI gives you the visibility to catch problems when they're cheapest to fix.</p></blockquote>
    `,
    date: "2026-03-05",
    author: "WalnutAI Team",
    image: "/assets/blog/gap-analysis.svg",
    category: "Engineering",
    tags: ["Quality", "Testing", "Gap Analysis"],
  },
  {
    slug: "ai-generated-test-cases-at-scale",
    title: "Stop Writing Tests Manually: AI-Generated Test Cases at Scale",
    excerpt:
      "WalnutAI generates comprehensive functional, integration, and regression tests directly from your user stories — in under 30 seconds.",
    content: `
      <p>Manual test writing is one of the biggest bottlenecks in software delivery. It's tedious, error-prone, and often deprioritized under deadline pressure. What if your test suite could write itself?</p>

      <h2>The Testing Bottleneck</h2>
      <p>Studies show that teams spend 30–50% of their development effort on testing activities. Yet test coverage remains below 60% for most projects. The math doesn't add up — teams are spending enormous effort and still shipping with gaps.</p>

      <h2>AI-Powered Test Generation</h2>
      <p>WalnutAI takes a fundamentally different approach. Instead of writing tests after code, it generates tests directly from your user stories and requirements:</p>
      <ul>
        <li><strong>Functional Tests</strong> — Validate that each feature works as specified</li>
        <li><strong>Integration Tests</strong> — Verify interactions between components and services</li>
        <li><strong>Regression Tests</strong> — Ensure new changes don't break existing functionality</li>
        <li><strong>Edge Case Tests</strong> — Cover boundary conditions that humans often miss</li>
      </ul>

      <h2>30 Seconds to Comprehensive Coverage</h2>
      <p>Upload your user stories or requirements documents, and WalnutAI generates a complete test suite in under 30 seconds. Each test is traceable back to the requirement it validates, giving you full visibility into your coverage.</p>

      <h2>Integrate with Your Workflow</h2>
      <p>Generated tests work with your existing test framework — Jest, Playwright, Cypress, or any other tool your team already uses. No migration required.</p>
    `,
    date: "2026-02-28",
    author: "WalnutAI Team",
    image: "/assets/blog/ai-test-generation.svg",
    category: "Testing",
    tags: ["Testing", "AI", "Automation", "Quality"],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))];
}
