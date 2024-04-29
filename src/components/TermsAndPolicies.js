import React, { useState } from "react";
import "../styles/terms-and-policies.css";

const TermsAndPolicies = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="terms-and-policies">
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "terms" ? "active" : ""}`}
          onClick={() => toggleTab("terms")}
        >
          Terms of Service
        </button>
        <button
          className={`tab-btn ${activeTab === "privacy" ? "active" : ""}`}
          onClick={() => toggleTab("privacy")}
        >
          Privacy Policy
        </button>
        <button
          className={`tab-btn ${activeTab === "conditions" ? "active" : ""}`}
          onClick={() => toggleTab("conditions")}
        >
          Conditions
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "terms" && (
          <div className="terms-content">
            <h2>Terms of Service</h2>
            <ol>
              <li>
                <strong>Acceptance of Terms:</strong> By using our website or
                services, you agree to be bound by these Terms of Service. If
                you do not agree with these terms, you should not use our
                website or services.
              </li>
              <li>
                <strong>Eligibility:</strong> Our services are intended for
                individuals aged 13 and older. If you are under the age of 18,
                you must have parental or legal guardian consent to use our
                services.
              </li>
              <li>
                <strong>User Accounts:</strong> You may be required to create an
                account to access certain features of our services. You are
                responsible for maintaining the confidentiality of your account
                credentials and for all activities that occur under your
                account.
              </li>
              <li>
                <strong>User Content:</strong> You are solely responsible for
                any content you upload, post, or transmit through our services.
                You retain ownership of your content, but you grant us a
                non-exclusive, royalty-free license to use, reproduce, and
                distribute your content in connection with providing our
                services.
              </li>
              <li>
                <strong>Intellectual Property:</strong> Our services, including
                all content, software, and trademarks, are owned by us or our
                licensors and are protected by intellectual property laws. You
                may not use our intellectual property without our express
                written consent.
              </li>
              <li>
                <strong>Third-Party Services:</strong> Our services may
                integrate or link to third-party services. We are not
                responsible for the content, privacy policies, or practices of
                these third-party services.
              </li>
              <li>
                <strong>Termination:</strong> We reserve the right to suspend or
                terminate your access to our services at any time, with or
                without cause.
              </li>
              <li>
                <strong>Disclaimer of Warranties:</strong> Our services are
                provided "as is" and "as available" without warranties of any
                kind, express or implied.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> We shall not be liable
                for any indirect, incidental, special, or consequential damages
                arising out of your use of our services.
              </li>
              <li>
                <strong>Governing Law:</strong> These Terms of Service shall be
                governed by and construed in accordance with the laws of the
                State of California, without regard to its conflict of laws
                principles.
              </li>
            </ol>
          </div>
        )}
        {activeTab === "privacy" && (
          <div className="privacy-content">
            <h2>Privacy Policy</h2>
            <ol>
              <li>
                <strong>Information Collection:</strong> We may collect personal
                information such as your name, email address, and phone number
                when you create an account or use our services. We may also
                collect non-personal information, such as device information and
                usage data.
              </li>
              <li>
                <strong>Use of Information:</strong> We may use the collected
                information to provide and improve our services, communicate
                with you, and for other purposes outlined in this Privacy
                Policy.
              </li>
              <li>
                <strong>Information Sharing:</strong> We may share your personal
                information with third-party service providers who assist us in
                operating our services, as required by law, or with your
                consent.
              </li>
              <li>
                <strong>Data Security:</strong> We implement reasonable security
                measures to protect your personal information from unauthorized
                access, use, or disclosure.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We may use
                cookies and similar tracking technologies to collect information
                about your use of our services and to enhance your experience.
              </li>
              <li>
                <strong>Third-Party Services:</strong> Our services may
                integrate or link to third-party services that have their own
                privacy policies, which we encourage you to review.
              </li>
              <li>
                <strong>Children's Privacy:</strong> Our services are not
                intended for children under the age of 13. We do not knowingly
                collect personal information from children without parental
                consent.
              </li>
              <li>
                <strong>Changes to this Privacy Policy:</strong> We may update
                this Privacy Policy from time to time. We will notify you of any
                material changes by posting the updated policy on our website.
              </li>
              <li>
                <strong>Contact Us:</strong> If you have any questions or
                concerns about our Privacy Policy, please contact us at [insert
                contact information].
              </li>
            </ol>
          </div>
        )}
        {activeTab === "conditions" && (
          <div className="conditions-content">
            <h2>Conditions</h2>
            <ol>
              <li>
                <strong>Age Requirement:</strong> As per California laws, you
                must be at least 13 years old to use our services. If you are
                under 18, you must have parental or legal guardian consent.
              </li>
              <li>
                <strong>Restricted Activities:</strong> You may not use our
                services for any illegal or unauthorized purposes, including but
                not limited to violating intellectual property rights,
                distributing malware, or engaging in fraud or harassment.
              </li>
              <li>
                <strong>User Content Restrictions:</strong> You agree not to
                upload, post, or transmit any content that is unlawful,
                defamatory, obscene, or infringes on the rights of others.
              </li>
              <li>
                <strong>Compliance with Laws:</strong> You agree to comply with
                all applicable laws and regulations when using our services.
              </li>
              <li>
                <strong>No Endorsement or Guarantee:</strong> Our services may
                provide information or recommendations, but we do not endorse or
                guarantee the accuracy, reliability, or legality of any such
                information or recommendations.
              </li>
              <li>
                <strong>Indemnification:</strong> You agree to indemnify and
                hold us harmless from any claims, damages, or expenses arising
                out of your use of our services or violation of these
                Conditions.
              </li>
              <li>
                <strong>Modification of Services:</strong> We reserve the right
                to modify, suspend, or discontinue our services at any time,
                with or without notice.
              </li>
              <li>
                <strong>Dispute Resolution:</strong> Any disputes arising from
                these Conditions or your use of our services shall be resolved
                through binding arbitration in accordance with the rules of the
                American Arbitration Association.
              </li>
              <li>
                <strong>Severability:</strong> If any provision of these
                Conditions is held to be unenforceable, the remaining provisions
                shall remain in full force and effect.
              </li>
              <li>
                <strong>Entire Agreement:</strong> These Conditions, along with
                our Terms of Service and Privacy Policy, constitute the entire
                agreement between you and us regarding your use of our services.
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndPolicies;
