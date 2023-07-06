"use server"


export async function postSponsorData(data: FormData) {
  console.log(data.get("email"))
  return {
    success: true,
    message: "Your Request has been sent!"
  }
}