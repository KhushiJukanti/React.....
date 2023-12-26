import React from "react";

class Employees extends React.Component {
    constructor() {
        super()
        this.state = {
            Emp_id: "",
            Emp_Name: "",
            Emp_Age: "",
            Emp_Salary: "",
            Emp_Address: "",
            Employees: [],
            searchQuery: ""

        }
    }

    handleid(e) {
        this.setState({ Emp_id: e.target.value })
    }
    handleName(e) {
        this.setState({ Emp_Name: e.target.value })
    }
    handleAge(e) {
        this.setState({ Emp_Age: e.target.value })
    }
    handleSalary(e) {
        this.setState({ Emp_Salary: e.target.value })
    }
    handleAddress(e) {
        this.setState({ Emp_Address: e.target.value })
    }
    createEmployees(e) {
        e.preventDefault();
        let Employee = {
            id: this.state.Emp_id,
            Name: this.state.Emp_Name,
            Age: this.state.Emp_Age,
            Salary: this.state.Emp_Salary,
            Address: this.state.Emp_Address
        }
        let tempArr = this.state.Employees;
        tempArr.push(Employee)
        this.setState({ Employees: tempArr }, () => {
            console.log(this.state.Employees);
        });
        this.resetEmployeeDetail();
    }

    resetEmployeeDetail() {
        this.setState({ Emp_id: "", Emp_Name: "", Emp_Age: "", Emp_Salary: "", Emp_Address: "" })
    }
    handleSearch(e) {
        this.setState({ searchQuery: e.target.value });
    }


    render() {

        const containerStyle = {
            backgroundColor: this.state.submitted ? "cyan" : "transparent", 
            padding: "20px", 
            borderRadius: "10px", 
        };

        return (
            <div className="container" style={containerStyle}>
                <div className="row">
                    <h1>Employees Details</h1>
                </div>
                <form onSubmit={(e) => this.createEmployees(e)}>
                    <div className="mb-3">
                        <label className="form-label">Employee ID</label>
                        <input type="text" className="form-control" value={this.state.Emp_id} onChange={(e) => this.handleid(e)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Name</label>
                        <input type="text" className="form-control" value={this.state.Emp_Name} onChange={(e) => this.handleName(e)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Age</label>
                        <input type="text" className="form-control" value={this.state.Emp_Age} onChange={(e) => this.handleAge(e)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Salary</label>
                        <input type="text" className="form-control" value={this.state.Emp_Salary} onChange={(e) => this.handleSalary(e)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Address</label>
                        <input type="text" className="form-control" value={this.state.Emp_Address} onChange={(e) => this.handleAddress(e)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <div className="mb-3">
                    <label className="form-label">Search Employees</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.searchQuery}
                        onChange={(e) => this.handleSearch(e)}
                        placeholder="Search"
                    />
                </div>

                <div className="mt-4"></div>

                <div className="row">


                    {this.state.Employees
                        .filter(
                            (item) =>
                                item.Name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                                item.id.toLowerCase().includes(this.state.searchQuery.toLowerCase())
                        )
                        .map((item) => {
                            return (
                                <div key={item.id} className="col-md-3">
                                    <div className="card">
                                        <div className="card-body" style={{ backgroundColor: "darkcyan", borderRadius:"10px"}}>
                                            <h5 className="card-title">Name: {item.Name}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Id: {item.id}</h6>
                                            <h6 className="card-text">Age: {item.Age}</h6>
                                            <h6 className="card-text">Salary: {item.Salary}</h6>
                                            <h6 className="cart-text">Address: {item.Address}</h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    {/* {this.state.Employees.map((item) => {
                        return (
                            <div key={item.id} className="col-md-3">
                                <div className="card">
                                    <div className="card-body" style={{ backgroundColor: "darkcyan" }}>
                                        <h5 className="card-title">Name:{item.Name}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Id:{item.id}</h6>
                                        <h6 className="card-text">Age:{item.Age}</h6>
                                        <h6 className="card-text">Salary:{item.Salary}</h6>
                                        <h6 className="cart-text">Address:{item.Address}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        )
    }
}

export default Employees