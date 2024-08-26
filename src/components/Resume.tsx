import React from "react";
import ResumeContent from "../markdown/resume.mdx";
import * as fs from "fs";

const resumeMarkdown = fs.readFileSync("../markdown/resume.mdx");

const Resume = () => {
  return (
    <div>
      <h1>Resume Page</h1>
      {/* <ResumeContent /> */}

      <pre>{resumeMarkdown}</pre>
    </div>
  );
};

export default Resume;
