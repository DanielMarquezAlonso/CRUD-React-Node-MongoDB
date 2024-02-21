const { request } = require('express')
const express = require('express')
const cors = require('cors')
const dbconnect = require('./config')
const ModelUser = require('./userModel')
const app = express()

const router = express.Router()

router.get('/clients', async (req, res) => {
  const respuesta = await ModelUser.find({})
  res.send(respuesta)
})

router.get('/clients/:id', async (req, res) => {
  const id = req.params.id
  const respuesta = await ModelUser.findById(id)
  res.send(respuesta)
})

router.post("/clients", async (req,res) => {
  const body = req.body
  const existingEmail = await ModelUser.findOne({ email: body.email });
  if (existingEmail) {
    return res.status(400).json({ error: 'This email is registered' });
  }
  const respuesta = await ModelUser.create(body) 
  res.send(respuesta)
})

router.put('/clients/:id', async (req, res) => {
  const body = req.body
  const id = req.params.id
  const existingEmail = await ModelUser.findOne({ email: body.email });
  if (existingEmail) {
    return res.status(400).json({ error: 'This email is registered', type: 'unique' });
  }
  const respuesta = await ModelUser.findByIdAndUpdate({_id: id}, body)
  res.send(respuesta)

})

router.delete('/clients/:id', async (req, res) => {
  const id = req.params.id
  const respuesta = await ModelUser.deleteOne({ _id: id})
  res.send(respuesta)
})

app.use(cors())
app.use(express.json())
app.use(router)
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

dbconnect()