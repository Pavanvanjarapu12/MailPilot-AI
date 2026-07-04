import {
  LogIn,
  Upload,
  Sparkles,
  Send,
} from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Login with Google",
    description: "Securely sign in using your Google account.",
  },
  {
    icon: Upload,
    title: "Upload Contacts",
    description: "Import recruiters using CSV or add them manually.",
  },
  {
    icon: Sparkles,
    title: "Generate AI Emails",
    description: "AI creates personalized emails for every contact.",
  },
  {
    icon: Send,
    title: "Review & Send",
    description: "Preview your email and send it through Gmail.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-5 text-xl text-slate-600">
            Automate your job outreach in four simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >

                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">

                  <Icon size={30} className="text-blue-600" />

                </div>

                <h3 className="text-xl font-bold mt-6">

                  {step.title}

                </h3>

                <p className="mt-4 text-slate-600">

                  {step.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;