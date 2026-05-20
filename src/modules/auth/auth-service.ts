import { pool } from "../../app";

const loginUserIntoDB = async (payLoad: {
  email: string;
  password: string;
}) => {
  const { email, password } = payLoad;
  const userData = await pool.query(
    `
    SELECT * FROM users WHERE email=$1`,
    [email],
  );
  const user = userData.rows[0];
  console.log(user);
};

export const authService = {
  loginUserIntoDB,
};
