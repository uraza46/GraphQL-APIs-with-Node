import { UserModel } from "../models";
import { User } from "../models/user.model";

export const register = async (userData: User) => {
  return UserModel.create(userData);
};

export const getAllUsers = async () => {
  return UserModel.find();
};
