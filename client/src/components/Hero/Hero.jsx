import { Sparkles, Mail, ShieldCheck, Upload, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 min-h-screen flex items-center">

      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-[120px] opacity-20 -top-10 -left-10"></div>
      <div className="absolute w-96 h-96 bg-cyan-300 rounded-full blur-[150px] opacity-20 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center relative">

        {/* Left Side */}

        <div>

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">

            <Sparkles size={18} />

            AI Powered Email Automation

          </div>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">

            Generate

            <br />

            <span className="text-blue-600">

              Personalized Emails

            </span>

            <br />

            with AI

          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9">

            Create personalized referral, internship and cold outreach
            emails in seconds. Connect your Gmail securely and let AI do
            the hard work.

          </p>

          {/* Features */}

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">

              <Mail className="text-blue-600" />

              AI Personalized Emails

            </div>

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-green-600" />

              Secure Gmail OAuth

            </div>

            <div className="flex items-center gap-3">

              <Upload className="text-orange-500" />

              CSV Contact Upload

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex gap-5">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition">

              Get Started

              <ArrowRight size={20} />

            </button>

            <button className="border border-slate-300 px-8 py-4 rounded-xl hover:bg-slate-100 transition">

              Live Demo

            </button>

          </div>

          {/* Statistics */}

          <div className="flex gap-12 mt-14">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">

                10K+

              </h2>

              <p className="text-slate-500">

                Emails Generated

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-slate-900">

                98%

              </h2>

              <p className="text-slate-500">

                Delivery Rate

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-slate-900">

                ★ 4.9

              </h2>

              <p className="text-slate-500">

                User Rating

              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div>

          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

            {/* Header */}

            <div className="bg-slate-100 flex justify-between items-center px-8 py-5">

              <h2 className="font-bold text-xl">

                AI Email Preview

              </h2>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                Ready

              </span>

            </div>

            <div className="p-8">

              <div className="mb-6">

                <p className="text-slate-500 text-sm">

                  To

                </p>

                <h3 className="font-semibold">

                  Rahul (Google Recruiter)

                </h3>

              </div>

              <div className="mb-6">

                <p className="text-slate-500 text-sm">

                  Subject

                </p>

                <h3 className="font-semibold">

                  Referral Request for Software Engineer

                </h3>

              </div>

              <hr />

              <div className="mt-8 text-slate-700 leading-8">

                Hi Rahul,

                <br /><br />

                I hope you're doing well.

                <br /><br />

                I recently graduated in Computer Science Engineering
                and came across your profile.

                <br /><br />

                I wanted to ask if there are any Software Engineer
                opportunities or referral programs available.

                <br /><br />

                Looking forward to hearing from you.

                <br /><br />

                Regards,

                <br />

                <strong>Pavan Kumar</strong>

              </div>

              <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl">

                Send Email

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;