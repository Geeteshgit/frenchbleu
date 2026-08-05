const PrivacyPolicyPage = () => {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>

          <p className="text-sm text-neutral-500">
            Last updated: August 6, 2026
          </p>

          <p className="text-base leading-7 text-neutral-700">
            This Privacy Policy explains how French Bleu Bakery collects, uses,
            and protects your personal information when you visit our website or
            contact us.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>

          <p className="leading-7 text-neutral-700">
            When you use our contact form, we may collect the following
            information:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Name</li>
            <li>Email address</li>
            <li>Subject</li>
            <li>Message you send us</li>
          </ul>

          <p className="leading-7 text-neutral-700">
            We also collect limited technical information automatically, such as
            your IP address, browser type, and device information, when you
            visit our website or interact with third-party services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>

          <ul className="list-disc space-y-2 pl-6 text-neutral-700">
            <li>Respond to your enquiries and messages.</li>
            <li>Provide customer support.</li>
            <li>Improve our website and services.</li>
            <li>Comply with legal obligations where required.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Google Maps</h2>

          <p className="leading-7 text-neutral-700">
            {`Our website uses an embedded Google Maps iframe to display our
            bakery location. When viewing the map, Google may collect
            information such as your IP address, browser details, and cookie
            data in accordance with Google's own Privacy Policy.`}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Sharing</h2>

          <p className="leading-7 text-neutral-700">
            We do not sell or rent your personal information. We only share
            information with trusted third-party service providers when
            necessary to operate our website or respond to your enquiries.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Retention</h2>

          <p className="leading-7 text-neutral-700">
            Information submitted through our contact form is retained only for
            as long as necessary to respond to your enquiry or as required by
            applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>

          <p className="leading-7 text-neutral-700">
            Depending on your location and applicable laws, you may have the
            right to request access to, correction of, or deletion of your
            personal information. To exercise these rights, please contact us
            using the details provided on our Contact page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>

          <p className="leading-7 text-neutral-700">
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please contact us through the Contact
            page on this website.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
