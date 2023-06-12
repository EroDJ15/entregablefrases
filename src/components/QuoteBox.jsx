import React from 'react'

const QuoteBox = ({ phrase, handleChangequote }) => {
  return (
    <section>
      <button style={{ color: 'black', transition: 'color 0.10s ease' }} onClick={handleChangequote}>Phrase Change</button>

      <article>
        <p>{phrase}</p>
      </article>
    </section>
  )
}

export default QuoteBox
