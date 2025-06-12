import { useState } from "react";
import { Link } from "react-router-dom";
export default function App1(){
    const [name,setName]=useState("")
const handleSubmit=(event)=>{
    event.preventDefault();
  }
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Enter your Name:
        <input type='text' 
        value={name} 
        onChange={(e)=>setName(e.target.value)}>
          </input>  
        </label>
        <br>
        
        </br>
        <label>
            Enter Your Course:
            <select>
                <option value="None">Select</option>
                <option value="React JS">React JS</option>
                <option value="Data Administration">Data Administration</option>
                <option value="Node JS">Node JS</option>
            </select>
        </label>
        <br></br>
       <h4> <label>Provide Your Feedback in detail</label></h4>
        <textarea id="w3review" name="w3review" rows="5" cols="50"></textarea>
 <br></br>
 
  <button type="submit" value="Submit">Submit</button>
  <br></br>
  <Link to="/Feedbacklist">
  <button type="button ">View Submissions</button></Link>
        
        </form>
        </div>
  )};
