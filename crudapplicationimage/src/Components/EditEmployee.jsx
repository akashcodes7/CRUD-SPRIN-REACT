import React, {useEffect, useState} from 'react';
import {FloatingLabel, Form, Button} from 'react-bootstrap'
import axios from 'axios';

const Editemployee = (props) => {
  const [id, setid] = useState(0);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pic, setpic] = useState();

  const updateHandler = () => {
    let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('dp', pic);
        console.log(formData)
        axios({
          url:`http://localhost:8080/employee/edit/${id}`,
          method:'put',
          data:formData
        }).then((res)=>{
          window.location.href = '/'
        })
  }

  useEffect(() => {
    setid(localStorage.getItem('id'))
  }, []);

  return (
    
    <div>
      <div className='heading'>
        <h2>Update your details here ..</h2>
        <div>
        <Form.Group>
            <FloatingLabel controlId="floatingPassword" label="Name">
              <Form.Control type="text" name='name' placeholder="Name" value={name} onChange={(event) => setname(event.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control type="email" name='email' placeholder="name@example.com" value={email}  onChange={(event) => setemail(event.target.value)}/>
            </FloatingLabel>
            <input type="file" name='dp' onChange={(event)=>setpic(event.target.files[0])}  className='form-control'  />
            <Button type='submit' className='col-md-2 ' variant="primary" onClick={(event)=>updateHandler(event)}>Save</Button>
            <Button className='col-md-2 ' variant="outline-secondary">Cancel</Button> 
          </Form.Group>
        </div>
        </div>
      </div>
  );
}

export default Editemployee;
