import React from 'react';
import {table, Button, container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
import ReactDOM from 'react-dom';



const data =[
    {id: 1, FirstName:" ", LastName:" ", EmailAdress:""},
];

class Crud extends React.Component{
state = {
    data: data,
    form:{
        id:'',
        FirstName:'',
        LastName:'',
        EmailAdress:'',
        
    }
};

    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    render(){
        return(
            <Container>
                <br />
            <Button color="success"> Add New Record</Button>
            <br /><br />

        <Table>
            <thead><tr><th>Id</tr></thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Adress</th>
            
            <tbody>
                {this.state.data.map((elemento) =>(
                    <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.FirstName}</td>
                <td>{elemento.LastName}</td>
                <td>{elemento.EmailAdress}</td>
                        <td><Button color="warning">Update</Button>{"  "}
                        <Button color="danger">Delete</Button></td>
                    </tr>
                ))}

            </tbody>
        </Table>
    
    </Container>
    
export default Crud;