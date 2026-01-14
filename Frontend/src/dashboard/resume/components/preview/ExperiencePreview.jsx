import React from "react";

function ExperiencePreview({ resumeInfo }) {
  // Ensure resumeInfo and resumeInfo.experience exist before rendering
  if (!resumeInfo || !resumeInfo.experience || resumeInfo.experience.length === 0) {
    return <p>No experience data available.</p>;
  }

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor || '#000', // Default to black if no themeColor
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor || '#000', // Default to black if no themeColor
        }}
      />

      {resumeInfo.experience.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor || '#000', // Default to black if no themeColor
            }}
          >
            {experience?.title || "Position Title Not Provided"}
          </h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} To{" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate || "N/A"}
            </span>
          </h2>

          {/* Ensure workSummery is displayed correctly */}
          {experience?.workSummery ? (
            <div
              className="text-xs my-2"
              dangerouslySetInnerHTML={{ __html: experience.workSummery }}
            />
          ) : (
            <p>No work summary provided.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
