'use client'
import LanguageSwitcher from "@/app/components/common/LanguageSwitcher";
import { Badge, Carousel, Popover } from "flowbite-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { type Locale } from "@/i18n.config";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IProjectCard } from "@/app/components/desktop/ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const handleOpenLink = (url?: string) => {
  if(!!url) window.open(url, "_blank")
}

export default function Page({params}:{params: any}) {
  const t = useTranslations("Index");
  const locale = useLocale() as Locale;
  const dataDemo = [
    {
        id: 1,
        projectName:"Enterprise Resource Planning",
        imageURL:"/erp.png",
        description:t("projectDescription1"),
        roleInProject:t("roleInProject1"),
        technologiesUsed:[{value:"React", label:"React"},{value:"Redux", label:"Redux"},{value:"Bootstrap", label:"Bootstrap"}],
    },
    {
        id: 2,
        projectName:"Work follow management",
        imageURL:"/workfollowmanagement.png",
        description:t("projectDescription2"),
        roleInProject:t("roleInProject2"),
        demoURL:"https://workflowmanagementapp.vercel.app/",
        descriptionImages:["/work-follow-mana/slideImage1.png","/work-follow-mana/slideImage2.png","/work-follow-mana/slideImage3.png","/work-follow-mana/slideImage4.png"],
        githubURL:"https://github.com/TrinhDuc997/workflow-management-web-app",
        technologiesUsed:[{value:"React", label:"React"},{value:"MaterialUI", label:"MaterialUI"},{value:"Hooks", label:"Hooks"},{value:"Node.js", label:"Node.js"},{value:"Socket.io", label:"Socket.io"},{value:"MongoDB", label:"MongoDB"}],
    },
    {
        id: 3,
        projectName:"Project bee learning",
        imageURL:"/beelearning.png",
        description:t("projectDescription3"),
        roleInProject:t("roleInProject3"),
        demoURL:"https://beelearning.vercel.app/learning/vocabulary/subjects/",
        githubURL:"https://github.com/TrinhDuc997/bee-learn-web-app",
        descriptionImages:["/bee-learning/slideImage1.png","/bee-learning/slideImage2.png","/bee-learning/slideImage3.png","/bee-learning/slideImage4.png","/bee-learning/slideImage5.png"],
        technologiesUsed:[{value:"Next.js", label:"Next.js"},{value:"MaterialUI", label:"MaterialUI"},{value:"Hooks", label:"Hooks"},{value:"Node.js", label:"Node.js"},{value:"Typescript", label:"Typescript"},{value:"MongoDB", label:"MongoDB"}],
    },
    {
        id: 4,
        projectName:"Project personal website",
        imageURL:"/personallandingpage.png",
        description:t("projectDescription4"),
        githubURL:"https://github.com/TrinhDuc997/portfolio-website",
        descriptionImages:["/web-portfolio/slideImage2.png","/web-portfolio/slideImage3.png","/web-portfolio/slideImage1.png","/web-portfolio/slideImage4.png"],
        technologiesUsed:[{value:"Figma", label:"Figma"},{value:"Next.js", label:"Next.js"},{value:"Typescript", label:"Typescript"},{value:"Tailwindcss", label:"Tailwindcss"}],
    },
  ];
  const project = dataDemo.find(i => i.id === parseInt(params.id)) as IProjectCard;
  const {
    projectName,
    description,
    roleInProject,
    imageURL,
    descriptionImages = [],
    technologiesUsed = [],
    githubURL,
    demoURL,
  } = project || {};

  return (
    <div className="w-full bg-neutral-900 scroll-smooth flex flex-col items-center">
      <header className="flex-1 flex flex-row items-start justify-between w-full max-w-screen-2xl gap-[20px] text-left text-29xl text-neutral-500 font-heading-h4 sticky top-0 z-20 bg-neutral-900">
        <div className="cursor-pointer flex flex-col items-center justify-center py-5 px-2.5 z-20">
          <a href="/">
            <h1 className="m-0 relative text-5xl bg-gradient-to-r from-gradient-primary-from to-gradient-primary-to leading-[125%] font-bold font-inherit text-transparent !bg-clip-text bg-Primary-Linear-to-right [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[78px] whitespace-nowrap">
              DT.
            </h1>
          </a>
        </div>
        <div className="flex flex-row items-center justify-center py-8 px-0 box-border gap-8 lg:gap-12 max-w-full text-base">
          <Popover
            aria-labelledby="default-popover"
            className="bg-neutral-700 rounded-2xl"
            theme={{
              arrow: {
                base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700",
              },
            }}
            content={
              <div className="w-64 text-sm text-neutral-100 bg-neutral-700 border-none">
                <div className="px-3 py-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                      <MdMailOutline size={24} /> trinhxuanduc997@gmail.com
                    </div>
                    <div className="flex flex-row gap-2">
                      <FiPhone size={24} /> +84967 084 484
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <button
              tabIndex={0}
              className="py-2 px-4 rounded-lg bg-primary text-label-16px-regular text-neutral-100 hover:opacity-85"
            >
              {t("contactMe")}
            </button>
          </Popover>
          <LanguageSwitcher locale={locale} />
        </div>
      </header>
      <section className="max-w-screen-2xl p-4 md:p-6 flex flex-col md:flex-row flex-auto gap-2 md:gap-4 sticky top-[100px]">
        <div className="w-2/3 md:w-1/2 md:h-[500px]">
          <img
            className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl md:h-[500px]"
            // loading="lazy"
            alt=""
            src={imageURL}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4 py-0 md:py-4 relative">
          <h1 className="bg-gradient-to-r from-gradient-primary-from to-gradient-primary-to text-transparent !bg-clip-text text-heading-h2 md:text-7xl md:leading-[125%] max-md:-mt-[20%] max-md:text-right md:mt-4 md:ml-[-100px] whitespace-pre-line">
            {projectName?.split(' ').map((i, index) => {
              let name = i;
              if((index + 1)%2 === 0){
                name += " \n" 
              }
              return name
            }).join(" ")}
          </h1>
          <div className="max-w-lg flex flex-col gap-4 md:pl-6 lg:pl-20">
            <p className="text-neutral-300 text-body-14px-regular md:text-body-16px-regular">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {
                technologiesUsed.map((item, index) => {
                  return <Badge key={index} size={"sm"} className="bg-transparent text-neutral-300 border-solid border-b-neutral-300 border-[1px]">
                    {item.label}
                  </Badge>
                })
              }
              
            </div>
            <div className="flex flex-row gap-4">
              <button onClick={() => handleOpenLink(githubURL)} disabled={!githubURL} className="flex flex-row gap-2 text-neutral-100 text-label-16px-bold hover:text-neutral-300 disabled:text-neutral-500">
                {t("view")} Github <IoArrowForwardCircleOutline size={24} />
              </button>
              <button onClick={() => handleOpenLink(demoURL)} disabled={!demoURL} className="flex flex-row gap-2 text-neutral-100 text-label-16px-bold hover:text-neutral-300 disabled:text-neutral-500">
                Demo <IoArrowForwardCircleOutline size={24} />
              </button>
            </div>
          </div>
          <div className="w-80 h-32 absolute top-1/4 -right-[50%] origin-top-left rotate-[135deg] opacity-30 bg-orange-600 blur-3xl scale-x-[1.6] scale-y-[1.2] -z-[1]" />
        </div>
      </section>
      <div className="w-full max-w-screen-2xl flex flex-col gap-6 rounded-t-3xl bg-neutral-800 z-10 p-6">
        {roleInProject && <div className="flex flex-col gap-4">
          <h1 className="text-heading-h3 text-neutral-300">
            {t("headingRole")}
          </h1>
          <p className="text-body-16px-regular text-neutral-500 whitespace-pre-line">
            {roleInProject}
          </p>
        </div>}
        <div className="flex flex-col gap-4 pt-0">
          <h1 className="text-heading-h3 text-neutral-300">
            {t("headingImageAboutProject")}
          </h1>
          <div className="h-[250px] md:h-[450px] lg:h-[600px] xl:h-[650px] border-2 rounded-2xl border-solid overflow-hidden border-neutral-700">
            {
              descriptionImages.length === 0 ? <h1 className="text-heading-h4 text-neutral-500 text-center">{t("noticePolicyImages")}</h1>
              :<Carousel slideInterval={10000} leftControl={<div className="p-2 rounded-full border-2 border-neutral-500 hover:bg-neutral-400"><FaChevronLeft className="text-neutral-500" /></div>} rightControl={<div className="p-2 rounded-full border-2 border-neutral-500 hover:bg-neutral-400"><FaChevronRight className="text-neutral-500" /></div>}>
              {
                descriptionImages.map((item, index) => {
                  return <img key={index} src={item}/>
                })
              }
            </Carousel>
            }
          
        </div>
          {/* <div className="grid grid-cols-4 gap-4 min-h-[1500px]">
            <div className="col-span-4 bg-neutral-500 rounded-3xl">
              <img
                className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
                loading="lazy"
                alt=""
                src={descriptionImages[0]}
              />
            </div>
            <div className="col-span-4 md:col-span-2 bg-neutral-500 rounded-3xl">
              <img
                className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
                loading="lazy"
                alt=""
                src={descriptionImages[1]}
              />
            </div>
            <div className="col-span-4 md:col-span-2 md:row-span-2 bg-neutral-500 rounded-3xl">
            <img
              className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
              loading="lazy"
              alt=""
              src={descriptionImages[2]}
            />
            </div>
            
            <div className="col-span-4 md:col-span-2 bg-neutral-500 rounded-3xl">
              <img
                className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
                loading="lazy"
                alt=""
                src={descriptionImages[3]}
              />
            </div>
            <div className="col-span-4 md:col-span-2 md:row-span-2 bg-neutral-500 rounded-3xl">
              <img
                className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
                loading="lazy"
                alt=""
                src={descriptionImages[4]}
              />
            </div>
            <div className="col-span-4 md:col-span-2 max-md:hidden bg-neutral-500 rounded-3xl">
              <img
                className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
                loading="lazy"
                alt=""
                src={descriptionImages[5]}
              />
            </div>
            <div className="col-span-4 md:col-span-1 max-md:hidden bg-neutral-500 rounded-3xl">
              <img
                className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
                loading="lazy"
                alt=""
                src={descriptionImages[6]}
              />
            </div>
            <div className="col-span-4 md:col-span-1 max-md:hidden bg-neutral-500 rounded-3xl">
              <img
                className="flex-1 max-w-full overflow-hidden object-cover rounded-3xl h-[250] md:h-[500px]"
                loading="lazy"
                alt=""
                src={descriptionImages[7]}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
