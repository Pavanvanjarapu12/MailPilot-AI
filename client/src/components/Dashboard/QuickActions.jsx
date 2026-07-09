import {
  Sparkles,
  Upload,
  Plus,
  Users,
} from "lucide-react";

function QuickActions() {
  const actions = [
    {
      title: "Generate AI Email",
      icon: <Sparkles size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Upload CSV",
      icon: <Upload size={28} />,
      color: "bg-green-600",
    },
    {
      title: "New Campaign",
      icon: <Plus size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "Add Contact",
      icon: <Users size={28} />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((action, index) => (

          <button
            key={index}
            className={`${action.color} text-white rounded-xl p-6 hover:scale-105 transition-all shadow-lg`}
          >

            <div className="flex justify-center mb-4">
              {action.icon}
            </div>

            <h3 className="font-semibold">
              {action.title}
            </h3>

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;