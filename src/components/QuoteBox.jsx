import React from 'react';

const QuoteBox = ({ phrase, handleChangequote }) => {
  return (
    <section>
      <div>
        <button className="phrase-change-button" onClick={handleChangequote}>

        </button>
      </div>

      <div>
        <article>
          <p>{phrase}</p>
        </article>
      </div>
    </section>
  );
};

export default QuoteBox;
