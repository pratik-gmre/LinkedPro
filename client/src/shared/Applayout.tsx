import React, { useEffect } from "react";
import { Header } from "../component/Header/Header";
import axios from "axios";



export const AppLayout =
  <P extends object>( WrappedComponent : React.FC<P>): React.FC<P> =>
  (props: any): JSX.Element => {
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/api/user/profile",
            {
              withCredentials: true,
            }
          );
          console.log("Profile fetched:", response.data);
        } catch (err) {
          console.error("Error fetching profile:", err);
        }
      };

      fetchProfile();
    }, []);

    return (
      <>
        <Header />
        <WrappedComponent {...props} />
      </>
    );
  };
