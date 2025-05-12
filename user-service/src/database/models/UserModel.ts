import mongoose, { Document, Schema } from "mongoose";
import validator, { trim } from "validator";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        validate: {
            validator: (value: string) => {
                return validator.isAlpha(value, "en-US", { ignore: " " });
            }
        },
        minlength: 3
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, "Email is required"],
        validate: {
            validator: (value: string) => {
                return validator.isEmail(value);
            }
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 4,
        validate: {
            validator: (value: string) => {
                return validator.isLength(value, { min: 6 });
            }
        }
    },
}, {
    timestamps: true,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const user = mongoose.model<IUser>("User", userSchema);
export default user;