import { NextApiRequest, NextApiResponse } from "next"
import SponsorModel from "@/app/models/Sponsor"
import "../../db"

type ResponseData = {
  success: boolean
  message: string
}

export default async function hello(req: NextApiRequest, res: NextApiResponse<ResponseData> ) {
  const { email } = JSON.parse(req.body)

  switch (req.method) {
    case "POST": {
      try {
        const sponsor = await SponsorModel.findOne({ email })
        if (sponsor !== null) return res.status(422).json({ success: false, message: "Email already exitsts!"})

        SponsorModel.create({
          email
        })

        res.status(200).json({
          success: true,
          message: "Your Request Successful!"
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
