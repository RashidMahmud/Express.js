import { pool } from "../../app";

const createProfileIntoDB = async (payLoad: any) => {
  //   console.log(payLoad);
  const { user_id, bio, address, phone, gender } = payLoad;

  const user = await pool.query(
    `
    SELECT * FROM users WHERE id = $1`, [user_id],
  );
};

export const profileService = {
  createProfileIntoDB,
};
