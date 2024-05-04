import React from 'react'
import DescriptionCard from './DescriptionCard';
import { useTranslations } from "next-intl";


interface IWorkExperience{
    works?: {
        title: string;
        subTitle: string;
        description: string;
    }[]
}

export default function WorkExperience(props: IWorkExperience) {
  const t = useTranslations('Index');
  const { works=[
        {
            title: t("workExperienceTitle1"),
            subTitle:t("workExperienceSubTitle1"),
            description: t("workExperienceDescription1"),
        },
        {
            title: t("workExperienceTitle2"),
            subTitle:t("workExperienceSubTitle2"),
            description: t("workExperienceDescription2"),
        },
        {
            title: t("workExperienceTitle3"),
            subTitle:t("workExperienceSubTitle3"),
            description: t("workExperienceDescription3"),
        },
    ] } = props;
  return (
    <div id='workexperience' className='w-full flex flex-col items-center justify-center gap-4 p-6 box-border max-w-screen-2xl animate__animated animate__fadeIn animation-duration-2s'>
        <h2 className='text-heading-h2 text-neutral-100'>
            {t("workExperience")}
        </h2>
    {
        works.map((item, index) => {
            return <DescriptionCard key={index} title={item.title} subTitle={item.subTitle} description={item.description} />
        })
    }
    </div>
  )
}
