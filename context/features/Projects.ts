import { InstanceApi } from "@/lib/axios";
import Cookies from "js-cookie";
import { toast } from "sonner";

export const createNewProject = async (name_app:string, description: string) => {
  const token = Cookies.get("auth"); 

  if (!token) {
    toast("Session Expired", {
      description: "No authentication token found. Please sign in again.",
      action: {
        onClick: () => location.replace("/login"),
        label: "Sign In",
      },
    });
    return null;
  }

  try {
    const response = await InstanceApi.post(
      "/create/app",
      { name_app, description },
      {
        headers: { jwt: token },
      }
    );
    toast("Project Created", {
      description: `The project "${name_app}" was successfully created.`,
      action: {
        label: "Close",
        onClick: () => {},
      },
    }); 
    location.replace("/dashboard")
    return response.data; 
  } catch (error: any) {
    console.log(error);
    Cookies.remove("auth");
    location.reload();
    toast("Session Expired", {
      description: "Your authentication token has expired. Please sign in again.",
      action: {
        label: "Sign In",
        onClick: () => {
       
        },
      },
    });
    return null;
  }
};
