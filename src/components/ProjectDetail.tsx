import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Project: {slug?.replace("-", " ")}</h1>
      <p>Details about {slug}...</p>
    </div>
  );
};

export default ProjectDetail;
