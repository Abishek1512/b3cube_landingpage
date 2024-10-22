import React from 'react'

type Props = {
  text: string
}

const PrimaryButton = (props: Props) => {
  const { text } = props
  return (
      <div className="bg-[#cdfe6c] font-semibold font-sora text-black text-xs rounded-lg p-2 leading-tight inline-block w-fit">
        {text}
      </div>
  );
}

export default PrimaryButton