import React, { useState, useEffect } from 'react'

import { Typography, Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import "./Task.scss";

// import ModalCompo from '../ModalCompo/ModalCompo';
function Task() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setMyData(res.data))

  }, []);

  const deteteData = (id) => {
    alert("Removed task..")
    var newdata = myData.filter(myData => myData.id !== id);
    setMyData(newdata)
  }

  const handleSubmit = (inputs) => {
    let newid = myData.length + 1
    alert(JSON.stringify(newid))
    alert(JSON.stringify(inputs))
    inputs.id = newid
    alert("new" + JSON.stringify(inputs))
    // setMyData([...myData, inputs]);
    alert(JSON.stringify("lasttt" + myData))
    // myData.push(inputs)


    // setMyData([
    //   ...myData,
    //   { inputs }
    // ]);


    // setMyData(...myData,inputs);

    // setMyData((prevState)=>({
    //   ...prevState,inputs
    // }))
  }

  return (
    <div className='tContainer'>
      <div className="tUserAdddiv">
        <h1>Task List</h1>

        <ModalCompo handleSubmit={handleSubmit} />
      </div>

      {
        myData.map((todo) => {
          //  const {userId,id,title,completed}=todo
          return (
            <div className='tdata' key={todo.id}>
              <h6>{todo.id}</h6>
              <p>{todo.title}</p>
              <p>{todo.completed}</p>
              <Button className="tDelateBtn" variant="contained" color="error"
                onClick={() => deteteData(todo.id)}
              >
                Delete
              </Button>
            </div>
          )
        })
      }
    </div>
  )
}



// ----------------
// Add Task Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalCompo = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    title: "",
    userId: "",
    completed: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  // const handleSubmit =(e)=>{
  //     console.log(inputs)
  // e.preventDefault();
  // }
  return (
    <div className='mContainer'>
      <Button className="addbtn" variant="contained" color="info" onClick={handleOpen}>Add Data</Button>
      <Modal
        className='mModal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ background: "white", width: '20%', textAlign: 'center', display: 'flex', alignItems: 'center' }} className='mAdddataFormCon' >
          <form onSubmit={() => props.handleSubmit(inputs)}>
            <div>
              <TextField
                name="title"
                value={inputs.title}
                onChange={handleChange}
                type={'text'} sx={{ margin: 3 }} placeholder='Title' variant="outlined" />
            </div>

            <div>
              <TextField
                name="userId"
                value={inputs.userId}
                onChange={handleChange}
                type={'text'} sx={{ margin: 3 }} placeholder='userid' variant="standard" />
            </div>
            <div>
              <TextField
                name="completed"
                value={inputs.completed}
                onChange={handleChange}
                type={'text'} sx={{ margin: 3 }} placeholder='completed' variant="filled" />
            </div>




            <Button type="submit">Save Task</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}


export default Task;