import express, { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World, Devsops the carry me where i no know")
})

app.get('/health', (req: Request, res: Response) => {
    res.send("health is good")
})

app.listen(port, () => {
    console.log(`App listening on the port ${port}`)    
})