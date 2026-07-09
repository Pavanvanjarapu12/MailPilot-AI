import {
  Users,
  Mail,
  Send,
  BarChart3,
} from "lucide-react";

function StatsCards() {
  const stats = [
    {
      title: "Total Contacts",
      value: "250",
      icon: <Users size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Emails Sent",
      value: "1,240",
      icon: <Mail size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Campaigns",
      value: "15",
      icon: <Send size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "Open Rate",
      value: "92%",
      icon: <BarChart3 size={28} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
        >
          <div>
            <p className="text-slate-500 text-sm">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>

          <div
            className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
          >
            {item.icon}
          </div>
        </div>
      ))}

    </div>
  );
}

export default StatsCards;