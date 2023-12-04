import React from 'react'
import {sizes} from "../../[locale]/styles";

const FilterTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected ?
      'text-white border-b border-cyan-500' :
      'text-secondary';
  return (
      <button
          className={`mr-3 font-semibold hover:text-white ${buttonStyles}`}
          onClick={() => onClick(name)}
      >
          {name}
      </button>
  )
}

export default FilterTag