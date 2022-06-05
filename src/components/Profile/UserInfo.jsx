import React from "react";
import styled from "styled-components";

const User = styled.main`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;

  h4 {
    font-size: 0.7rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.red};
  }

  h1 {
    font-size: 1.2rem;
    padding: 0.5rem 0 0.1rem;
  }

  h5 {
    font-size: 0.8rem;
    font-weight: 300;
  }

  p {
    font-size: 0.9rem;
  }

  .profile-img {
    height: 20vh;
    border-radius: 5px;
  }
`;

function UserInfo(props) {
  const { user } = props;
  return (
    <User>
      <img className="profile-img" src={user.image} alt="profile-img" />
      <h4>{user.username}</h4>
      <h1>{user.fullName}</h1>
      <h5>{user.location}</h5>
      <p>{user.description}</p>
    </User>
  );
}

export default UserInfo;
