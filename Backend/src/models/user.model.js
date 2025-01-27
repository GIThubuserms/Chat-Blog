import bcrypt from 'bcryptjs'; // Replaced bcrypt with bcryptjs
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
}, { timestamps: true }); // createdAt & updatedAt

userSchema.methods.verifypassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;
