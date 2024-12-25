import dbConnect from "@/lib/dbConnnect";
import UserModel from "@/model/User";
import {z} from "zod";
import { usernameValidation } from "@/schemas/signupSchema";

const UsernameQuerySchema = z.object({
    username: usernameValidation,
})

export async function GET(request: Request){
        await dbConnect();
        try 
        {
           const {searchParams} = new URL(request.url)
           const queryParam = {
            username: searchParams.get("username")
           } 
           const result = UsernameQuerySchema.safeParse(queryParam)
        } catch (error) {
            console.error("Error checking username ",error)
            return Response.json(
                {
                    success:false,
                    message:"Error checking username"
                },
                {
                    status:500
                }
            )
        }
}