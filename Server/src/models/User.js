const mongoose = require('mongoose')
const validator = require('validator')
const jsonwebtoken = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(!validator.matches(value, /^[a-z0-9_.-]{3,15}$/)){
                throw new Error('Username is Invalid')
            }
        }
        },
    email: {
        type: String,
        // required: this.username == null || typeof username == 'undefined',
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }

        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens : [
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})

userSchema.methods.generateAuthToken =  async function () {
    
    const user = this;
    let token;
    try {
        token = jsonwebtoken.sign({_id : user._id.toString()}, "upfunds-secret", {expiresIn : "3d"})
        user.tokens = user.tokens.concat( { token } );
        await user.save();
    } catch(error){
        throw new Error("Error generating token", {
            error
        })
    }

    return token;
}

userSchema.pre('save', async function (next) {
    const user = this
    // if (user.isModified('password')) {
    //     user.password = await bcrypt.hash(user.password, 8)
    // }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User