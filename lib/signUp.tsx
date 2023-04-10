import axios from "axios";

export default async function signUp(user: UserForm) {
  try {
    const res = await axios.post(
      "https://projeto-libras-server-60xh21tlg-karenokasaki.vercel.app/user/signup",
      user
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}
