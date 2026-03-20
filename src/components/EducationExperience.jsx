import { useState } from "react";
import "../App.css" 
function EducationalExperience({data,onSubmit,isActive,onShow}){
    const [editing,setIsEditing]=useState(true);
    const [formData,setFormData]=useState(data);
    function handleFormSubmit(e){
        e.preventDefault();
        setIsEditing(false);
        onSubmit(formData);
        onShow(3);
    }
    if(editing && isActive){
        return(
            <div className="general-info">
                <div className="sub-heading">
                    <h3 className="head">Educational Experience</h3>
                    <button type="submit" form="general-info-form">Submit</button>
                </div>
                <form id="general-info-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">School Name:</label>
                        <input type="text" id="name"
                            onChange={(e)=>{
                                setFormData({...formData,school_name:e.target.value});
                            }}
                            value={formData.school_name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city"
                            onChange={(e)=>{
                                setFormData({...formData,city:e.target.value});
                            }}
                            value={formData.city}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country"
                            onChange={(e)=>{
                                setFormData({...formData,country:e.target.value});
                            }}
                            value={formData.country}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="major">Major:</label>
                        <input type="text" id="major"
                            onChange={(e)=>{
                                setFormData({...formData,major:e.target.value});
                            }}
                            value={formData.major}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="degree">Degree:</label>
                        <input type="text" id="degree"
                            onChange={(e)=>{
                                setFormData({...formData,degree:e.target.value});
                            }}
                            value={formData.degree}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start-date">Start Date:</label>
                        <input type="date" id="start-date"
                            onChange={(e)=>{
                                setFormData({...formData,start_date:e.target.value});
                            }}
                            value={formData.start_date}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end-date">End Date:</label>
                        <input type="date" id="end-date"
                            onChange={(e)=>{
                                setFormData({...formData,end_date:e.target.value});
                            }}
                            value={formData.end_date}
                        />
                    </div>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="general-info">
                <div className="sub-heading">
                    <h3 className="head">Educational Experience</h3>
                    <button type="button" onClick={(e)=>{
                        e.preventDefault();
                        setIsEditing(true);
                        onShow(1);
                    }}>Edit</button>
                </div>
            </div>
        )
    }
}
export {EducationalExperience}