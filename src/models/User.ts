import { Types, model, Schema } from "mongoose";

export interface IUser {
  id: Types.ObjectId;
  name: String;
  email: IEmail;
  password: String;
  createdAt: Date;
  updatedAt: Date;
}

interface IEmail {
  type: String;
  lowercase: boolean;
  unique: boolean;
  trim: boolean;
  required: boolean;
  validate: {
    validator: Function;
  };
}

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
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
