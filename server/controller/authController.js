export function login(req,res) {
    console.log("login : ", req.body);
    res.status(200).json({data : req.body});
}

export function signUp(req,res){
    console.log("signup : ",req.body);
    res.status(201).json({data : req.body});
}