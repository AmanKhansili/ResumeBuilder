import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
        Professtional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
    </div>
  );
};

export default ExperiencePreview;
