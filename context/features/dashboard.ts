import { InstanceApi } from "@/lib/axios"
import { toast } from "sonner"
import Cookies from "js-cookie"
export const getDataDashboard =  async () => {

  const getCookies = Cookies.get("auth")

  try {
    const dashboard = await InstanceApi.get("/dashboard", {
      headers: {
        jwt: getCookies
      }
    })
    return dashboard?.data
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
