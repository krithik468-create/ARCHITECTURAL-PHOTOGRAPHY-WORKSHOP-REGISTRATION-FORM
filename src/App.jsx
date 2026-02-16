import React, { useState, useEffect } from 'react';

const App = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(error)

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    portfolio_link: "",
    city: "",
    willing_to_travel: ""
  });

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:3000/get-all-questionners/')
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
      ...userInfo,
      phone: Number(userInfo.phone),
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
      const response = await fetch('http://127.0.0.1:3000/answer', {
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

  if (loading) return <div className="text-center mt-5"><div className="spinner-border text-primary"></div></div>;

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary">Submit Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Personal Information</div>
          <div className="card-body row g-3">
            {Object.keys(userInfo).map((field) => (
              <div key={field} className="col-md-6">
                <label className="form-label text-capitalize fw-bold">{field.replace(/_/g, ' ')}</label>
                
                {field === 'willing_to_travel' ? (
                  <div className="d-flex gap-3">
                    {['Yes', 'No', 'Maybe'].map((opt) => (
                      <div className="form-check" key={opt}>
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="willing_to_travel" 
                          id={`travel-${opt}`}
                          value={opt}
                          onChange={(e) => setUserInfo({...userInfo, willing_to_travel: e.target.value})}
                        />
                        <label className="form-check-label" htmlFor={`travel-${opt}`}>{opt}</label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <input 
                    type={field === 'phone' ? 'number' : 'text'} 
                    className="form-control" 
                    required
                    onChange={(e) => setUserInfo({...userInfo, [field]: e.target.value})} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {questionnaires.sort((a,b) => a.sequence - b.sequence).map((group) => (
          <div key={group.group_id} className="card mb-4 shadow-sm border-0">
            <div className="card-header bg-light fw-bold">{group.group_name}</div>
            <div className="card-body">
              {group.questions.sort((a,b) => a.question_sequence - b.question_sequence).map((q) => (
                <div key={q.question_id} className="mb-3">
                  <label className="form-label fw-bold">{q.question}</label>
                  {renderInput(q)}
                </div>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className="btn btn-primary btn-lg w-100 shadow mt-3 py-3" style={{ backgroundColor: '#0d6efd' }}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default App;