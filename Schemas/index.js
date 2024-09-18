import * as z from 'zod';

export const LoginSchema = z.object ({

    email: z.string().email({
        email:'Email is Required',

    }),
    password: z.string().min(4, {
        message:"Password is required",
    }),
}) ;


export const RegisterSchema = z.object ({
    name: z.string().min(1, {
        message:"Name is requred"
    }),

    email: z.string().email({  
        email:'Email is Required',

    }),
    password: z.string().min(6, {
        message:"Minimum 6 charatacters is requred"
    }),
   
}) ;