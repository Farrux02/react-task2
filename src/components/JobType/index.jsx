import React from "react";
import "./jobType.css";

const JobType = ({ jobTypes, deleteJobType }) => {
  return (
    <section className="section job-type-section">
      <div className="div-heading">
        <h1>Job Type</h1>
      </div>
      <div className="form-wrapper__content">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {jobTypes?.map((jobType, index) => (
              <tr key={jobType?.id}>
                <th>{++index}</th>
                <th>{jobType?.label}</th>
                <th className="job-del">
                  <button
                    className="del-btn"
                    onClick={() => deleteJobType(jobType?.id)}
                  ></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default JobType;
