import mongoose, { Schema, model } from "mongoose"

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String },
})

mongoose.models = []
const ContactModel = mongoose.models.ContactModel || model("contacts", ContactSchema)

export default ContactModel
