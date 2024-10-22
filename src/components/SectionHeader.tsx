import React from 'react'
import PrimaryButton from '../app/component/PrimaryBtton'
import ArrowButton from '../app/component/ArrowButton'

type Props = {
    primaryButtonText: string
    arrowButtonText: string
    title: string
    description: string
    isArrowButtonVisible?: boolean
}

const SectionHeader = (props: Props) => {
    const {
      primaryButtonText,
      arrowButtonText,
      title,
      description,
      isArrowButtonVisible=false,
    } = props;
  return (
    <div className="flex flex-col max-w-[650px] gap-10 mx-auto items-center text-center">
      <PrimaryButton text={primaryButtonText} />
      <h1 className="text-[32px] text-background-gradient">{title}</h1>
      <p className="font-semibold text-base">{description}</p>
      {isArrowButtonVisible && <ArrowButton text={arrowButtonText} />}
    </div>
  );
}

export default SectionHeader