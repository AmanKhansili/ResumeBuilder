import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume }) => {
  return (
    <Link to={"/dashboard/resume/" + resume.resumeId + "/edit"}>
      <div className="p-14 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-105 translate-all hover:shadow-md shadow-primary">
        <Notebook />
      </div>
      <h2 className="text-center m-1">{resume.title}</h2>
    </Link>
  );
};

export default ResumeCardItem;
