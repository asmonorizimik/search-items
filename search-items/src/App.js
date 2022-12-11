
import './App.css';



import React, { useState } from "react";
const App = () => {
const [allData,setAllData]=useState([])
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [search, setSearch] = useState();

const searchData = !search ? allData:allData.filter((item) =>
       item.firstName.toLowerCase().includes(search.toLowerCase())||item.lastName.toLowerCase().includes(search.toLowerCase())||item.email.toLowerCase().includes(search.toLowerCase())
    );

return (
  <div id="mainBody">
    <div id="inputs">
      first-name: <input type="text" onChange={(event)=>{
        setFirstName(event.target.value)
      }} ></input>

      last-name: <input type="text" onChange={(event)=>{
        setLastName(event.target.value)

      }} ></input>

      Email: <input type="email" onChange={(event)=>{
        setEmail(event.target.value)
      }} ></input>

      Password: <input type="password" onChange={(event)=>{
        setPassword(event.target.value)
      }} ></input>

    <button id="submitBtn" onClick={()=>{
      let tempObj={
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
      }
      if (firstName.trim().length<=0){
        alert("pliz enter your full name")
        setFirstName("")
      }
      else if (lastName.trim().length<=0){
        alert("pliz enter full name")
        setLastName("")
      }
      else if (email.trim().length<=0){
        alert("you cannot submit without your email address")
        setEmail("")
      }
      else if (password.trim().length<=0){
        alert("enter correct and valid password ")
        setPassword("")
      }
      else{
        setAllData([...allData,tempObj])
      }

    }}>submit</button>

      search: <input type="text" value={search} onChange={(event)=>{
        setSearch(event.target.value)
      }} />

      <h2>Details</h2>
    </div>

    {searchData.map((item,index) => {
      return (
        <div id="details">
           <table border="">
           <th>sl.No</th> <th>first-name</th> <th>last-name</th> <th>email-address</th> <th>password</th><th>delete-data</th>
          <tbody>
            <td><tr id="slNo">{index+1}.</tr></td>
            <td><tr>{item.firstName}</tr></td>
            <td><tr>{item.lastName}  </tr></td>
            <td><tr>{item.email}  </tr></td>
            <td><tr>{item.password}</tr></td>

            <td><button id="delete" onClick={()=>{
                let newData=[...allData]
                newData.splice(index,1)
                setAllData(newData)
              }}>delete-data</button></td>
            </tbody>
          </table>
        </div>
      );
    })}
  </div>
);
};
export default App;
