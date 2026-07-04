import {
  Upload,
  Sparkles,
  Mail,
  BarChart3,
  CalendarClock,
  ShieldCheck
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload Contacts",
    description: "Import recruiters and hiring managers using CSV files."
  },
  {
    icon: Sparkles,
    title: "AI Email Generator",
    description: "Generate personalized emails for every contact."
  },
  {
    icon: Mail,
    title: "Gmail Integration",
    description: "Send emails securely using your Gmail account."
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    description: "Track sent emails and campaign performance."
  },
  {
    icon: CalendarClock,
    title: "Email Scheduling",
    description: "Schedule emails for the perfect time."
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description: "Login safely using Google OAuth."
  }
];

function Features() {
  return (
    <section
  id="features"
  className="py-24 bg-white"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            Powerful Features
          </h2>

          <p className="mt-5 text-xl text-slate-600">
            Everything you need to automate professional emails.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group rounded-2xl border border-slate-200 p-8 hover:border-blue-500 hover:shadow-xl transition duration-300"
              >

                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">

                  <Icon className="text-blue-600" size={32} />

                </div>

                <h3 className="text-2xl font-semibold mt-8">

                  {feature.title}

                </h3>

                <p className="text-slate-600 mt-4 leading-7">

                  {feature.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Features;