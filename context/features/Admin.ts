import { InstanceApi } from "@/lib/axios";
import type { ZUser } from "@/types/user-admin";
import Cookies from "js-cookie"
import { toast } from "sonner";

export  const validateTokenAdmin = async (getCookies:string) => {
  try {
    const admin = await InstanceApi.get("/token", {
      headers: {
        jwt: getCookies
      }
    })
    return admin?.data
  } catch (error) {
    toast("Session Expired", {
      description: "Your authentication token has expired. Please sign in again.",
      action: {
        label: "Sign In",
        onClick: () => console.log("Redirecting to login..."),
      },
    })
  }
}
export const LoginAdmin = async (user:ZUser) => {
  try {
    const token = await InstanceApi.post("/auth/login", {
      email: user.email, 
      password: user.password
    })
    Cookies.set("auth", token.data.token)
   
    location.replace("/dashboard")
  } catch (error) {
    toast("Invalid Login", {
      description: "Email or password is incorrect.",
      action: {
        label: "close",
        onClick: () => {},
      },
    })
  }
}
export const registerAdmin = async (user:ZUser) => {

  const { email, password, name } = user

  try {
    const createUser = await InstanceApi.post("/auth/register", {
        name,
        password,
        email
    })

    Cookies.set("auth", createUser?.data?.token)
    location.replace("/dashboard")
 
  } catch (error) {
    console.log("this erro to create admin user", error)
  }

}