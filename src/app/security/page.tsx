"use client";

import Link from "next/link";

export default function SecurityPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#d1d5db" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e1e1e", padding: "20px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/">
            <img src="/assets/logo/Walnut-White.png" alt="WalnutAI" style={{ height: 32 }} />
          </Link>
          <Link href="/" style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}>
            &larr; Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Security Policy</h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 8 }}>Your data security is our top priority</p>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 40 }}>
          Effective Date: March 2026 &nbsp;|&nbsp; Last Updated: March 24, 2026 &nbsp;|&nbsp; Version: 1.0
        </p>

        <div className="legal-content">
          <h2>Our Commitment to Security</h2>
          <p>
            At WalnutAI, we understand that security is paramount when you entrust us with your testing data and automation workflows. We have implemented comprehensive security measures across our platform to protect your data, ensure system integrity, and maintain the highest standards of information security.
          </p>
          <p>
            This document outlines our security practices, compliance commitments, and how we safeguard your information.
          </p>

          <h2>1. Platform Security Architecture</h2>
          <h3>Enterprise-Grade Infrastructure</h3>
          <p>WalnutAI is built on a modern, scalable architecture designed with security at its core:</p>
          <ul>
            <li><strong>Multi-Tenant Architecture:</strong> Complete data isolation between organizations with dedicated security boundaries</li>
            <li><strong>Microservices Design:</strong> Segmented services minimize attack surface and contain potential security incidents</li>
            <li><strong>Cloud-Native Deployment:</strong> Leveraging enterprise cloud infrastructure (AWS/Azure) with built-in security features</li>
            <li><strong>High Availability:</strong> Redundant systems ensure continuous operation and data protection</li>
          </ul>

          <h3>Technology Stack</h3>
          <p>Our platform utilizes industry-standard, security-hardened technologies:</p>
          <ul>
            <li>Backend: Node.js with Express framework, secured with Helmet.js</li>
            <li>Database: MongoDB with encryption and role-based access control</li>
            <li>Caching: Redis with TLS encryption for session management</li>
            <li>Storage: AWS S3 / Azure Blob with encryption at rest and in transit</li>
          </ul>

          <h2>2. Data Protection</h2>
          <h3>Encryption</h3>
          <p><strong>Data in Transit:</strong></p>
          <ul>
            <li>TLS 1.3 encryption for all data transmission</li>
            <li>HTTPS for all API communications</li>
            <li>WSS (WebSocket Secure) for real-time connections</li>
          </ul>
          <p><strong>Data at Rest:</strong></p>
          <ul>
            <li>AES-256 encryption for sensitive data fields</li>
            <li>Bcrypt password hashing with industry-standard cost factors</li>
            <li>Encrypted API keys and integration tokens</li>
            <li>Encrypted database backups</li>
          </ul>

          <h3>Data Isolation</h3>
          <ul>
            <li>Complete logical separation between customer organizations</li>
            <li>Organization-scoped access controls on all data queries</li>
            <li>Indexed tenant identifiers for performance and security</li>
            <li>No cross-tenant data access or leakage</li>
          </ul>

          <h2>3. Authentication &amp; Access Control</h2>
          <h3>User Authentication</h3>
          <p><strong>Robust Authentication:</strong></p>
          <ul>
            <li>Industry-standard bcrypt password hashing</li>
            <li>Secure session management</li>
            <li>JWT token support for API access</li>
            <li>Password complexity requirements</li>
          </ul>
          <p><strong>Session Security:</strong></p>
          <ul>
            <li>HttpOnly cookies prevent XSS attacks</li>
            <li>SameSite attributes for CSRF protection</li>
            <li>Configurable session timeouts</li>
            <li>24-hour maximum session duration</li>
          </ul>

          <h3>Role-Based Access Control (RBAC)</h3>
          <ul>
            <li>Granular permission system based on user roles</li>
            <li>Organization, project, and resource-level permissions</li>
            <li>Principle of least privilege enforced</li>
            <li>Audit logging of permission changes</li>
          </ul>

          <h2>4. Application Security</h2>
          <h3>Secure Development Practices</h3>
          <ul>
            <li>Security requirements integrated into development lifecycle</li>
            <li>Regular security code reviews</li>
            <li>Automated security testing in CI/CD pipeline</li>
            <li>Input validation using Zod validation library</li>
            <li>Continuous dependency scanning for vulnerabilities</li>
          </ul>

          <h3>API Security</h3>
          <ul>
            <li>Authentication required for all endpoints</li>
            <li>Rate limiting to prevent abuse</li>
            <li>Request validation and sanitization</li>
            <li>Secure error handling</li>
            <li>OAuth 2.0 support for integrations</li>
          </ul>

          <h2>5. Network Security</h2>
          <h3>Infrastructure Protection</h3>
          <p><strong>Network Segmentation:</strong></p>
          <ul>
            <li>Private subnets for databases</li>
            <li>Load balancers with DDoS protection</li>
            <li>Firewall rules restricting traffic</li>
            <li>VPN access for administration</li>
          </ul>
          <p><strong>Security Headers:</strong></p>
          <ul>
            <li>Content Security Policy (CSP)</li>
            <li>HTTP Strict Transport Security (HSTS)</li>
            <li>X-Frame-Options (clickjacking prevention)</li>
            <li>X-Content-Type-Options</li>
          </ul>

          <h2>6. Monitoring &amp; Incident Response</h2>
          <h3>24/7 Security Monitoring</h3>
          <ul>
            <li>Real-time application monitoring</li>
            <li>Security event logging and analysis</li>
            <li>Anomaly detection for suspicious activities</li>
            <li>Automated alerting for security events</li>
            <li>Comprehensive audit logging</li>
          </ul>

          <h3>Incident Response</h3>
          <ul>
            <li>Dedicated security team with defined procedures</li>
            <li>24/7 security incident monitoring</li>
            <li>Documented incident response playbooks</li>
            <li>Commitment to transparent communication</li>
            <li>GDPR-compliant breach notification (72-hour requirement)</li>
          </ul>
          <p>
            <strong>Security Contact:</strong> <a href="mailto:assist@walnutai.ai">assist@walnutai.ai</a> — Available 24/7 for security incidents.
          </p>

          <h2>7. Compliance &amp; Certifications</h2>
          <h3>GDPR Compliance</h3>
          <ul>
            <li>Data processing agreements</li>
            <li>Right to access (data export)</li>
            <li>Right to erasure (account deletion)</li>
            <li>Privacy by design</li>
            <li>72-hour breach notification</li>
          </ul>

          <h3>CCPA Compliance</h3>
          <ul>
            <li>Transparent data practices</li>
            <li>User rights to access/deletion</li>
            <li>Opt-out mechanisms</li>
          </ul>

          <h3>SOC 2 Type II</h3>
          <ul>
            <li>Security controls aligned</li>
            <li>Regular third-party audits</li>
            <li>Continuous monitoring</li>
          </ul>

          <h3>Industry Standards</h3>
          <ul>
            <li>OWASP Top 10 compliance</li>
            <li>ISO 27001 alignment</li>
            <li>Security best practices</li>
          </ul>

          <h2>8. Business Continuity &amp; Disaster Recovery</h2>
          <h3>Data Backup</h3>
          <ul>
            <li>Daily automated backups of all customer data</li>
            <li>Encrypted backup storage</li>
            <li>Geographic redundancy for disaster recovery</li>
            <li>Regular backup restoration testing</li>
          </ul>

          <h3>Recovery Commitments</h3>
          <ul>
            <li><strong>Recovery Time Objective (RTO):</strong> 4 hours</li>
            <li><strong>Recovery Point Objective (RPO):</strong> 24 hours</li>
            <li><strong>Uptime SLA:</strong> 99.9%</li>
          </ul>

          <h2>9. Third-Party Security</h2>
          <h3>Vendor Management</h3>
          <ul>
            <li>Security assessments of third-party services</li>
            <li>Contractual security requirements</li>
            <li>Regular vendor security reviews</li>
            <li>Trusted enterprise cloud providers (AWS, Azure)</li>
          </ul>

          <h3>Dependency Management</h3>
          <ul>
            <li>Continuous dependency monitoring</li>
            <li>Automated vulnerability scanning</li>
            <li>Timely security updates</li>
            <li>Software supply chain security</li>
          </ul>

          <h2>10. Customer Security Responsibilities</h2>
          <p>While we provide robust platform security, customers play a crucial role in maintaining overall security:</p>
          <ul>
            <li><strong>Account Security:</strong> Maintain strong, unique passwords</li>
            <li><strong>Access Management:</strong> Properly configure user roles and permissions</li>
            <li><strong>Credential Protection:</strong> Safeguard API keys and integration tokens</li>
            <li><strong>Security Awareness:</strong> Train team members on security practices</li>
            <li><strong>Prompt Reporting:</strong> Report suspected security issues immediately</li>
          </ul>

          <h2>11. Contact &amp; Support</h2>
          <p>
            Contact us on:{" "}
            <a href="mailto:assist@walnutai.ai">assist@walnutai.ai</a> or{" "}
            <a href="mailto:contact@walnutai.ai">contact@walnutai.ai</a>
          </p>

          <h3>Reporting Security Issues</h3>
          <p>If you discover a potential security vulnerability:</p>
          <ul>
            <li>Email <a href="mailto:assist@walnutai.ai">assist@walnutai.ai</a> with details</li>
            <li>Include description, steps to reproduce, and potential impact</li>
            <li>Do not publicly disclose until we&apos;ve addressed the issue</li>
            <li>We will acknowledge within 48 hours and provide updates</li>
          </ul>

          <h2>Our Security Commitment</h2>
          <p>
            WalnutAI is committed to maintaining the highest standards of security and privacy. This security policy reflects our current practices and our ongoing commitment to protecting customer data.
          </p>
          <ul>
            <li>Continuous security monitoring and improvement</li>
            <li>Transparent communication about security practices</li>
            <li>Rapid response to security incidents</li>
            <li>Compliance with applicable regulations</li>
            <li>Partnership with customers in maintaining security</li>
          </ul>

          <p style={{ marginTop: 40, color: "#6b7280", fontSize: 13 }}>
            Document Classification: Public &nbsp;|&nbsp; Version: 1.0 &nbsp;|&nbsp; Last Updated: March 24, 2026 &nbsp;|&nbsp; Next Scheduled Review: September 2026
          </p>
          <p style={{ color: "#6b7280", fontSize: 13 }}>
            &copy; 2025 WalnutAI. All rights reserved. This document represents WalnutAI&apos;s security practices as of the effective date.
          </p>
        </div>
      </div>
    </div>
  );
}
