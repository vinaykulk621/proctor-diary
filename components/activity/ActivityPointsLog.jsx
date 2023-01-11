import { useSession } from "next-auth/react";

async function handler(req) {
  try {
    const res = await fetch("http://localhost:3000/api/getAllActivity", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        email: req.body,
      }),
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}
export default function ActivityPointsLog({}) {
  const { data: session } = useSession();
  const activity = use(handler(session.user.email));
  return (
    <table className="table-fixed w-auto ml-20 mr-20">
      <thead className="border-b border-slate-600">
        <tr>
          <th className="border-r border-slate-600 p-2">Activity-Name</th>
          <th className="border-r border-slate-600 p-2">Location</th>
          <th className="border-r border-slate-600 p-2">Date</th>
          <th className="border-r border-slate-600 p-2">Duration(Hrs)</th>
          <th className="border-r border-slate-600 p-2">Activity-Points</th>
          <th className="border-r-0 border-slate-600 p-2">Status</th>
        </tr>
      </thead>
      <tbody className="text-justify">
        {activity.map((e, i) => {
          return (
            <tr key={i}>
              <td className="border-r border-slate-600 p-2">
                {e.activityName}
              </td>
              <td className="border-r border-slate-600 p-2">{e.location}</td>
              <td className="border-r border-slate-600 p-2">{e.date}</td>
              <td className="border-r border-slate-600 p-2">{e.duration}</td>
              <td className="border-r border-slate-600 p-2">{e.points}</td>
              {e.status === "pending" ? (
                <td className="border-r-0 border-slate-600 p-2 text-red-600">
                  {e.status}
                </td>
              ) : (
                <td className="border-r-0 border-slate-600 p-2 text-green-600">
                  {e.status}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
