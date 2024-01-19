import { useState, useEffect } from "react"
import { usersData } from "./UsersData"


function UserCrud() {

    const [users, setUsers] = useState([])
    const[filteredUsers,setFilteredUsers] = useState([])
    const [searchkey, setSearchKey] = useState("")

    const onhandleSearch = (e) =>{
        setSearchKey(e.target.value)
    }
    const getUsersFromLocal = async () =>{
        let usersData = await localStorage.getItem("users") 
        setFilteredUsers(JSON.parse(usersData))
        setUsers(JSON.parse(usersData))
    }

    useEffect(()=>{
       getUsersFromLocal()
    },[])
    const searchUsers = ()=>{

        if(searchkey===""){
            setFilteredUsers([])
        }else{
            let result = users.filter((item)=>{
                return item.name.toLowerCase().includes(searchkey.toLowerCase()) || item.email.toLowerCase().includes(searchkey.toLowerCase())
            })
            setFilteredUsers(result)
        }
        
        
    }
    useEffect(()=>{
        console.log("Hi search key is changing")
        searchUsers();
    },[searchkey])

    const deleteUser = (id)=>{
        let result = users.filter((item)=>{
            return item.id!==id
        })
        setFilteredUsers(result)
    }
    return (
        <div className="container">
           
            <div className="row my-4">
                <div className="col-md-6">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={searchkey} onChange={(e)=>onhandleSearch(e)}/>
                </div>
                <div className="col-md-1">
                    <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init onClick={()=>searchUsers()}>search</button>
                </div>


            </div>
            <div className="row my-4">

                {filteredUsers.length===0 && <h4 style={{color:"green"}}>No users Found</h4>}

                {filteredUsers.map((user) => {
                    return (
                        <div className="col-md-3 col-lg-3 my-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="https://www.ezaccounting.com.sg/wp-content/uploads/2020/07/dummy-person.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <p className="card-text">{user.website}</p>
                                    <a href="#" class="btn btn-primary">Edit</a>
                                    <a href="#" class="btn btn-danger mx-5" onClick={()=>deleteUser(user.id)}>Delete</a>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}
export default UserCrud