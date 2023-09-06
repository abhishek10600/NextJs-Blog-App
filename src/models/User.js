import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User