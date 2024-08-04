import { getAllUsers, register } from "../services/user.service";

const resolvers = {
  Query: {
    users: () => getAllUsers(),
  },
  Mutation: {
    registerUser: (_, { userData }) => register(userData),
  },
};

export default resolvers;
