import { createContext, useEffect, useState } from "react";

export const AppContext  = createContext()


export function AppContextProvider({children}){

    let [users,setUsers] = useState([])

    async function getAllUser(){

        let res = await fetch(import.meta.env.VITE_APP_BASE_URL+"/getUser",{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
          })


        let datas = await res.json()
        setUsers(datas)
    
    }

    const createUser = async (data) => {

        const savedUserResponse = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/addUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
    
      };
        


    let value = {
        users,
        getAllUser,
        createUser
    }




    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}