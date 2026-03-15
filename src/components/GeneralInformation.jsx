import { useState } from "react";
import "../App.css"
function GeneralInformation({data,onSubmit}){
    const [editing,setIsEditing]=useState(true);
    const [formData,setFormData]=useState(data);
    if(editing){
        return(
            <div className="general-info">
                <div className="sub-heading">
                    <h3 className="head">General Information</h3>
                    <button type="submit">Submit</button>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name"
                            onChange={(e)=>{
                                setFormData({...formData,name:e.target.value});
                            }}
                            value={formData.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email"
                            onChange={(e)=>{
                                setFormData({...formData,email:e.target.value});
                            }}
                            value={formData.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone:</label>
                        <input type="number" id="phoneNumber"
                            onChange={(e)=>{
                                setFormData({...formData,phone_number:e.target.value});
                            }}
                            value={formData.phone_number}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address"
                            onChange={(e)=>{
                                setFormData({...formData,address:e.target.value});
                            }}
                            value={formData.address}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="objective">Objective:</label>
                        <textarea name="" id="objective" cols="20" rows="7"
                            onChange={(e)=>{
                                setFormData({...formData,objective:e.target.value});
                            }}
                            value={formData.objective}
                        ></textarea>
                    </div>
                </form>
            </div>
        )
    }
}
export {GeneralInformation}