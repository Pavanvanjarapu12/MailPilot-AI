function RecentCampaigns() {
  const campaigns = [
    {
      name: "Frontend Internship",
      status: "Completed",
      emails: 120,
      date: "08 Jul 2026",
    },
    {
      name: "React Developer",
      status: "Running",
      emails: 80,
      date: "09 Jul 2026",
    },
    {
      name: "Referral Request",
      status: "Completed",
      emails: 45,
      date: "10 Jul 2026",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Campaigns
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="pb-3">Campaign</th>

            <th>Status</th>

            <th>Emails</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {campaigns.map((campaign, index) => (

            <tr
              key={index}
              className="border-b hover:bg-slate-50"
            >

              <td className="py-4">
                {campaign.name}
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    campaign.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {campaign.status}
                </span>
              </td>

              <td>{campaign.emails}</td>

              <td>{campaign.date}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentCampaigns;