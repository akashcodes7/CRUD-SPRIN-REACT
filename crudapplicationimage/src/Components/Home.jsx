import React, { Component } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import { Navigate } from "react-router-dom";
import axios from 'axios';
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.state = {
      name: '',
      email: '',
      dp: null,
    }
    this.changeNameHandle = this.changeNameHandle.bind(this);
    this.changeEmailHandle = this.changeEmailHandle.bind(this);
    this.saveData = this.saveData.bind(this);
    this.onFileLoad = this.onFileLoad.bind(this);

  }

  saveData(event) {
    console.log(this.state);
    let formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('dp', this.state.dp);
    axios({
      url: 'http://localhost:8080/employee/create',
      method: 'post',
      data: formData
    }).then((res) => {
      this.setState({ redirect: true });
      console.log(res.data);
    })
  }

  onFileLoad(event) {
    let file = event.target.files[0];
    this.setState({ dp: file });
  }
  changeNameHandle(e) {
    this.setState({ name: e.target.value })
  }
  changeEmailHandle(e) {
    this.setState({ email: e.target.value })
  }

  render() {
    const { redirect } = this.state;
    if (redirect === true) {
      return <Navigate to='/' />;
    }

    return (
      <div>
        <Form.Group>
          <FloatingLabel controlId="floatingPassword" label="Name">
            <Form.Control type="text" name='name' placeholder="Name" value={this.state.name} onChange={this.changeNameHandle} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control type="email" name='email' placeholder="name@example.com" value={this.state.email} onChange={this.changeEmailHandle} />
          </FloatingLabel>
          <input type="file" name='dp' onChange={(event) => this.onFileLoad(event)} className='form-control' />
          <Button type='submit' className='col-md-2 ' variant="primary" onClick={(event) => this.saveData(event)}>Save</Button>
          <Button className='col-md-2 ' variant="outline-secondary">Cancel</Button>
        </Form.Group>


      </div>
    )
  }
}
