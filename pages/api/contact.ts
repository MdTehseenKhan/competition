import { NextApiRequest, NextApiResponse } from "next"

import ContactModel from "@/app/models/Contact"

import "../../db"

type ResponseData = {
  success: boolean
  message: string
}

export default async function hello(req: NextApiRequest, res: NextApiResponse<ResponseData> ) {
  const { name, email, message } = req.body

  switch (req.method) {
    case "POST": {
      try {
        ContactModel.create({
          name: name,
          email: email,
          message
        })

        res.status(200).json({
          success: true,
          message: "Your Request is Successful!"
        })
        // 
      } catch (e) {
        res.status(500).json({
          success: false,
          message: "Internal Server Error!"
        })
      }
    };
    
    default:
      res.status(500).json({
        success: false,
        message: "Internal Server Error!"
      })
  }

}
