"use client";
import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { validateTokenAdmin } from "./features/Admin";
export const ContextApi = createContext({});

type ZChildren = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: ZChildren) {
  
  const [user, setUser] = useState<any>();


  const destructToken = () => {
    const token = Cookies.remove("auth")
    location.reload();
  }

  const getCookies:any = Cookies.get("auth");
  
  useEffect(() => {
    if (!getCookies) {
      setUser(null);
    } else {
      async function getUser(){
        const data =  await validateTokenAdmin(getCookies);
        setUser(data?.data)
      }
      getUser();
    }
  }, []);


  
  return <ContextApi value={{ user, destructToken }}>{children}</ContextApi>;
}
