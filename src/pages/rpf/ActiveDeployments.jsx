import React from "react";

const deployments = [
  {
    id: "RPF-101",
    officer: "Inspector Rajesh",
    station: "Ahmedabad Junction",
    incident: "Medical Emergency",
    eta: "3 min",
    status: "On Route",
  },
  {
    id: "RPF-102",
    officer: "SI Patel",
    station: "Sabarmati",
    incident: "Security Alert",
    eta: "5 min",
    status: "Dispatched",
  },
];

export default function ActiveDeployments() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h1 className="text-2xl font-bold text-[#0B2E63] mb-2">
        Active Deployments
      </h1>

      <p className="text-slate-500 mb-6">
        Currently deployed RPF teams.
      </p>

      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">Officer</th>
            <th className="p-4 text-left">Station</th>
            <th className="p-4 text-left">Incident</th>
            <th className="p-4 text-left">ETA</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {deployments.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-4">{item.officer}</td>
              <td className="p-4">{item.station}</td>
              <td className="p-4">{item.incident}</td>
              <td className="p-4">{item.eta}</td>
              <td className="p-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}