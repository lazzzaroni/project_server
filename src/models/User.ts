import { model, Schema } from "mongoose";
import { IImages, IUser } from "./interfaces";

const ImagesSchema = new Schema<IImages>({
  name: String,
  uploadedAt: { type: Date, default: () => Date.now() },
});

const UserSchema = new Schema<IUser>({
  name: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
    required: [true, "Cannot create user without an email."],
    validate: {
      validator: (value: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "{VALUE} is not a valid email!",
    },
  },
  password: { type: String, required: true, minlength: 8 },
  birthdate: { type: Date },
  images: [ImagesSchema],
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
