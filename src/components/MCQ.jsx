//displaying mcqs
import React, { useState } from 'react';

const MCQ = ({ mcqs }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    mcqs.forEach((mcq, index) => {
      if (selectedAnswers[index] === mcq.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  return (
    <div>
      {mcqs.map((mcq, index) => (
        <div key={index} className="mcq">
          <h4>{mcq.question}</h4>
          {mcq.options.map((option, i) => (
            <div key={i}>
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleOptionChange(index, option)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={calculateScore}>Submit</button>
      {score !== null && <p>Your score: {score} / {mcqs.length}</p>}
    </div>
  );
};

export default MCQ;
