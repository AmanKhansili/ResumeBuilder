import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import dummy from "@/data/dummy";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const EditResume = () => {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState(dummy);
  useEffect(() => {
    // console.log(params.resumeId);\
    setResumeInfo(dummy);
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section */}
        <FormSection />
        {/* Preview Section */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
