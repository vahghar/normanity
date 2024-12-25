import { use } from "react";
import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3, "Username must be atleast 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Only letters and numbers are allowed");

export const passwordValidation = z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .regex(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,
        "Password must contain at least one uppercase letter and one special character"
    );

export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Please enter a valid email address"}),
    password: passwordValidation
})