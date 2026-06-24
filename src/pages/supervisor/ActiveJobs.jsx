import React from "react";
import {
  User,
  Briefcase,
  MapPin,
  Clock,
  Navigation,
} from "lucide-react";

const jobs = [
  {
    id: "JOB-001",
    passenger: "Rahul Sharma",
    porter: "Ramesh Kumar",
    service: "Luggage",
    platform: "Platform 2",
    eta: "3 min",
    progress: 75,
    status: "In Progress",
  },
  {
    id: "JOB-002",
    passenger: "Priya Patel",
    porter: "Suresh Patel",
    service: "Wheelchair",
    platform: "Platform 5",
    eta: "5 min",
    progress: 45,
    status: "Assigned",
  },
  {
    id: "JOB-003",
    passenger: "Amit Singh",
    porter: "Mahesh Yadav",
    service: "Combined",
    platform: "Platform 1",
    eta: "2 min",
    progress: 90,
    status: "Near Passenger",
  },
];

export default function ActiveJobs() {
  return (
    <div>


      {/* Job Cards */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {jobs.map((job) => (

          <div
            key={job.id}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
          >

            {/* Top */}

            <div className="flex justify-between items-start mb-5">

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  {job.id}
                </h2>

                <p className="text-slate-500 text-sm">
                  {job.service} Service
                </p>

              </div>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {job.status}
              </span>

            </div>

            {/* Passenger */}

            <div className="flex items-center gap-3 mb-3">

              <User
                size={18}
                className="text-blue-700"
              />

              <span>
                Passenger:
                <strong className="ml-1">
                  {job.passenger}
                </strong>
              </span>

            </div>

            {/* Porter */}

            <div className="flex items-center gap-3 mb-3">

              <Briefcase
                size={18}
                className="text-blue-700"
              />

              <span>
                Porter:
                <strong className="ml-1">
                  {job.porter}
                </strong>
              </span>

            </div>

            {/* Platform */}

            <div className="flex items-center gap-3 mb-3">

              <MapPin
                size={18}
                className="text-blue-700"
              />

              <span>{job.platform}</span>

            </div>

            {/* ETA */}

            <div className="flex items-center gap-3 mb-5">

              <Clock
                size={18}
                className="text-blue-700"
              />

              <span>
                Estimated Arrival: {job.eta}
              </span>

            </div>

            {/* Progress */}

            <div className="flex justify-between text-sm mb-2">

              <span className="text-slate-500">
                Progress
              </span>

              <span className="font-semibold">
                {job.progress}%
              </span>

            </div>

            <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-6">

              <div
                className="h-full bg-blue-700 rounded-full"
                style={{
                  width: `${job.progress}%`,
                }}
              />

            </div>

            {/* Buttons */}

            <div className="flex gap-3">

              <button className="flex-1 bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition">

                Track Job

              </button>

              <button className="flex items-center justify-center gap-2 flex-1 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition">

                <Navigation size={18} />

                Complete

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}