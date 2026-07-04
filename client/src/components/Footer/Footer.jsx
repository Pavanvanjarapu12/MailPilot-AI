function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-2xl font-bold">

              MailPilot AI

            </h2>

            <p className="mt-4 text-slate-400">

              AI-powered email automation platform
              for job seekers and professionals.

            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-4">

              Product

            </h3>

            <ul className="space-y-2 text-slate-400">

              <li>Features</li>
              <li>Pricing</li>
              <li>Dashboard</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold mb-4">

              Resources

            </h3>

            <ul className="space-y-2 text-slate-400">

              <li>Documentation</li>
              <li>Support</li>
              <li>FAQ</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold mb-4">

              Company

            </h3>

            <ul className="space-y-2 text-slate-400">

              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>

            </ul>

          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <p className="text-center text-slate-500">

          © 2026 MailPilot AI. All rights reserved.

        </p>

      </div>

    </footer>
  );
}

export default Footer;