import express from 'express'
import paymentRoutes from './routes/payment.routes.js'

const app = express()
app.use(paymentRoutes);


app.listen(3005)
console.log('Server running on port', 3005)