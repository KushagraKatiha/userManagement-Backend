const userModel = require('../model/userModel.js')


// To regester user 

exports.register= async (req, res)=>{
   try {
    const {name, email, password} = req.body

    // validation for creating user
    if(!name || !email || !password){                  // check if any field is missing
        throw new Error(`All fields are required`)
    }

    const userExists = await userModel.findOne({email})         // check if user already registered with same email id
    if(userExists){
        throw new Error(`User already exists`)
    }
    const newUser = await userModel.create({                  // register user if all the checks are passed
        name,
        email,
        password
    })

    res.status(201).json({
        success: true,
        message: "User registered successfully"
    })


   } catch (error) {
    res.status(401).json({
        success: false,
        message: error.message
    })
   }
}


// To login user

exports.login = async (req, res)=>{
    try {
        const {email, password} = req.body              


        if(!email || !password){
            throw new Error(`Both fields are required`)         // check if both fields are provided by user
        }

        const user = await userModel.findOne({email})

        if(!user){
            throw new Error(`No account associated with this email `)       // check if email is registered or not
        }
        if(password != user.password){
            throw new Error(`Password didn't match`)                    // check if password is correct
        }
        res.status(201).json({
            success: true,
            message: "User login successfully"
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}