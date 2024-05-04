import React from 'react'
import Card from './Card';
import { useTranslations } from "next-intl";

interface skill{
    logo: string;
    name: string;
    description: string;
}

interface IMySkills{
    skills?: Array<skill>
}
export default function MySkills(props: IMySkills) {
  const t = useTranslations('Index');
  const { skills = [
        {logo:'/javascript.svg', name:"Javascript", description:t("javascriptDescription") },
        {logo:'/react.svg', name:"React", description:t("reactDescription") },
        {logo:'/figma.svg', name:"Figma", description:t("figmaDescription") },
        {logo:'/typescript.svg', name:"Typescript", description:t("typescriptDescription") },
        {logo:'/mongodb.svg', name:"MongoDB", description:t("mongodbDescription") },
    ] } = props;
  return (
    <div id='myskills' className='w-full flex flex-col items-center justify-center gap-4 p-6 box-border max-w-screen-2xl'>
        <h2 className='text-heading-h2 text-neutral-100'>
            {t("mySkills")}
        </h2>
        <div className='w-full flex flex-row flex-wrap align-middle justify-center gap-4'>
            {
                skills.map((item, index) => {
                    return <Card
                        key={index}
                        index={index}
                        imageUrl={item.logo}
                        title={item.name}
                        description={item.description}
                    />
                })
            }
        </div>
    </div>
  )
}
