import { useState, useEffect } from "react"



function UserReactNode() {

    const [users, setUsers] = useState([])

    
    useEffect(() => {
        fetch("http://localhost:7000/users/all").then(function (res) {
            return res.json()
        }).then(function (result) {
            setUsers(result)
        })
    }, [])

    const deleteUser = (id)=>{
        fetch(`http://localhost:7000/users/${id}`,{method:'DELETE'}).then(function (res) {
            return res.json()
        }).then(function (result) {
            setUsers(result)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <h1>users react with node</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.email}</td>
                                    <td><button className="btn btn-danger" onClick={()=>deleteUser(item.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UserReactNode