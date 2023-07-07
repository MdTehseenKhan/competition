import mongoose, { Schema, model } from "mongoose"

const SponsorSchema = new Schema({
  email: { type: String, required: true, unique: true },
})

mongoose.models = []
const SponsorModel = mongoose.models.SponsorModel || model("Sponsor", SponsorSchema)

export default SponsorModel
