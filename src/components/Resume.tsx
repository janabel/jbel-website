import React from "react";
import ResumeContent from "../markdown/resume.mdx";
// import * as fs from "fs";

// const resumeMarkdown = fs.readFileSync("../markdown/resume.mdx");

const Resume = () => {
  return (
    <div>
      <div className="page-text fade-in-text">
        <p>
          A 2-page resume can be found{" "}
          <a
            href="/website_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <ResumeContent />
      </div>
    </div>
  );
};

export default Resume;
