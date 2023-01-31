
import React,{useState} from 'react';
import {Typography,Button,TextField, Checkbox,FormGroup,FormControlLabel} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./ModalCompo.scss";
import { green } from '@mui/material/colors';
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

export default function ModalCompo(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs,setInputs]=useState({
    title:"",
    userId:"",
   completed:""
});

const handleChange=(e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
}

const handleSubmit =(e)=>{
    console.log(inputs)
e.preventDefault();
}

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
        <div style={{background:"white",width:'20%',textAlign:'center',display:'flex',alignItems:'center'}} className='mAdddataFormCon' >
        <form  onSubmit={handleSubmit}>
          <div>
          <TextField  
        name="title"
        value={inputs.title}
        onChange={handleChange}
        type={'text'} sx={{margin:3}} placeholder='Title' variant="outlined"/>
          </div>
        
<div>
<TextField
            name="userId"
        value={inputs.userId}
        onChange={handleChange}
        type={'text'} sx={{margin:3}} placeholder='userid' variant="standard"/>
</div>
       <div>
       <TextField 
            name="completed"
         value={inputs.completed}
         onChange={handleChange}
        type={'text'} sx={{margin:3}} placeholder='completed' variant="filled"/>
       </div>

       

    
        <Button type="submit">Save Task</Button>
        </form>
    </div>
      </Modal>
    </div>
  );
}