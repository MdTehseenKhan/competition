import mongoose, { Schema, model } from "mongoose"

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
})

mongoose.models = []
const ContactModel = mongoose.models.ContactModel || model("Contact", ContactSchema)

export default ContactModel
