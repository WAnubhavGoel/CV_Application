import {useState} from 'react';
import '../App.css';
function GeneralInformation({data, onSubmit, isActive, onShow}) {
  const [editing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(data);
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(false);
    onShow(1);
  }
  if (editing && isActive) {
    return (
      <div className="general-info">
        <div className="sub-heading">
          <h3 className="head">General Information</h3>
          <button type="submit" form="general-info-form">
            Submit
          </button>
        </div>
        <form id="general-info-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                setFormData({...formData, name: e.target.value});
              }}
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              onChange={(e) => {
                setFormData({...formData, email: e.target.value});
              }}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone:</label>
            <input
              type="number"
              id="phoneNumber"
              onChange={(e) => {
                setFormData({...formData, phone_number: e.target.value});
              }}
              value={formData.phone_number}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              onChange={(e) => {
                setFormData({...formData, address: e.target.value});
              }}
              value={formData.address}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-date">Objective:</label>
            <textarea
              name=""
              id="start-date"
              cols="20"
              rows="7"
              onChange={(e) => {
                setFormData({...formData, objective: e.target.value});
              }}
              value={formData.objective}
            ></textarea>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="general-info">
        <div className="sub-heading">
          <h3 className="head">General Information</h3>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true);
              onShow(0);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}
export {GeneralInformation};
