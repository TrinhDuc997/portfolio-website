import React from 'react'

interface IDescriptionCard{
    title: string;
    subTitle: string;
    description: string;
}
export default function DescriptionCard(props: IDescriptionCard) {
    const { title, subTitle, description } = props;
  return (
    <div className='flex flex-col justify-center gap-2'>
        <h3 className='text-heading-h3 text-neutral-100 text-center'>{title}</h3>
        <div className='text-label-16px-bold text-neutral-300 text-center'>{subTitle}</div>
        <p className='text-body-14px-regular text-neutral-500 text-center'>{description}</p>
    </div>
  )
}
