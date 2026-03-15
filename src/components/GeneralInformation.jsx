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
                        <input type="text" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone:</label>
                        <input type="number" id="phoneNumber"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <textarea name="" id="address" cols="20" rows="10"></textarea>
                    </div>
                </form>
            </div>
        )
    }
}
export {GeneralInformation}