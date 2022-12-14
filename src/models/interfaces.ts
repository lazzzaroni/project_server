import { Types } from "mongoose";

export interface IUser {
  id: Types.ObjectId;
  name: String;
  email: IEmail;
  password: String;
  birthdate: Date;
  images: IImages;
  isAdmin: Boolean;
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

export interface IImages {
  id: Types.ObjectId;
  name: String;
  uploadedAt: Date;
}

export interface IEvent {
  name: String;
  description: String;
  startDate: Date;
  isOnline: boolean;
  address: String;
}
