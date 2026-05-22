function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <section style={{ marginBottom: last ? 0 : 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111", borderBottom: "2px solid #e8f5f3", paddingBottom: 8, marginBottom: 14 }}>
        {title}
      </h2>
      <div style={{ color: "#333", fontSize: 15, lineHeight: 1.75 }}>
        {children}
      </div>
    </section>
  );
}

const h3Style: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 700,
  color: "#075E54",
  margin: "20px 0 8px",
};

export default function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: "#f7f9fc", minHeight: "100vh" }}>
      <header style={{ background: "#075E54", color: "#fff", padding: "28px 0 18px 0", textAlign: "center" }}>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 1 }}>Zorix</div>
        <div style={{ fontSize: 15, opacity: 0.85, marginTop: 4 }}>WA Tools – Privacy Policy</div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: "40px 40px 48px" }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "#111", marginBottom: 6 }}>Privacy Policy</h1>
          <p style={{ color: "#555", fontSize: 14, marginBottom: 32 }}>
            <strong>Effective Date:</strong> May 1, 2025
          </p>

          <Section title="1. Introduction">
            <p>
              Welcome to <strong>Zorix</strong>. This Privacy Policy describes how we handle information when
              you use our application. WA Tools is a utility app for WhatsApp that provides the following features:
            </p>
            <ul>
              <li><strong>Save Status</strong> – Download and save WhatsApp status images and videos to your device</li>
              <li><strong>Repeat Text</strong> – Quickly repeat or copy text for reuse within chats</li>
              <li><strong>Click to Chat</strong> – Open a WhatsApp chat with any phone number without saving it as a contact</li>
            </ul>
            <p>By using the App, you agree to the practices described in this Privacy Policy.</p>
          </Section>

          <Section title="2. Information We Collect">
            <h3 style={h3Style}>2.1 Information We Do NOT Collect</h3>
            <p>We are committed to your privacy. The App does not collect, store, transmit, or share any personal information. Specifically, we do not collect:</p>
            <ul>
              <li>Your name, phone number, or contact details</li>
              <li>WhatsApp messages, chats, or call logs</li>
              <li>Your contacts list</li>
              <li>Precise or approximate location data</li>
              <li>Payment or financial information</li>
              <li>Unique device identifiers for advertising purposes</li>
            </ul>

            <h3 style={h3Style}>2.2 Local Device Access</h3>
            <p>To deliver core features, the App may request the following permissions on your device. All operations happen locally on your device and data is never sent to any server:</p>
            <ul>
              <li><strong>Storage / Media Access</strong> – Required to read WhatsApp status files from your device storage and save them to your gallery.</li>
              <li><strong>Clipboard Access</strong> – Required for the Repeat Text feature to copy text to your device clipboard.</li>
              <li><strong>Internet Permission</strong> – Required solely to open WhatsApp via the Click to Chat feature using WhatsApp's official URL scheme (wa.me). No data is sent to our servers.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Information">
            <p>
              Since we do not collect personal information, we have no data to use, sell, or share.
              All processing happens entirely on your device. We do not have access to anything you do within the App.
            </p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>The App interacts with the following third-party platforms:</p>
            <ul>
              <li>
                <strong>WhatsApp</strong> – The Click to Chat and Save Status features interact with WhatsApp,
                which is governed by Meta's own Privacy Policy. We encourage you to review WhatsApp's privacy
                practices at{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer" style={{ color: "#075E54" }}>
                  whatsapp.com/legal/privacy-policy
                </a>.
              </li>
              <li>
                <strong>Google Play Services</strong> – If distributed via the Google Play Store, Google's standard
                analytics and crash reporting may apply per Google's Privacy Policy.
              </li>
            </ul>
            <p>We are not affiliated with, endorsed by, or officially connected to WhatsApp or Meta Platforms, Inc.</p>
          </Section>

          <Section title="5. Children's Privacy">
            <p>
              The App is not directed at children under the age of 13. We do not knowingly collect any personal
              information from children. If you believe a child has provided us with personal information, please
              contact us so we can take appropriate action.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              Because we do not collect or transmit any personal data, there is no personal data stored on our
              servers to protect. Data saved to your device (such as downloaded statuses) is stored locally and
              is subject to your device's own security settings. We recommend keeping your device updated and
              using a screen lock for protection.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023
              (India), you have the right to:
            </p>
            <ul>
              <li>Know what personal data is collected about you (we collect none)</li>
              <li>Request deletion of any personal data (none exists with us)</li>
              <li>Withdraw consent at any time by uninstalling the App</li>
            </ul>
            <p>
              Since we do not collect personal data, these rights are inherently satisfied. For any concerns,
              please reach out to us using the contact details below.
            </p>
          </Section>

          <Section title="8. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted within the App or
              on our distribution page with an updated Effective Date. Continued use of the App after any changes
              constitutes your acceptance of the revised policy. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="9. Contact Us" last>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div style={{ background: "#f0faf8", border: "1px solid #c8e6e2", borderRadius: 8, padding: "18px 22px", marginTop: 14 }}>
              <div style={{ marginBottom: 6 }}><strong>App Name:</strong> Zorix</div>
              <div style={{ marginBottom: 6 }}><strong>Developer Location:</strong> Surat, Gujarat, India</div>
              <div><strong>Email:</strong>{" "}
                <a href="mailto:support@zorix.com" style={{ color: "#075E54" }}>support@zorix.com</a>
              </div>
            </div>
            <p style={{ marginTop: 18, color: "#666", fontSize: 13 }}>
              We will respond to all inquiries within 15 business days.
            </p>
            <p style={{ marginTop: 24, padding: "16px 0 0", borderTop: "1px solid #eee", color: "#888", fontSize: 13 }}>
              This Privacy Policy is effective as of May 1, 2025 and applies to all users of Zorix in India.
            </p>
          </Section>
        </div>
      </main>

      <footer style={{ textAlign: "center", color: "#aaa", fontSize: 13, padding: "0 0 32px" }}>
        &copy; 2025 Zorix. All rights reserved.
      </footer>
    </div>
  );
}
