import React from 'react';

const Question = ({ index, question, onQuestionChange }) => {
  const handleQuestionTextChange = (e) => {
    onQuestionChange(index, { ...question, questionText: e.target.value });
  };

  const handleOptionChange = (optionIndex, newOption) => {
    const updatedOptions = question.options.map((opt, i) => (i === optionIndex ? newOption : opt));
    onQuestionChange(index, { ...question, options: updatedOptions });
  };

  const handleAddOption = () => {
    onQuestionChange(index, { ...question, options: [...question.options, ''] });
  };

  const handleDeleteOption = (optionIndex) => {
    const updatedOptions = question.options.filter((_, i) => i !== optionIndex);
    onQuestionChange(index, { ...question, options: updatedOptions });
  };

  return (
    <div>
      <label>
        Question:
        <input
          type="text"
          value={question.questionText}
          onChange={handleQuestionTextChange}
        />
      </label>
      {question.options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <label>
            Option {optionIndex + 1}:
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(optionIndex, e.target.value)}
            />
          </label>
          <button type="button" onClick={() => handleDeleteOption(optionIndex)}>Delete Option</button>
        </div>
      ))}
      <button type="button" onClick={handleAddOption}>
        Add Option
      </button>
    </div>
  );
};

export default Question;

