const inputValidation = (schema) => async(req, res, next)=>{
    try {
        const bodyParse = await schema.parseAsync(req.body);
        req.body = bodyParse;
        next();

    } catch (error) {
        // const msg = error.errors[0].message
        // res.status(400).json({mesasge: msg })

        const status = 500;
        const message = error.errors[0].message;
        const errObj = { status, message };
        next(errObj);
    }
}

export default inputValidation;