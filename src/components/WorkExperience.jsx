import {useState} from 'react';
function WorkExperience({data, onSubmit, isActive, onShow}) {
  const [editing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(data);
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(false);
  }
  if (editing && isActive) {
    return (
      <div className="general-info">
        <div className="sub-heading">
          <h3 className="head">Work Experience:</h3>
          <button type="submit" form="general-info-form">
            Submit
          </button>
        </div>
        <form id="general-info-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="company-name">Company Name:</label>
            <input
              type="text"
              id="company-name"
              onChange={(e) => {
                setFormData({...formData, company_name: e.target.value});
              }}
              value={formData.company_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              onChange={(e) => {
                setFormData({...formData, position: e.target.value});
              }}
              value={formData.position}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              id="start-date"
              onChange={(e) => {
                setFormData({...formData, start_date: e.target.value});
              }}
              value={formData.start_date}
            />
          </div>
          <div className="form-group">
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              id="end-date"
              onChange={(e) => {
                setFormData({...formData, end_date: e.target.value});
              }}
              value={formData.end_date}
            />
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="general-info">
        <div className="sub-heading">
          <h3 className="head">Work Experience:</h3>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true);
              onShow(2);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}
export {WorkExperience};
