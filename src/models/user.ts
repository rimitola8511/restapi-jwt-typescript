import { model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document{
    email: string,
    password: string
    comparePassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    }, 
    password: {
        type: String,
        required: true
    }
})

// Ustiliza smacsript 5 para poder hacer referencia a this
// al modelo userSchema, para poder usar this.emai o this.password
userSchema.pre<IUser>('save', async function (next) {
    const user = this
    if (!user.isModified()) {
        return next()
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    next()
})

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
   return await bcrypt.compare(password, this.password)
}

const userModel = model<IUser>('user', userSchema)

export default userModel