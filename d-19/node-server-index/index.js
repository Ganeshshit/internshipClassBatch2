const express = require("express")
const app = express()
const Port = 8000

const books = [
    { id: 1, title: 'book one', authour: 'Authour one' },
    {id:2,title:'book two',author:'Author two'}
]
app.use(express.json());
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const id = books.length + 1;
    const newBook = {
        id:id,
        title:title,
        author: author
    }
    books.push(newBook)
    console.log(books)

    return res.status(200).json(books)
})
app.get('/books', (req, res) => {
    return res.status(200).json(books)
  
})
app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(b => b.id == id)
    console.log(book)
    if (!book) {
        return res.status(200).json({Sucess:false,message:"Book not found"})
    }
    return res.status(200).json(book)
})
app.listen(Port, () => {
    console.log(`Server listin at port :${Port}`)
})
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const book = books.find((b) => b.id == id);
    if (!book) {
        return res.status(200).json({ Sucess: false, message: "Book not found" })
    }
    const newBook=books.filter(b => b.id != book.id)
    console.log(newBook)
    return res.status(200).json(newBook)
})