import express from 'express'
import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config();

const app = express()
const sql = postgres(process.env.DATABASE_URL)
const PORT = process.env.PORT

app.use(express.json())
app.use(express.static('public'))

app.get('/users', async (req, res) => {
    try {
        const users = await sql`SELECT * FROM users`
            res.json(users)
    } catch (error) {
        res.json(error)
    }
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await sql`SELECT * FROM posts`
            res.json(posts)
    } catch (error) {
        res.json(error)
    }
})

app.get('/userposts', async (req, res) => {
    try {
        const userPosts = await sql`SELECT name, content, date_posted, TO_CHAR(date_posted, 'DD, Month, YYYY') AS formatted_date FROM users INNER JOIN posts ON users.user_id = posts.user_id`
            res.json(userPosts)
    } catch (error) {
        res.json(error)
    }
})

app.get('/users/:id', async (req, res) => {
    try {
    const {id} = req.params
    const oneUser = await sql`SELECT * FROM users WHERE user_id = ${id}`
        res.json(oneUser)
    } catch (error) {
        res.json(error)
    }
})

app.get('/posts/:id', async (req, res) => {
    try {
        const {id} = req.params
        const onePost = await sql`SELECT * FROM posts WHERE post_id = ${id}`
            res.json(onePost)
    } catch (error) {
        res.json(error)
    }
})

app.get('/userposts/:id', async (req, res) => {
    try {
        const {id} = req.params
        const oneUserPost = await sql`SELECT * FROM users INNER JOIN posts ON users.user_id = posts.user_id WHERE user_id = ${id}`
            res.json(oneUserPost)
    } catch (error) {
        res.json(error)
    }
})

app.post('/users', async (req, res) => {
    try {
        const {name, age, gender, location} = req.body
        const newUser = await sql`INSERT INTO users (name, age, gender, location) VALUES (${name}, ${age}, ${gender}, ${location}) returning name, age, gender, location`
            res.json(newUser)
        } catch (error) {
            res.json(error)
        }
    })
    
app.post('/posts', async (req, res) => {
    try {
        const {user_id, content, date_posted} = req.body
        const newPost = await sql`INSERT INTO posts (user_id, content, date_posted) VALUES (${user_id}, ${content}, ${date_posted}) returning user_id, content, date_posted`
            res.json(newPost)
        } catch (error) {
            res.json(error)
        }
    })
        
app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {name, age, gender, location} = req.body
        const updatedUser = await sql`UPDATE users SET name = ${name}, age = ${age}, gender = ${gender}, location = ${location} WHERE user_id = ${id}`
            res.json(updatedUser)
    
    } catch (error) {
        res.json(error)
    }
})

app.put('/posts/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {user_id, content, date_posted} = req.body
        const updatedPost = await sql`UPDATE posts SET user_id = ${user_id}, content = ${content}, date_posted = ${date_posted} WHERE post_id = ${id}`
            res.json(updatedPost)
    
    } catch (error) {
        res.json(error)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deletedUser = await sql`DELETE FROM users WHERE user_id = ${id}`
            res.json(deletedUser)
    } catch (error) {
        res.json(error)
    }
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deletedPost = await sql`DELETE FROM posts WHERE post_id = ${id}`
            res.json(deletedPost)
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT)
