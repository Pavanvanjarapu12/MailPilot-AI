function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            MailPilot AI
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Generate AI-powered personalized emails for recruiters,
            hiring managers, and professionals.
          </p>

          <div className="mt-10 space-y-4">

            <div>✅ AI Email Generation</div>
            <div>✅ Gmail Integration</div>
            <div>✅ CSV Upload</div>
            <div>✅ Campaign Analytics</div>

          </div>

        </div>

        {/* Right Side */}

        <div className="p-12 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-3 text-slate-500">
            {subtitle}
          </p>

          <div className="mt-10">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;