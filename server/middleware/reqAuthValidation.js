import z from 'zod';

const loginSchemaValidation = z.object({
    userEmail : z.string().trim().email("invalid email address").toLowerCase(),
    userPassword : z.string().min(5),
    RememberMe: z.boolean().optional(),
})

const signupSchemaValidation = z.object({
    fullName: z.string().trim().toLowerCase(),
    workEmail: z.string().trim(),
    userPassword: z.string(),
    organization: z.string(),
    role: z.enum(["Admin", "Project Manager","Scrum Master","Developer","Tester","Client","viewer"])
})

export function loginvalidation(req,res,next){
    const result = loginSchemaValidation.safeParse(req.body);
    if(!result.success){
        return res.status(401).json({
            status: false,
            errors : result.error.issues
        })
    }

    const data = result.data;
    req.body = data;
    next();
}


export function signupValidation(req,res,next){
    console.log(req.body);
    const result = signupSchemaValidation.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
               status: false,
            errors : result.error.issues
        })
    }
    const data = result.data;
    req.body = data;
    next();
}