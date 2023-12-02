import React from 'react'
import {sizes} from "../../../app/[locale]/styles";

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected ?
      "text-white border-cyan-500" :
      "border-slate-600 hover:border-white"
  return (
      <button
          className={`${buttonStyles} ${sizes.baseTextSize} text-secondary rounded-full border-2 px-6 py-3 cursor-pointer`}
          onClick={() => onClick(name)}
      >
          {name}
      </button>
  )
}

export default ProjectTag