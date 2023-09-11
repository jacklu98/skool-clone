// import { findUserByEmail } from './userApi';

const bcrypt = require('bcrypt');

export async function generateHashPassword(password: string) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

//create this function for login api
// export async function compareHashPasswordWith(email: string, password: string) {
//   const user = await findUserByEmail(email);
//   const savedPassword = user.password;
//   return await bcrypt.compare(password, savedPassword);
// }
