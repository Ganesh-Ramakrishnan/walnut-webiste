"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
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
        <h1 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 40 }}>Last updated: March 2025</p>

        <div className="legal-content">
          <p>
            This Privacy Policy (&quot;Privacy Policy&quot;) applies to your use of our website{" "}
            <a href="https://app.walnutai.ai/" target="_blank" rel="noopener noreferrer">https://app.walnutai.ai/</a>{" "}
            (&quot;Platform&quot;) and product offered through the Platform (hereinafter collectively referred to as &quot;Services&quot;) which are owned, controlled and operated by Simplify3x Software Private Limited, a company incorporated under the laws of India, and having its registered office at Ground Floor, BCIT, Bhartiya City, RK Hegde Nagar, Bengaluru, Karnataka 560064 (&quot;Company&quot; or &quot;WalnutAI&quot;).
          </p>
          <p>
            For the purposes of these Terms of Use, &quot;we&quot;, &quot;our&quot; and &quot;us&quot; shall mean the Company and &quot;you&quot; and &quot;your&quot;, shall mean a user of the Services, whether registered or not (&quot;User&quot;).
          </p>
          <p>
            This Privacy Policy sets out what data we collect and how and why we use it, when you access the Services. You are advised to read the Privacy Policy carefully before accessing any Services. To access any Services, you are required to accept the terms of this Privacy Policy. By accepting this Privacy Policy, you signify that you have read, understood and agree to be bound by the same. We reserve the right to update or modify this Privacy Policy at any time without prior notice and such changes may be effective immediately. To this end, we request you to go through the Policy every time you access or use the Services.
          </p>
          <p style={{ fontWeight: 600, color: "#fff" }}>
            BY ACCEPTING THE TERMS OF THE PRIVACY POLICY, YOU EXPRESSLY CONSENT TO WALNUTAI&apos;S COLLECTION, RETENTION, ANALYSIS, USE AND DISCLOSURE OF YOUR PERSONAL DATA IN ACCORDANCE THEREOF.
          </p>

          <h2>Objective &amp; Scope</h2>
          <p>
            WalnutAI is committed to protect Users&apos; privacy and appropriately and responsibly use collected data. By way of this Privacy Policy, we aim to provide you a summary of our privacy practices regarding personal data that we collect and process of/about the User through various sources. The primary focus of this Privacy Policy is on the personal data collected and processed. Depending on the purposes of processing and your relationship with us as a data subject, we may provide additional customized privacy policies.
          </p>
          <p>
            This Privacy Policy covers the categories of personal data collected, how we use or process such data, who are the recipients of such data, and your associated rights under applicable laws.
          </p>

          <h2>Applicability of this Privacy Policy</h2>
          <p>
            If you are a customer of WalnutAI, this Privacy Policy does not apply to personal information or other data and information that we process on your behalf (if any) as your service provider (collectively, &quot;Customer Data&quot;). Our use of your Customer Data shall instead be governed by the terms and conditions of the separate terms of service that you have agreed to with us.
          </p>
          <p>
            If you are using the Services as an employee, contractor or other representative of one of our customers and you have any questions about our privacy practices or would like to exercise any rights with respect to your personal information that we process on behalf of our customers, please contact the corresponding customer as we only process your personal information in our capacity as a service provider to our customer.
          </p>

          <h2>Personal Information We Collect</h2>
          <p>
            You may choose to interact with the Services in ways that provide us with your personal information. In some instances, a User ID is generated for form and URL tracking, page views, page pings and usage counts in order to ascertain product performance and development. The amount and type of information that WalnutAI gathers depends on the nature of your interaction with us, as well as the amount of information you choose to share.
          </p>
          <p>
            Like most website operators, WalnutAI automatically collects (i) technical information about your device including your device&apos;s internet protocol (IP) address, device type (e.g., phone, tablet), unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 4G), and general location information such as city, state or geographic area; and (ii) information about your visit to the Services and online activity data (such as the referral URL, the content viewed and the content interacted with).
          </p>

          <h3>Information You Provide Directly</h3>
          <p><strong>Account and Profile Information:</strong> When you register, create or modify your profile, set preferences, or make purchases, we collect information such as:</p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Contact information (e.g., phone number, address)</li>
            <li>Optional profile details (e.g., display name, role)</li>
            <li>Preferences you set within the Services</li>
          </ul>

          <p><strong>Content Within WalnutAI:</strong> When you use WalnutAI products, we collect and store content you create, upload, or interact with. This includes, but is not limited to:</p>
          <ul>
            <li>Comments and feedback within the Services</li>
            <li>Files you upload (e.g., documents, images, code, configuration files)</li>
            <li>Links you share within the platform</li>
            <li>Feedback you provide on AI-generated responses (e.g., thumbs up/down) and other feedback provided directly to us via email, calls, messages</li>
            <li>Any other information included in the content described above</li>
          </ul>

          <p><strong>Important Note for On-Premises Users:</strong> If you use an on-premises version of the Services (where you host the software), we do not store or transmit your content, except for limited data collection permitted by your administrator. This limited data includes:</p>
          <ul>
            <li>Usage data that is anonymized to prevent identification of you or your organization</li>
            <li>Clickstream data about how you interact with features</li>
          </ul>

          <p><strong>Website Content:</strong> When you interact with our websites (including web forms and inquiries, information and demo requests, and our Community portal), we collect content you submit, such as:</p>
          <ul>
            <li>Your name and contact information</li>
            <li>Feedback and comments</li>
            <li>Posts and interactions on our Community portal</li>
            <li>Responses to surveys, contests, promotions, sweepstakes, activities, or events</li>
          </ul>

          <p><strong>Support Interactions:</strong> If you contact our customer support, we collect information related to your request, including:</p>
          <ul>
            <li>Your name and contact information</li>
            <li>A summary of the problem</li>
            <li>Any documentation, screenshots, or other information you provide to help us resolve the issue</li>
          </ul>

          <p><strong>Billing Information:</strong> For paid Services, we collect billing and payment information, such as:</p>
          <ul>
            <li>Billing representative&apos;s name and contact information</li>
            <li>Payment card details (collected via secure payment processing services)</li>
          </ul>

          <h3>Information We Collect Automatically</h3>
          <p><strong>Usage Data:</strong> We track how you use the Services, including:</p>
          <ul>
            <li>Features you use</li>
            <li>Links you click</li>
            <li>Type, size, and filenames of attachments you upload</li>
            <li>Search terms you enter</li>
            <li>How you interact with other users (e.g., collaboration patterns)</li>
            <li>Teams and individuals you work with most frequently</li>
          </ul>

          <p><strong>Device and Connection Information:</strong> We collect information about the devices you use to access the Services, including:</p>
          <ul>
            <li>Connection type and settings</li>
            <li>Operating system</li>
            <li>Browser type</li>
            <li>IP address</li>
            <li>URLs of referring/exit pages</li>
          </ul>

          <p><strong>Cookies and Other Tracking Technologies:</strong> We and our third-party partners (e.g., advertising and analytics providers) use cookies, web beacons, device identifiers, pixels, and similar technologies to provide functionality, recognize you across different Services and devices, and gather analytics.</p>

          <h3>Information from Other Sources</h3>
          <p>We may receive information about you from sources other than directly from you, and we may combine this information with other data we collect. These sources include:</p>
          <ul>
            <li><strong>Other Users of the Services</strong> — Other users may mention you in content, provide your email to invite you, or administrators may provide your contact information.</li>
            <li><strong>Linked Third-Party Services</strong> — When you or your administrator link your WalnutAI account to third-party services (e.g., Google, GitHub, Jira), we receive information as permitted by your settings and the third-party service&apos;s privacy policy.</li>
            <li><strong>WalnutAI Affiliates</strong> — We receive information from our affiliates within the WalnutAI corporate group, subject to their terms and policies.</li>
            <li><strong>WalnutAI Partners and Resellers</strong> — We receive information from our global network of partners and resellers including billing and contact information, company name, and services you&apos;ve purchased or expressed interest in.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>

          <h3>Providing, Personalizing, and Improving the Services</h3>
          <ul>
            <li>Operating and maintaining the Services</li>
            <li>Processing transactions</li>
            <li>Authenticating your identity when you log in</li>
            <li>Providing customer support</li>
            <li>Tailoring features, personalizing your experience, and enhancing productivity</li>
            <li>Combining information across multiple Services you use, to create an integrated experience</li>
          </ul>

          <h3>Research and Development</h3>
          <ul>
            <li>Troubleshooting and identifying trends in usage and activity</li>
            <li>Improving existing Services and developing new products, features, and technologies</li>
            <li>Analyzing interactions with AI-generated outputs to improve AI performance</li>
            <li>Testing new features with select users before broader release</li>
          </ul>

          <h3>Communicating with You</h3>
          <ul>
            <li>Sending transactional communications (e.g., purchase confirmations, subscription reminders, technical notices, security alerts)</li>
            <li>Providing tailored communications based on your activity</li>
            <li>Sending onboarding communications to help you effectively use the Services</li>
            <li>Responding to demo requests, inquiries and web form submissions</li>
          </ul>

          <h3>Marketing and Promoting the Services</h3>
          <ul>
            <li>Sending promotional communications about new features, products, offers, events, surveys, and newsletters</li>
            <li>You can control whether you receive these marketing communications (see &quot;Your Rights and Choices&quot;)</li>
          </ul>

          <h3>Safety and Security</h3>
          <ul>
            <li>Verifying accounts and activity</li>
            <li>Detecting, preventing, and responding to security incidents</li>
            <li>Monitoring and protecting against malicious, deceptive, fraudulent, or illegal activity</li>
          </ul>

          <h2>How We Disclose Your Information</h2>
          <p>To provide and support our Services, which include collaboration features, we may disclose your information as described below. We do not sell your personal information for monetary consideration.</p>

          <h3>Disclosures to Other Service Users</h3>
          <p>When you use the Services, certain information about you may be visible to other users, including collaboration content, profile information, and managed account data.</p>

          <h3>Disclosures to Third Parties</h3>
          <ul>
            <li><strong>Service Providers</strong> — We use third-party service providers for website development, hosting, payment processing, analytics, marketing, and other services.</li>
            <li><strong>WalnutAI Partners and Resellers</strong> — We share information with partners who provide consulting, sales, support, and technical services.</li>
            <li><strong>Third-Party Apps</strong> — If you install third-party apps within the Services, these apps may access your account and information.</li>
            <li><strong>Legal Compliance</strong> — We may disclose information to comply with laws, enforce agreements, or protect rights.</li>
          </ul>

          <h2>AI Model Processing and Third-Party Responsibility</h2>
          <p>
            WalnutAI may enable users to submit, process, or transmit data through artificial intelligence models or services that are owned, operated, or provided by third-party providers (&quot;AI Models&quot;). WalnutAI does not own, control, or operate these AI Models and acts solely as an orchestration and facilitation layer that enables interaction between users and such third-party AI services.
          </p>
          <p>
            Any data, prompts, inputs, files, or other information submitted through WalnutAI for processing by AI Models may be transmitted to and processed by the respective third-party AI service providers in accordance with their own privacy policies, terms of service, and data handling practices. WalnutAI does not assume responsibility or liability for the processing, storage, security, or use of such data by these third-party AI Model providers.
          </p>

          <h2>Data Security and Storage</h2>
          <p>
            We employ industry-standard technical and organizational measures to protect your information from unauthorized access, use, or disclosure. These measures include encryption of data in transit and at rest, access controls, regular security assessments, and vulnerability testing.
          </p>
          <p>
            However, no security system is entirely impenetrable. Due to the inherent nature of the internet, we cannot guarantee absolute security. We strive to protect your information, but we cannot warrant the security of any information you transmit to us or store on the Services.
          </p>

          <h2>Data Retention</h2>
          <p>
            The length of time we retain your information depends on the type of information. After the retention period, we will either delete or de-identify your information. If deletion or de-identification is not immediately possible (e.g., due to storage in backup archives), we will securely store your information and isolate it from further use until deletion or de-identification can be completed.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>You have several rights and choices regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> You have the right to request information about how we process your personal information and to obtain a copy of that information.</li>
            <li><strong>Correction:</strong> You have the right to request that we correct inaccurate information about you.</li>
            <li><strong>Deletion:</strong> You have the right to request that we delete your personal information, subject to certain exceptions.</li>
            <li><strong>Objection:</strong> You have the right to object to our processing of your personal information, including for marketing purposes.</li>
            <li><strong>Restriction:</strong> You have the right to request that we restrict the processing of your personal information in certain circumstances.</li>
            <li><strong>Data Portability:</strong> You have the right to receive a copy of certain personal information in a structured, machine-readable format.</li>
            <li><strong>Withdraw Consent:</strong> If we process your information based on your consent, you can withdraw that consent at any time.</li>
          </ul>

          <h3>How to Exercise Your Rights</h3>
          <ul>
            <li>Update your profile information through Account Settings</li>
            <li>Contact us at <a href="mailto:support@walnutai.com">support@walnutai.com</a> for all other requests</li>
            <li>If your organization manages your account, contact your administrator first</li>
          </ul>

          <h2>Notice to End Users (Organizational Accounts)</h2>
          <p>
            If your organization provides you with access to the Services, your organization is the administrator and is responsible for your account. Your use of the Services is subject to your organization&apos;s policies. Direct any data privacy questions to your administrator.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post any changes on this page. For significant changes, we will provide a more prominent notice. We encourage you to review this Privacy Policy periodically. If you disagree with any changes, you must stop using the Services and deactivate your account.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
          <p>
            <strong>Address:</strong> Ground Floor, BCIT, Bhartiya City, RK Hegde Nagar, Bengaluru, Karnataka 560064<br />
            <strong>Email:</strong> <a href="mailto:support@walnutai.com">support@walnutai.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
