import React from 'react'
import { Button, Container,Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import axios from 'axios';

export default class GetEmployee extends React.Component {
    
        constructor(props){
            
            super(props)
            this.state = {
                employees:[],
            }
            
        }

        async componentDidMount() {
            const response = await fetch('http://localhost:8080/employee/getEmployees');
            const body = await response.json();
            // console.log(body);
            this.setState({employees: body});
        }

        deleteEmployeeHandler(id){
            axios.delete(`http://localhost:8080/employee/delete/${id}`).then((res)=> {
                window.location.reload(true);
            })
            
        }
        downloadDPHandler(id){
            axios.get(`http://localhost:8080/employee/files/${id}`).then((res)=> {
                console.log(res);
            })
        }
        setID(data) {

            localStorage.setItem('id', data.id);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
        }

  render() {
    return (
        <div>
            <Container fluid>
                <br />
                <h3>All Employees</h3>
                <Button variant='secondary' href={`http://localhost:8080/employee/export/to-pdf`}>Export to PDF</Button>  <span> | </span>
                <Button variant='secondary' href={`http://localhost:8080/employee/export/to-excel`}>Export to Excel</Button> <span> | </span>
                <Button variant='success' href="/add-employee">Add Employee</Button>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="20%">Photo</th>
                        <th width="20%">Name</th>
                        <th width="20%">Email</th>
                        <th width="15%">Actions</th>
                        <th width="10%">Download-DP</th>
                    </tr>
                    </thead>
                    <tbody> 
                    {
                        this.state.employees.map( 
                            employee => 
                            <tr key={employee.id}>
                                <td><img width="100" height="100" src={`data:image/png;base64,${employee.picByte}`} alt="employee dp" /></td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <Link to="/edit-employee" style={{padding: "10px"}}>
                                        <Button variant='primary'  onClick={()=> this.setID(employee)}>Update</Button>
                                    </Link>
                                    
                                    <Button variant='danger' onClick={this.deleteEmployeeHandler.bind(this, employee.id)}>Delete</Button>
                                </td>
                                <td>
                                    <Button variant='info' href={`http://localhost:8080/employee/files/${employee.id}`}>Click Here</Button>
                                    {/* <Button variant='info' onClick={this.downloadDPHandler.bind(this, employee.id)}>Click Here</Button> */}
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
  }
}
