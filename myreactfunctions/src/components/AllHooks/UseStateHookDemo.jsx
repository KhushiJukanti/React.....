import React from 'react'
import { useState } from 'react'

function UseStateHookDemo() {
    const[name, setName] = useState("Khushi")
    const[number,SetNumber] = useState(1234567890)
    const[email,setEmail] = useState("Khushi@gmail.com")
    const[age,setAge]= useState(18)
    const [userInfo,setUserInfo] = useState({Address:"Hyderabad",salary:"30000"})
    const [employees,setEmployees] = useState([{id:"101",name:"test1"}])

    const changeName = ()=>{
        setName("Ishu")
    }
    const changeNbr = ()=>{
        SetNumber(2345678)
    }

    const changeEmail = ()=>{
        setEmail("ishu@gmail.com")
    }
    const changeUserInfo = ()=>{
        setUserInfo({...userInfo,Address:"Bangalore",salary:"40000"})
    }

    const changeUser =()=>{
        changeName();
        changeNbr();
        changeEmail();
        changeUserInfo()
    }

    const AddEmployee = ()=>{
        setEmployees([...employees,{id:102,name:"test2"}])
    }

  return (
    <div>
      <h4>name: {name} <button onClick={changeName}>Change Name</button></h4>
      <h4>number: {number} <button onClick={changeNbr}>Change Nbr</button></h4>
      <h4>email:{email} <button onClick={changeEmail}>Chang Email</button></h4>
      <h4>Age: {age} <button onClick={()=>setAge(age+1)}>Chang Age</button></h4>

      <h4>User Adress:{userInfo.Address}</h4>
      <h4>User Salary: {userInfo.salary}</h4>
      <button onClick={changeUserInfo}>Change UserInfo</button><br />
      <button onClick={changeUser}>Change User</button>

      <ul>
        {employees.map((employee)=>{
            return(
                <li>{employee.id} {employee.name}</li>
            )
        })}
      </ul>
      <button onClick={AddEmployee}>Add new Employee</button>

      
    </div>
  )
}

export default UseStateHookDemo
