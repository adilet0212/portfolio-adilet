import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience in Quality Assurance Engineering, IT Service Desk and Community Service — including co-op roles at the Government of Ontario and Department of National Defence.",
};

type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  logoSrc: string;
  logoAlt: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    company:
      "Ministry of Children, Community and Social Services – Government of Ontario",
    role: "Quality Assurance Engineer (Co-op)",
    date: "Jan 2024 – Apr 2024; Sep 2024 – Dec 2024",
    location: "Toronto, ON",
    logoSrc: "/images/logos/ontario.jpeg",
    logoAlt: "Government of Ontario logo",
    highlights: [
      "Developed and executed 100+ automated and manual test cases for the MyBenefits platform, improving reliability and accessibility for thousands of OW/ODSP users.",
      "Built test user accounts and datasets to support developers and QA teams, significantly improving testing speed and coverage.",
      "Identified and documented critical software defects, contributing to a high bug-resolution rate within each sprint.",
      "Led UI development for an AI-powered ticket triage tool using Figma, Balsamiq and Tkinter, helping reduce triage and response times by 30%.",
      "Wrote automated regression scripts using Java and Selenium, and managed test cycles through Azure DevOps, improving deployment consistency.",
      "Collaborated with developers, testers and business analysts to resolve issues, enhance accessibility and maintain clear documentation under Agile workflows.",
    ],
  },
  {
    company: "Department of National Defence – Government of Canada",
    role: "IT Service Desk Technician (Co-op)",
    date: "Jun 2025 – Aug 2025",
    location: "Toronto, ON",
    logoSrc: "/images/logos/dnd.png",
    logoAlt: "Department of National Defence logo",
    highlights: [
      "Responded to technical support tickets from military and civilian users, ensuring accurate, timely and secure resolutions.",
      "Managed Active Directory tasks including account creation, updates, permissions and departmental transfers.",
      "Handled the Service Desk mailbox by triaging incidents, updating tickets and coordinating follow-ups on urgent service requests.",
      "Used SharePoint-based SOPs to complete tasks consistently and maintain compliance with departmental standards.",
      "Reviewed and validated internal technical documentation for account management procedures, identifying errors and suggesting improvements to ensure accuracy and compliance with Service Desk standards.",
    ],
  },
  {
    company: "Interact Club of Bishkek - Rotary International",
    role: "Volunteer",
    date: "Aug 2021 – May 2022",
    location: "Bishkek, Kyrgyzstan",
    logoSrc: "/images/logos/interact.png",
    logoAlt: "Interact Club of Bishkek logo",
    highlights: [
      "Provided IT support and basic software troubleshooting for volunteers and team members.",
      "Led fundraising projects and helped organize 10+ community events, increasing outreach impact by 50%.",
      "Assisted with food bank and shelter services supporting unhoused individuals and families.",
      "Mentored new volunteers and contributed to improving coordination during community outreach activities.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          A summary of my professional and volunteer experiences, focusing on QA
          Engineering and IT Service Desk:
        </p>
      </Reveal>

      <div className="mt-10 space-y-10">
        {experiences.map((exp, idx) => (
          <Reveal key={exp.company} delay={0.04 * idx}>
            <section className="glass rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="mt-0.5 shrink-0 rounded-lg border border-neutral-200 p-1 dark:border-neutral-800">
                  <Image
                    src={exp.logoSrc}
                    alt={exp.logoAlt}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-md object-contain"
                  />
                </div>

                {/* Text block */}
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-semibold">{exp.role}</h2>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {exp.date}
                    </span>
                  </div>

                  <div className="mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {exp.company}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {exp.location}
                  </div>

                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
