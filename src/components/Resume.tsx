import React from "react";
import ResumeContent from "../markdown/resume.mdx";
// import * as fs from "fs";

// const resumeMarkdown = fs.readFileSync("../markdown/resume.mdx");

const Resume = () => {
  return (
    <div className="page-text fade-in-text">
      <ResumeContent />
    </div>
  );
};

export default Resume;
