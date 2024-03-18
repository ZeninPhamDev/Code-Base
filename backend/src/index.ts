import express, {Request, Response} from 'express'

const app = express()
const PORT=3000

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})