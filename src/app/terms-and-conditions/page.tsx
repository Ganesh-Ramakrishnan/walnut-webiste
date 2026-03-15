"use client";

import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#d1d5db" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e1e1e", padding: "20px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/">
            <img src="/assets/walnut-logo.svg" alt="WalnutAI" style={{ height: 32 }} />
          </Link>
          <Link href="/" style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>
            &larr; Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Terms &amp; Conditions</h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 40 }}>Last updated: March 2025</p>

        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the WalnutAI platform and services (&quot;Services&quot;) provided by Simplify3x Software Private Limited (&quot;WalnutAI&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Services.
          </p>
          <p>
            These Terms apply to all visitors, users, and others who access or use the Services. By using the Services on behalf of an organization, you represent and warrant that you are authorized to bind that organization to these Terms.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            WalnutAI provides an AI-powered platform for software delivery that connects documents, design, code, testing, and AI into a single intelligent system. The Services include but are not limited to:
          </p>
          <ul>
            <li>AI-powered requirements analysis and management</li>
            <li>Automated test case generation and execution</li>
            <li>Continuous gap analysis between requirements and implementation</li>
            <li>AI-powered IDE development tools</li>
            <li>Unified analytics and reporting</li>
            <li>Integration with third-party tools and services</li>
          </ul>

          <h2>3. Account Registration</h2>
          <p>
            To use certain features of the Services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
          </p>
          <p>
            You must notify WalnutAI immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>

          <h2>4. Subscription Plans and Billing</h2>
          <p>
            WalnutAI offers various subscription plans (Explorer, Team, Enterprise). By selecting a paid plan, you agree to pay the applicable fees as described on our pricing page. Fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle.
          </p>
          <ul>
            <li>All fees are non-refundable except as expressly set forth in these Terms or as required by applicable law.</li>
            <li>WalnutAI reserves the right to change subscription fees upon reasonable notice.</li>
            <li>Credits included in your plan are subject to the terms specified in your subscription.</li>
            <li>Additional credits may be purchased as top-ups without changing your subscription.</li>
          </ul>

          <h2>5. Use of AI Models</h2>
          <p>
            The Services may utilize third-party AI models for processing data and generating outputs. You acknowledge and agree that:
          </p>
          <ul>
            <li>AI-generated outputs may not always be accurate, complete, or error-free.</li>
            <li>You are responsible for reviewing and validating AI-generated content before use.</li>
            <li>WalnutAI does not guarantee the accuracy, reliability, or suitability of AI-generated outputs for any particular purpose.</li>
            <li>Data submitted for AI processing may be transmitted to third-party AI service providers subject to their respective terms and privacy policies.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            The Services, including all content, features, and functionality, are owned by WalnutAI and are protected by copyright, trademark, and other intellectual property laws. You retain ownership of any content you create using the Services, subject to the license granted below.
          </p>
          <p>
            By using the Services, you grant WalnutAI a non-exclusive, worldwide, royalty-free license to use, reproduce, and display your content solely for the purpose of providing and improving the Services.
          </p>

          <h2>7. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services for any unlawful purpose or in violation of any applicable laws or regulations.</li>
            <li>Attempt to gain unauthorized access to any part of the Services or any systems or networks connected to the Services.</li>
            <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            <li>Upload or transmit any malicious code, viruses, or harmful data.</li>
            <li>Use the Services to infringe upon the intellectual property rights of others.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Services.</li>
            <li>Use the Services to send unsolicited communications or spam.</li>
            <li>Resell or redistribute the Services without written consent from WalnutAI.</li>
          </ul>

          <h2>8. Data Protection</h2>
          <p>
            Our collection and use of personal information in connection with the Services is described in our <Link href="/privacy-policy" style={{ color: "#F17F0D" }}>Privacy Policy</Link>. By using the Services, you consent to the collection and use of your information as described therein.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            Each party agrees to keep confidential all non-public information disclosed by the other party that is designated as confidential or that should reasonably be considered confidential given the nature of the information and the circumstances of disclosure. This obligation does not apply to information that is publicly available, independently developed, or rightfully received from a third party.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WALNUTAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
          </p>
          <p>
            WALNUTAI&apos;S TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO WALNUTAI DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WALNUTAI DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2>12. Termination</h2>
          <p>
            WalnutAI may suspend or terminate your access to the Services at any time, with or without cause, with or without notice. Upon termination, your right to use the Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
          </p>
          <p>
            You may terminate your account at any time by contacting us at <a href="mailto:support@walnutai.com">support@walnutai.com</a>.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless WalnutAI and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the Services or your violation of these Terms.
          </p>

          <h2>14. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
          </p>

          <h2>15. Modifications to Terms</h2>
          <p>
            WalnutAI reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of the Services after such modifications constitutes your acceptance of the updated Terms.
          </p>

          <h2>16. Miscellaneous</h2>
          <ul>
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and WalnutAI regarding the Services.</li>
            <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.</li>
            <li><strong>Waiver:</strong> The failure of WalnutAI to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</li>
            <li><strong>Assignment:</strong> You may not assign your rights or obligations under these Terms without WalnutAI&apos;s prior written consent.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <p>
            <strong>Address:</strong> Ground Floor, BCIT, Bhartiya City, RK Hegde Nagar, Bengaluru, Karnataka 560064<br />
            <strong>Email:</strong> <a href="mailto:support@walnutai.com">support@walnutai.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
