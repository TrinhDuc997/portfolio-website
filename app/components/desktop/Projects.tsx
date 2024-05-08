import React from "react";
import ProjectCard, { IProjectCard } from "./ProjectCard";
import { useTranslations } from "next-intl";

interface IProjects {
  projectData?: Array<IProjectCard>;
}

export default function Projects(props: IProjects) {
  const t = useTranslations('Index');

  const { projectData = [
    {
        id:1,
        projectName:"ERP",
        imageURL:"/erp.png",
        subTitle:t("subTitleProject1"),
        description:t("projectDescription1"),
        technologiesUsed:[{value:"React", label:"React"},{value:"Redux", label:"Redux"},{value:"Bootstrap", label:"Bootstrap"}],
    },
    {
        id:2,
        projectName:"Work follow management",
        imageURL:"/workfollowmanagement.png",
        subTitle:t("subTitleProject2"),
        description:t("projectDescription2"),
        demoURL:"https://workflowmanagementapp.vercel.app/",
        githubURL:"https://github.com/TrinhDuc997/workflow-management-web-app",
        technologiesUsed:[{value:"React", label:"React"},{value:"MaterialUI", label:"MaterialUI"},{value:"Hooks", label:"Hooks"},{value:"Node.js", label:"Node.js"},{value:"Socket.io", label:"Socket.io"},{value:"MongoDB", label:"MongoDB"}],
    },
    {
        id:3,
        projectName:"Beelearning",
        imageURL:"/beelearning.png",
        subTitle:t("subTitleProject2"),
        description:t("projectDescription3"),
        demoURL:"https://beelearning.vercel.app/learning/vocabulary/subjects/",
        githubURL:"https://github.com/TrinhDuc997/bee-learn-web-app",
        technologiesUsed:[{value:"Next.js", label:"Next.js"},{value:"MaterialUI", label:"MaterialUI"},{value:"Hooks", label:"Hooks"},{value:"Node.js", label:"Node.js"},{value:"Typescript", label:"Typescript"},{value:"MongoDB", label:"MongoDB"}],
    },
    {
        id:4,
        projectName:"Personal website",
        imageURL:"/personallandingpage.png",
        subTitle:t("subTitleProject2"),
        description:t("projectDescription4"),
        // demoURL,
        // githubURL,
        technologiesUsed:[{value:"Figma", label:"Figma"},{value:"Next.js", label:"Next.js"},{value:"Typescript", label:"Typescript"},{value:"Tailwindcss", label:"Tailwindcss"}],
    },
  ] } = props;
  return (
    <div id="projects" className="section w-full flex flex-col items-center justify-center gap-4 p-6 box-border max-w-screen-2xl">
      <h2 className="text-heading-h2 text-neutral-100">{t("projects")}</h2>
      <div className="w-full max-w-screen-xl overflow-x-auto flex flex-row items-start justify-start py-4 px-0 box-border gap-[16px]">
      {projectData.map((item, index) => {
        return (
          <ProjectCard
            key={index}
            index={index}
            id={item.id}
            projectName={item.projectName}
            imageURL={item.imageURL}
            subTitle={item.subTitle}
            description={item.description}
            technologiesUsed={item.technologiesUsed}
            demoURL={item.demoURL}
            githubURL={item.githubURL}
          />
        );
      })}
      </div>
      
    </div>
  );
}
