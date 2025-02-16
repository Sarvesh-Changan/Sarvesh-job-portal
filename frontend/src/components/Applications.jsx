import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAllApplicationErrors,
  deleteApplication,
  fetchEmployerApplications,
  resetApplicationSlice,
} from "../store/slices/applicationSlice";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Applications = () => {
  const { applications, loading, error, message } = useSelector(
    (state) => state.applications
  );
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetApplicationSlice());
    }
    dispatch(fetchEmployerApplications());
  }, [dispatch, error, message]);

  const handleDeleteApplication = (id) => {
    dispatch(deleteApplication(id));
  };

  // New handler for updating application status (for Employers)
  const handleStatusChange = (id, newStatus, currentStatus) => {
    // Only dispatch if the status has really changed.
    if (newStatus !== currentStatus) {
      dispatch(updateApplicationStatus({ id, newStatus }));
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : applications && applications.length <= 0 ? (
        <h1 className="text-center text-xl font-medium mt-8">
          You have no applications from job seekers.
        </h1>
      ) : (
        <div className="flex flex-col gap-8 w-full min-h-[400px]">
          <h3 className="text-[30px] font-semibold text-[#dfdf07]">
            Applications For Your Posted Jobs
          </h3>
          <div className="flex flex-col gap-8">
            {applications.map((element) => (
              <div
                key={element._id}
                className="bg-[#f5f5f5] p-6 text-[#111] font-medium text-[22px] rounded-[8px] transition duration-300 hover:bg-[rgba(133,133,124,0.19)]"
              >
                <p className="text-[16px] text-gray-500">
                  <span className="font-semibold text-[20px] text-[#111]">
                    Job Title:
                  </span>{" "}
                  {element.jobInfo.jobTitle}
                </p>
                <p className="text-[16px] text-gray-500">
                  <span className="font-semibold text-[20px] text-[#111]">
                    Applicant's Name:
                  </span>{" "}
                  {element.jobSeekerInfo.name}
                </p>
                <p className="text-[16px] text-gray-500">
                  <span className="font-semibold text-[20px] text-[#111]">
                    Applicant's Email:
                  </span>{" "}
                  {element.jobSeekerInfo.email}
                </p>
                <p className="text-[16px] text-gray-500">
                  <span className="font-semibold text-[20px] text-[#111]">
                    Applicant's Phone:
                  </span>{" "}
                  {element.jobSeekerInfo.phone}
                </p>
                <p className="text-[16px] text-gray-500">
                  <span className="font-semibold text-[20px] text-[#111]">
                    Applicant's Address:
                  </span>{" "}
                  {element.jobSeekerInfo.address}
                </p>
                <div className="text-[16px] text-gray-500">
                  <span className="font-semibold text-[20px] text-[#111]">
                    Applicant's Cover Letter:
                  </span>
                  <textarea
                    value={element.jobSeekerInfo.coverLetter}
                    rows={5}
                    disabled
                    className="bg-transparent text-[16px] mt-2 w-full resize-none"
                  ></textarea>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-5 justify-end mt-6">
                  {user && user.role === "Employer" && (
                    <button
                      onClick={() => handleDeleteApplication(element._id)}
                      className="border border-red-500 text-white bg-red-700 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
                    >
                      Delete Application
                    </button>
                  )}
                  <Link
                    to={element.jobSeekerInfo?.resume.url || "#"}
                    className="bg-[#dfdf08] text-[#111] font-medium py-2 px-5 rounded-md transition duration-300 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Applications;