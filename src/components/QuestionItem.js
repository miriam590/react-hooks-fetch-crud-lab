import React from 'react';

function QuestionItem({ question, onDeleteQuestion, onUpdateCorrectIndex }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => {
    onDeleteQuestion(id);
  };

  const handleCorrectIndexChange = (e) => {
    onUpdateCorrectIndex(id, parseInt(e.target.value));
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectIndexChange}>
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;