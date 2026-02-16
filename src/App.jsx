import React, { useState, useEffect } from 'react';

const App = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:3000/get-all-questionners/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setQuestionnaires(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (questionId, value, isCheckbox = false) => {
    setFormData((prev) => {
      if (isCheckbox) {
        const currentValues = prev[questionId] || [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
        return { ...prev, [questionId]: newValues };
      }
      return { ...prev, [questionId]: value };
    });
  };

  const renderQuestion = (q) => {
    switch (q.question_type) {
      case 'text':
        return (
          <input
            type="text"
            className="form-control"
            placeholder="Type your answer..."
            onChange={(e) => handleInputChange(q.question_id, e.target.value)}
          />
        );
      case 'checkbox':
        return q.options?.map((opt, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`q-${q.question_id}-${index}`}
              onChange={() => handleInputChange(q.question_id, opt, true)}
            />
            <label className="form-check-label" htmlFor={`q-${q.question_id}-${index}`}>
              {opt}
            </label>
          </div>
        ));
      case 'radio':
        return q.options?.map((opt, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={`radio-${q.question_id}`}
              id={`radio-${q.question_id}-${index}`}
              onChange={() => handleInputChange(q.question_id, opt)}
            />
            <label className="form-check-label" htmlFor={`radio-${q.question_id}-${index}`}>
              {opt}
            </label>
          </div>
        ));
      default:
        return <p className="text-muted">Unsupported question type</p>;
    }
  };

  if (loading) return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  if (error) return <div className="alert alert-danger m-5">Error: {error}</div>;

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary border-bottom pb-2">Dynamic Questionnaire</h2>
      <form onSubmit={(e) => { e.preventDefault(); console.log(formData); }}>
        {questionnaires.map((group) => (
          <div key={group.group_id} className="card mb-4 shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0 text-secondary">{group.group_name}</h5>
            </div>
            <div className="card-body">
              {group.questions
                .sort((a, b) => a.question_sequence - b.question_sequence)
                .map((q) => (
                  <div key={q.question_id} className="mb-4 border-bottom pb-3">
                    <label className="form-label fw-bold">{q.question}</label>
                    <div className="ps-2">{renderQuestion(q)}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-primary btn-lg w-100 shadow">Submit Answers</button>
      </form>
    </div>
  );
};

export default App;