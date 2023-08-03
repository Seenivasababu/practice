import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
const AppBar = () => {
    const navigate = useNavigate()
  return (
    <Card>
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        padding:10,
       
    }}> 
    
        <Button variant="contained" onClick={()=>{
            navigate('/')
        }}>Home</Button>
        <div style={{
        display:'flex',
        gap:10
       
    }}>
        <Button variant="contained" onClick={()=>{
            navigate('/addBook')
        }}>Add Books</Button>
        <Button variant="contained" onClick={()=>{
            navigate('/fetchBooks')
        }}>Fetch Books</Button>
        </div>
    </div>
    </Card>
  )
}

export default AppBar