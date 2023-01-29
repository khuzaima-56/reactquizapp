import { useState } from "react";
import "./App.css";

const Quiz = ({ qlist }) => {
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect === "True") {
      const newScore = score + 10;
      setScore(newScore);
    }
    
    const newQ = questionNo + 1;
    setQuestionNo(newQ);
  };

  const retakeQuiz = () => {
    setQuestionNo(0);
    setScore(0);
  }

  return (
    <div>
      <div className="mainBox">
        {questionNo !== qlist.length ? (
          <>
            <div className="questionBox">
              <div className="questionNo">
                Question # {questionNo + 1}
                <span className="totalLength">/{qlist.length}</span>
              </div>
              <div className="question">{qlist[questionNo].Question}</div>
            </div>
            <div className="answerBox">
              {qlist[questionNo].Answer.map((q, index) => {
                return (
                  <button
                    key={index}
                    className="answer"
                    onClick={() => handleClick(q.isCorrect)}>
                    {q.value}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
            <div className="scoreBox">
              You Scored {score}/{qlist.length * 10} Points in this Quiz.
              <button className='retake' onClick={retakeQuiz}>Retake</button>
            </div>
        )}
      </div>
    </div>
  );
};
export default Quiz;
