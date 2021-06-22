import express from 'express'
import { sendMailer } from '../controller/mailController'

const mailRouter = express()

mailRouter.post("/sendmail" , sendMailer)

export default mailRouter