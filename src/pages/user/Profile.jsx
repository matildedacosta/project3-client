import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userService from "../../service/User.services";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState("");

  const getUser = async () => {
    try {
      let response = await userService.getOneUser(id);
      console.log(response.data);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main>
      <h1>{user.fullName}</h1>
      
    </main>
  );
}

export default Profile;
