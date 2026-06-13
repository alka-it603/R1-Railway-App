import React from "react";

const jobs = [
  {
    id: "JOB-901",
    porter: "Rajesh Kumar",
    location: "Platform 4",
    progress: 65,
  },
  {
    id: "JOB-902",
    porter: "Manish Verma",
    location: "Platform 1",
    progress: 40,
  },
];

export default function ActiveJobsPreview() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-lg font-semibold">
          Active Jobs Preview
        </h2>

        <button className="text-blue-700 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {jobs.map((job) => (

          <div
            key={job.id}
            className="border rounded-xl p-4"
          >

            <div className="flex justify-between mb-2">

              <div>

                <h3 className="font-semibold">
                  {job.porter}
                </h3>

                <p className="text-sm text-slate-500">
                  {job.location}
                </p>

              </div>

              <span className="text-sm font-medium">
                {job.progress}%
              </span>

            </div>

            <div className="w-full bg-slate-200 rounded-full h-2">

              <div
                className="bg-blue-700 h-2 rounded-full"
                style={{
                  width: `${job.progress}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}