import mongoose from "mongoose"


export async function connectDB() {
  return mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => {
      console.log("✅️ Successfully Connected to Database!")
    })
    .catch(() => {
      console.error("❌️ Unable to connect to Database!")
    })
}
connectDB()