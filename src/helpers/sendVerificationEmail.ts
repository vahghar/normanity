import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(username: string, email: string, verifyCode: string): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: "randomforme10g@gmail.com",
            to: email,
            subject: "Verification Code",
            react: VerificationEmail({username, otp:verifyCode})
        });
        return {success: true,message:"Verification email sent successfully"};
    } catch (emailError) {
        console.log("Error sending verification email",emailError);
        return {success: false,message:"Error sending verification email"}
    }
}