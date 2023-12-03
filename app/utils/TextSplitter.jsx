import React from 'react'

const TextSplitter = ({text = '', className}) => {
  return (
      <div>
          {text.split("\n").map((line, index, array) =>
              array.length - 1 === index ? (
                  <p key={index} className={className}>
                      {line}
                  </p>
              ) : (
                  // Это не последняя строка
                  <p key={index} className={`${className} mb-5`}>
                      {line}
                  </p>
              )
          )}
      </div>
  )
}

export default TextSplitter