import { useState, useEffect } from "react";
import { Link, useParams } from "@remix-run/react";

export default function AddBook() {
    const [inputId, setInputId] = useState(0);
    const [inputTitle, setInputTitle] = useState("");
    const [inputAuthor, setInputAuthor] = useState("");

    const { bookId } = useParams();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const resBook = await fetch(`http://localhost:3000/api/getbooks/${bookId}`);
                if(resBook.ok){
                    const result = await resBook.json();
                    setInputId(result.id);
                    setInputTitle(result.title);
                    setInputAuthor(result.author);
                }else{
                    alert('APIs is wrong.');
                }
            } catch (error) {
                alert('Error fetching data: '+ error);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e: any) => {
        // alert('Title: ${inputTitle}, Author: ${inputAuthor}');
        e.preventDefault();
        try {
            //Add a new book APIs
            const resAddBook = await fetch('http://localhost:3000/api/update', 
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ id: inputId, title: inputTitle, author: inputAuthor})
            }
        );
        const result = await resAddBook.json();
        alert('Update book ID: ' + result.message);
        } catch (error) {
            alert('Error submitting data: ' + error);
        }
    };
    return (
        <>
        <form onSubmit={handleSubmit} className="p-5">
            <label>แก้ไข้ข้อมูลหนังสือ</label><br />
            <input type="hidden" value={inputId}/>
            <label>ชื่อหนังสือ</label>
            <input type="text" 
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className ="border"
            /><br />
            <label>ชื่อผู้แต่ง</label>
            <input type="text" 
            value={inputAuthor}
            onChange={(e) => setInputAuthor(e.target.value)}
            className ="border"
            /><br />
            <button type="submit" className="border p-2 bg-blue-300">Update Book</button>
        </form><br />
        <Link to="/books/home" className="bg-yellow-100 p-2 ms-2 ms-2">Back</Link>
        </>
    );
}