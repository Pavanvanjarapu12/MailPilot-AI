const testimonials = [
  {
    name: "Pavan Kumar",
    role: "Software Engineer",
    review:
      "MailPilot AI helped me generate professional referral emails in minutes.",
  },
  {
    name: "Sarah Johnson",
    role: "HR Recruiter",
    review:
      "The AI-generated emails are professional and save a lot of time.",
  },
  {
    name: "Alex Brown",
    role: "Job Seeker",
    review:
      "I used MailPilot AI for outreach and received multiple interview responses.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            What Our Users Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by students, professionals and recruiters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((user, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >

              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-5 text-gray-600 leading-8">
                "{user.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {user.role}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;