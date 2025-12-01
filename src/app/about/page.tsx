import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import IconPill from "@/components/IconPill";
import CentennialLogo from "@/components/CentennialLogo";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Final-year Software Engineering Technology – AI student at Centennial College. I build reliable, user-focused software across AI, full-stack, and QA.",
};

const KEY_COURSES = [
  "Programming (Java and C#)",
  "Web Application Development",
  "Client-Side Web Development",
  "Unix/Linux Operating Systems",
  "Networking for Software Developers",
  "Introduction to Database Concepts",
  "Advanced Database Concepts",
  "Data Structures & Algorithms",
  "Software Testing & Quality",
  "Mobile Apps Development",
  "Supervised Learning",
  "Neural Networks",
  "Cloud Machine Learning",
  "Deep Learning",
  "Big Data Tools – Machine Learning",
  "Natural Language & Recommender Systems",
  "Introduction to AI",
  "IT Project Management", 
  "Business & Entrepreneurship",
  "AI Capstone Project",
];

/**
 * Map a skill label → icon path.
 * If an entry is missing here, IconPill will just render a text-only pill.
 */
const ICONS: Record<string, string> = {
  // Programming & Languages
  Python: "/icons/python.png",
  Java: "/icons/java.png",
  "C#": "/icons/csharp.png",
  JavaScript: "/icons/javascript.png",
  TypeScript: "/icons/typescript.png",
  SQL: "/icons/sql.png",
  Bash: "/icons/bash.png",
  Kotlin: "/icons/kotlin.png",

  // Web & Mobile
  React: "/icons/react.png",
  AngularJS: "/icons/angularjs.png",
  "Node.js": "/icons/nodejs.png",
  Express: "/icons/express.png",
  "HTML/CSS": "/icons/htmlcss.png",
  Bootstrap: "/icons/bootstrap.png",
  "REST APIs": "/icons/restapi.png",
  "Android (Kotlin)": "/icons/android.png",

  // Databases & Big Data
  "SQL Developer": "/icons/sqldev.png",
  "PL/SQL": "/icons/plsql.png",
  PostgreSQL: "/icons/postgre.png",
  MongoDB: "/icons/mongodb.png",
  "Schema Design": "/icons/schema.png",
  "Query Tuning": "/icons/query.png",
  "Data Modeling": "/icons/datamodeling.png",

    // AI & Data Science
  "Machine Learning": "/icons/ml.png",
  "Supervised Learning": "/icons/supervised.png",
  "Unsupervised Learning": "/icons/unsupervised.png",
  "Reinforcement Learning": "/icons/reinforcement.png",
  "Neural Networks": "/icons/nn.png",
  "Deep Learning": "/icons/dl.png",
  NLP: "/icons/nlp.png",
  "Cloud Machine Learning": "/icons/cloudml.png",
  TensorFlow: "/icons/tensorflow.png",
  PyTorch: "/icons/pytorch.png",
  "Scikit-learn": "/icons/sci-kit.png",
  Keras: "/icons/keras.png",
  pandas: "/icons/pandas.png",
  NumPy: "/icons/numpy.png",
  "Apache Spark": "/icons/spark.png",
  Matplotlib: "/icons/matplotlib.png",

  // QA & Testing
  "Automation Testing": "/icons/automation.png",
  "Manual Testing": "/icons/manual.png",
  "Unit Testing": "/icons/unit.png",
  "Integration Testing": "/icons/integration.png",
  Selenium: "/icons/selenium.png",
  PyTest: "/icons/pytest.png",
  JUnit: "/icons/junit.png",
  BrowserStack: "/icons/browserstack.png",

  // Cloud, Tools & Practices
  AWS: "/icons/aws.png",
  Azure: "/icons/azure.png",
  "Azure DevOps": "/icons/azuredev.png",
  "GitHub Actions": "/icons/githubactions.png",
  "CI/CD": "/icons/cicd.png",
  "Docker": "/icons/docker.png",
  "Git/GitHub": "/icons/git.png",
  Jupyter: "/icons/jupyter.png",
  "VS Code": "/icons/vscode.png",
  "Visual Studio": "/icons/vs.png",
  IntelliJ: "/icons/intellij.png",
  Postman: "/icons/postman.png",
  Jira: "/icons/jira.png",
  SharePoint: "/icons/sharepoint.png",
  Figma: "/icons/figma.png",
  Balsamiq: "/icons/balsamiq.png",
  "Virtual Machines": "/icons/virtual.png",
  "Linux/Unix": "/icons/linux.png",
  Windows: "/icons/windows.png",
  "Agile/Scrum": "/icons/agile.png",
  "Code Reviews": "/icons/codereview.png",
};

const SKILLS: Record<string, string[]> = {
  "Programming & Languages": [
    "Python",
    "Java",
    "C#",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Bash",
    "Kotlin", 
  ],
  "Web & Mobile App Development": [
    "React",
    "AngularJS",
    "Node.js",
    "Express",
    "HTML/CSS",
    "Bootstrap",
    "REST APIs",
    "Android (Kotlin)",
  ],
    "Databases & Big Data": [
    "SQL Developer",
    "PostgreSQL",
    "MongoDB",
    "PL/SQL",
    "Schema Design",
    "Query Tuning",
    "Data Modeling",
  ],
  "AI & Data Science": [
    "Machine Learning",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "Neural Networks",
    "Deep Learning",
    "NLP",
    "Cloud Machine Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "pandas",
    "NumPy",
    "Apache Spark",
    "Matplotlib",
  ],
  "QA & Testing": [
    "Automation Testing",
    "Manual Testing",
    "Unit Testing",
    "Integration Testing",
    "Selenium",
    "PyTest",
    "JUnit",
    "BrowserStack",
  ],
  "Cloud, Tools & Practices": [
    "AWS",
    "Azure",
    "Azure DevOps",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Git/GitHub",
    "Jupyter",
    "VS Code",
    "Visual Studio",
    "IntelliJ",
    "Postman",
    "Jira",
    "SharePoint",
    "Figma",
    "Balsamiq",
    "Virtual Machines",
    "Linux/Unix",
    "Windows",
    "Agile/Scrum",
    "Code Reviews",
  ],
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <Reveal>
        <header className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24">
              <Image
                src="/images/avatar/avatar.jpg"
                alt="Profile picture"
                width={96}
                height={96}
                className="h-full w-full rounded-3xl object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-neutral-200 dark:ring-neutral-800" />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
              <p className="text-neutral-600 dark:text-neutral-300">
                Software Developer • AI Specialist • QA Engineer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.linkedin.com/in/adilet-masalbekov/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/adilet0212"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
            >
              GitHub
            </Link>
            <Link
              href="/resume/Adilet-Masalbekov-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
            >
              Download Resume
            </Link>
          </div>

        </header>
      </Reveal>

      {/* Intro */}
      <Reveal delay={0.05}>
        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
          <article className="glass rounded-2xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800">
            <SectionHeading>Hi — I’m Adilet</SectionHeading>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              I’m in my final year of the Software Engineering Technology – AI program at Centennial College, where I’ve learned a lot more than just technical skills. 
              These past years have helped me grow as a person — meeting new people, working in diverse teams, and learning how to communicate, collaborate, and build real connections. 
              It shaped not only my career direction but also the way I approach problems and people.
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              I also completed multiple co-op terms with the Ontario Government (MCCSS) and the Department of National Defence of Canada, which gave me real hands-on experience in the tech field. 
              That’s where I learned what it actually means to make an impact — improving systems that real users rely on, supporting teams, building tools, fixing issues, and seeing how even small improvements can make someone’s day easier.
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              I always try to contribute to the well-being of others, whether through volunteering, helping classmates, or building something useful.
              Knowing that my work has a positive impact means a lot to me. 
              I’m excited to keep learning and creating things that genuinely help people as I grow in my career.
            </p>
          </article>

          {/* Education */}
          <aside className="glass rounded-2xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800">
            <SectionHeading>Education</SectionHeading>

            <div className="mt-3 flex items-start gap-3 text-sm">
              {/* Client-side logo (auto-hides if missing) */}
              <CentennialLogo className="mt-0.5 shrink-0 select-none" />

              <div className="flex-1">
                <div className="font-medium">Centennial College</div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Software Engineering Technology – Artificial Intelligence (Advanced Diploma)
                </div>
                <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                  Jan 2023 – Dec 2025
                </div>

                <div className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="font-semibold uppercase tracking-wide text-[0.7rem] text-neutral-500 dark:text-neutral-400">
                    Key courses
                  </div>

                  <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2 list-none p-0 m-0">
                    {KEY_COURSES.map((course) => (
                      <li key={course} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </aside>
        </section>
      </Reveal>

      {/* Skills — single card with icon pills */}
      <Reveal delay={0.1}>
        <section className="mt-8 glass rounded-2xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800">
          <SectionHeading>Skills</SectionHeading>

          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group} className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((label) => (
                    <IconPill key={label} label={label} icon={ICONS[label]} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Call to action */}
      <Reveal delay={0.12}>
        <section className="mt-8 glass rounded-2xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800">
          <SectionHeading>Get in touch</SectionHeading>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            I’m always happy to connect, discuss opportunities, or simply chat and share ideas — feel free to reach out anytime.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
            >
              Contact form
            </Link>
            <Link
              href="mailto:amasalbekov12@gmail.com?subject=Contact%20from%20Portfolio"
              className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
            >
              Email me
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
