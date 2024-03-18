import express, {Request, Response} from 'express'
import path from 'path'

const app = express()
const PORT=3000

app.use(express.static(path.join(__dirname, '../../frontend/dist')))
app.get('*', (req: Request,res: Response) =>
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
)

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})