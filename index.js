import dotenv from 'dotenv'
import express from 'express';
const app = express()
dotenv.config()
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/user',(req,res)=>{
    const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    role: "admin",
    address: { city: "New York", country: "USA" }
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 35,
    role: "editor",
    address: { city: "London", country: "UK" }
  },
  {
    id: 3,
    name: "Carlos Rivera",
    email: "carlos@example.com",
    age: 30,
    role: "user",
    address: { city: "Madrid", country: "Spain" }
  },
  {
    id: 4,
    name: "Diana Lee",
    email: "diana@example.com",
    age: 26,
    role: "moderator",
    address: { city: "Seoul", country: "South Korea" }
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan@example.com",
    age: 32,
    role: "user",
    address: { city: "Toronto", country: "Canada" }
  },
  {
    id: 6,
    name: "Fatima Khan",
    email: "fatima@example.com",
    age: 29,
    role: "admin",
    address: { city: "Dubai", country: "UAE" }
  },
  {
    id: 7,
    name: "George Ivanov",
    email: "george@example.com",
    age: 40,
    role: "user",
    address: { city: "Sofia", country: "Bulgaria" }
  },
  {
    id: 8,
    name: "Hannah Müller",
    email: "hannah@example.com",
    age: 24,
    role: "user",
    address: { city: "Berlin", country: "Germany" }
  },
  {
    id: 9,
    name: "Ivan Petrov",
    email: "ivan@example.com",
    age: 37,
    role: "editor",
    address: { city: "Moscow", country: "Russia" }
  },
  {
    id: 10,
    name: "Julia Rossi",
    email: "julia@example.com",
    age: 27,
    role: "user",
    address: { city: "Rome", country: "Italy" }
  }
];
   res.send(users)
})
app.get('/login',(req,res)=>{
    res.send('<h1>This is login</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
