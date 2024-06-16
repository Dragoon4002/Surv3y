import React, { useState } from 'react';
import Question from './Question';
import './scss/SurveyForm.scss'
const SurveyForm = () => {
  const [posterName, setPosterName] = useState('');
  const [email, setEmail] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', options: ['', ''] }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', ''] }]);
  };

  const handleQuestionChange = (index, newQuestion) => {
    const updatedQuestions = questions.map((q, i) => (i === index ? newQuestion : q));
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ posterName, email, questions });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='name'>
        <label>
          Poster Name:
          <input
            type="text"
            value={posterName}
            onChange={(e) => setPosterName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      {questions.map((question, index) => (
        <Question
          key={index}
          index={index}
          question={question}
          onQuestionChange={handleQuestionChange}
        />
      ))}
      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button type="submit">Submit Survey</button>
    </form>
  );
};

export default SurveyForm;
