import React, { useState } from 'react';
import { Card, TextField, Button } from '@mui/material';
import axios from 'axios'

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:3001/books',{
            title,description,author,category,price
        })
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            marginTop:29
        }}>
        <Card 
        style={{ width: 400, padding: 20, }}>
           
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> <br/> <br/> 
                        <TextField
                            label="Author"
                            variant="outlined"
                            fullWidth
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <br/> <br/>
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br/> <br/>
                        <TextField
                            label="Category"
                            variant="outlined"
                            fullWidth
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <br/> <br/>
                        <TextField
                            label="Price"
                            variant="outlined"
                            fullWidth
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <br/> <br/>
                        <Button variant='contained' color='success' onClick={handleSubmit}> Submit</Button>
        </Card>

        </div>
    );
};

export default AddBook;
