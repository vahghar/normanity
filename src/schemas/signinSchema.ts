import {z} from "zod";
import { passwordValidation } from "./signupSchema";

export const signinSchema = z.object({
    identifier: z.string(),
    password: passwordValidation
})