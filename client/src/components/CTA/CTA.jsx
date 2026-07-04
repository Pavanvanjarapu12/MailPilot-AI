import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="py-24 bg-blue-600">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold text-white">

          Ready to Automate Your Emails?

        </h2>

        <p className="mt-6 text-blue-100 text-xl">

          Join MailPilot AI and start generating professional,
          personalized emails within seconds.

        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">

            Get Started

          </button>

          <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition flex items-center gap-2">

            Learn More

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;