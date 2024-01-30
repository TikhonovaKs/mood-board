import React from 'react';
import './Tips.css';
import TIPS from '../../utils/TIPS.js';

function Tips() {
  const listOfTips = TIPS;

  function getRandomWords(array, count) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  const randomWords = getRandomWords(listOfTips, 6);

  return (
    <div className="tips">
      {randomWords.map((item) => (
          <button className='tips__element'>{item}</button>
      ))}
    </div>
  );
}
export default Tips;
