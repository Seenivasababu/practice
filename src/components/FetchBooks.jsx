import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Card, TextField, Box,Grid,Typography } from '@mui/material';

const FetchBooks = () => {

    const [books,setBooks] = useState([])
    useEffect(()=>{
        const fetchBooks = async ( ) => {
            try {
                const response = await axios.get('http://localhost:3001/books')
                setBooks(response.data)
                console.log(books);
            } catch (error) {
                
            }
        }
        fetchBooks()
    },[])
    return (
        <div>
            <h3>Fetching Books</h3>
            <div style={{
                display:'flex',
                flexWrap:'wrap'
            }}>
            {books.map(book=>{
                return <Card style={{ width: 300, padding: 20, margin:30 }}>
                    <Typography>{book.title}</Typography>
                    <Typography>{book.description}</Typography>
                    <Typography>{book.author}</Typography>
                    <Typography>{book.category}</Typography>
                    <Typography>{book.price}</Typography>
                </Card>
            })}
            </div>
        </div>
    )
}


export default FetchBooks