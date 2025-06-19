export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ``
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p><strong>Client:</strong> [Client Name]</p>
      <p><strong>Prepared by:</strong> [Your Company]</p>
      <h2>Project Overview</h2>
      <p>This proposal outlines the development of a software solution to address [brief description of problem or goal].</p>
      <h2>Scope of Work</h2>
      <ul>
        <li>Requirement Analysis</li>
        <li>UI/UX Design</li>
        <li>Frontend & Backend Development</li>
        <li>Testing and QA</li>
        <li>Deployment & Maintenance</li>
      </ul>
      <h2>Timeline</h2>
      <p>Estimated completion time: [Duration]</p>
      <h2>Cost</h2>
      <p>Total estimated cost: [Cost]</p>
    `
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p><strong>Project Title:</strong> [Title]</p>
      <p><strong>Proposed by:</strong> [Your Name/Team]</p>
      <h2>Introduction</h2>
      <p>[Brief background of the project]</p>
      <h2>Objectives</h2>
      <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
        <li>Objective 3</li>
      </ul>
      <h2>Methodology</h2>
      <p>[Explain how the project will be executed]</p>
      <h2>Expected Outcomes</h2>
      <p>[What you aim to achieve]</p>
    `
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Company Name]</p>
      <p>[Address Line 1]</p>
      <p>[Address Line 2]</p>
      <br />
      <p>[Date]</p>
      <br />
      <p>[Recipient Name]</p>
      <p>[Company Name]</p>
      <p>[Address]</p>
      <br />
      <p>Dear [Recipient Name],</p>
      <p>I am writing to [reason for the letter].</p>
      <p>[Body of the letter]</p>
      <p>Thank you for your attention to this matter.</p>
      <br />
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State ZIP Code]</p>
      <p>[Your Email]</p>
      <p>[Today’s Date]</p>
      <br />
      <p>[Hiring Manager’s Name]</p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <br />
      <p>Dear [Hiring Manager’s Name],</p>
      <p>I am writing to express my interest in the [Job Title] position at [Company Name].</p>
      <p>[Brief paragraph about your qualifications]</p>
      <p>[Paragraph about your skills and how they match the job]</p>
      <p>Thank you for considering my application. I look forward to the opportunity to contribute to your team.</p>
      <br />
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>[Your Address]</p>
      <p>[City, State, ZIP]</p>
      <p>[Date]</p>
      <br />
      <p>Dear [Recipient's Name],</p>
      <p>I hope this letter finds you well. I am writing to [state the purpose of the letter].</p>
      <p>[Main content]</p>
      <p>Looking forward to your response.</p>
      <br />
      <p>Warm regards,</p>
      <p>[Your Name]</p>
    `
  }
];
