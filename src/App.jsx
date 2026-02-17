import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import modPhotos from "./assets/img6.png"

const App = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(error)

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch('https://registration-form-photography-mysql-node.onrender.com/get-all-questionners/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch questionnaires');
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

  const handleValueChange = (questionId, value, isCheckbox = false) => {
    setAnswers((prev) => {
      if (isCheckbox) {
        const currentArr = prev[questionId] || [];
        const newArr = currentArr.includes(value)
          ? currentArr.filter((v) => v !== value)
          : [...currentArr, value];
        return { ...prev, [questionId]: newArr };
      }
      return { ...prev, [questionId]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      answer: questionnaires.map((group) => ({
        group_id: group.group_id,
        group_name: group.group_name,
        sequence: group.sequence,
        status: group.status,
        answer: group.questions.map((q) => ({
          question_id: q.question_id,
          question: q.question,
          question_type: q.question_type,
          sequence: q.question_sequence,
          status: q.status,
          value: answers[q.question_id] || (q.question_type === 'checkbox' ? [] : "")
        }))
      }))
    };

    try {
      const response = await fetch('https://registration-form-photography-mysql-node.onrender.com/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert('Data submitted successfully!');
      } else {
        alert('Submission failed.');
      }
    } catch (err) {
      alert('Network Error connecting to server');
      console.log(err)
    }
  };

  const renderInput = (q) => {
  switch (q.question_type) {
    case 'textarea':
      return <textarea className="form-control" rows="3" onChange={(e) => handleValueChange(q.question_id, e.target.value)} />;

    case 'text':
      return <input type="text" className="form-control" onChange={(e) => handleValueChange(q.question_id, e.target.value)} />;
    
    case 'number':
      return (
    <input 
      type="tel" // Use 'tel' to support maxLength while keeping the number keyboard
      className="form-control" 
      maxLength="10" 
      onInput={(e) => {
        // Optional: Extra safety to prevent non-numeric typing
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
      }}
      onChange={(e) => handleValueChange(q.question_id, e.target.value)} 
    />
  );
    
    case 'select':
      return (
        <select 
          className="form-select" 
          defaultValue="" 
          onChange={(e) => handleValueChange(q.question_id, e.target.value)}
        >
          <option value="" disabled>Select an option</option>
          {q.options?.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      );

    case 'radio':
      return q.options?.map((opt, i) => (
        <div className="form-check" key={i}>
          <input className="form-check-input" type="radio" name={`q-${q.question_id}`} onChange={() => handleValueChange(q.question_id, opt)} />
          <label className="form-check-label">{opt}</label>
        </div>
      ));
    case 'checkbox':
      return q.options?.map((opt, i) => (
        <div className="form-check" key={i}>
          <input className="form-check-input" type="checkbox" onChange={() => handleValueChange(q.question_id, opt, true)} />
          <label className="form-check-label">{opt}</label>
        </div>
      ));
    default: return null;
  }
};


   const [scrollPos, setScrollPos] = useState(0);

  const opacity = Math.max(1 - scrollPos / 300, 0);
  const translateX = Math.max(scrollPos / 2, 0) * -1;
   useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <div className="text-center mt-5"><div className="spinner-border text-primary"></div></div>;
  
  return (
  
  <div className="d-flex align-items-center bg-gradient">
    <div className="container-fluid">
    <div className="row align-items-start">
      {/* LEFT CONTENT - STICKY IMAGE */}
      <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{ height: '100vh', position: 'sticky', top: 0 }}>
        <div style={{ transform: `translateX(${translateX}px)`, opacity: opacity, transition: 'transform 0.1s linear, opacity 0.1s linear' }}>
          <img src={modPhotos} alt="img" width={"500px"} height={"300px"} />
        </div>
      </div>

      {/* CENTER FORM */}
     <div className="col-lg-5">
        <div className="card shadow-lg rounded-4 p-4 card-gradiant">
          <h4 className="mb-3 fw-semibold">Architectural Photography Workshop</h4>
          
          <form onSubmit={handleSubmit} className='w-100'>

            {/* DYNAMIC QUESTIONNAIRES */}
            {questionnaires.sort((a,b) => a.sequence - b.sequence).map((group) => (
              <div key={group.group_id} className="mt-4">
                {/* Group Name as a Label/Header */}
                <label className="form-label fw-semibold text-primary">{group.group_name}</label>
                
                {group.questions.sort((a,b) => a.question_sequence - b.question_sequence).map((q) => (
                  <div key={q.question_id} className="mb-3">
                    <label className="form-label">{q.question}</label>
                    {/* Ensure your renderInput(q) returns the clean Bootstrap classes (form-control, form-select, etc.) */}
                    {renderInput(q)}
                  </div>
                ))}
              </div>
            ))}

            <button type="submit" className="btn btn-primary btn-lg w-100 shadow mt-4 py-3" style={{ backgroundColor: '#0d6efd' }}>
              Submit Application
            </button>
          </form>
        </div>
        </div>
        </div>
     </div>
  </div>

  );
};

export default App;