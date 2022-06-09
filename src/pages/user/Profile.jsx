import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userService from "../../service/User.services";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";

import { AuthContext } from "../../context/auth.context";

import commentService from "../../service/Comments.services";

//Components
import UserInfo from "../../components/Profile/UserInfo";
import Skills from "../../components/Profile/Skills";
import Links from "../../components/Profile/Links";
import Comments from "../../components/Profile/Comments";
import UserButtons from "../../components/Profile/UserButtons";
import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";

const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100vh;
  padding-bottom: 3rem;

  /* Button {
    margin-bottom: 0.5rem;
  } */

  .edit-profile Button {
    //margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.lightPink};
  }

  .delete-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-button Button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 2vh;
  }

  .one-comment button {
    border: none;
    border-radius: 5px;
    height: 2vh;
    width: 10vw;
    font-size: 0.6rem;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.weirdWhite};
  }

  .one-comment h5 {
    font-size: 0.6rem;
  }

  .user-comments {
    max-height: 20vh;
    overflow-y: scroll;
  }

  .user-comments h4 {
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding: 1.2rem 0.9rem 0.6rem 0;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .one-comment {
    margin: 0.5rem;
    padding: 0.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.yellow};
    border: 0.02rem solid ${({ theme }) => theme.colors.red};
    width: 50vw;
    min-height: 5vh;
    border-radius: 5px;
    gap: 5px;
  }

  @media (min-width: 700px) {
    .delete-button Button {
      height: 4vh;
      width: 10vw;
      font-size: 1rem;
    }

    .edit-profile Button {
      height: 4vh;
      width: 5vw;
      font-size: 1rem;
    }
  }
`;

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState({});
  const [receivedComments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { logoutUser } = useContext(AuthContext);

  const getUser = async () => {
    try {
      let response = await userService.getOneUser(id);
      console.log(response.data);
      setUser(response.data.user);
      setSkills(response.data.user.skills);
      setLinks(response.data.user.links);
      setComments(response.data.user.receivedComments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (id) => {
    userService.deleteCurrentUser(id);
    logoutUser();
  };

  const deleteComment = async (commentID) => {
    try {
      await commentService.removeComment(commentID);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserProfile>
      <UserInfo user={user} />
      {/*  <div className="edit-profile">
        <Link to={`/edit-profile/${user._id}`}>
          <Button>Editar</Button>
        </Link>
      </div> */}
      <Skills skills={skills} />
      <Links links={links} />

      <UserButtons user={user} />
      <form
        onSubmit={() => {
          deleteUser(user._id);
        }}
      >
        {/*   {receivedComments.map((el) => {
          return (
            <div className="one-comment" key={el._id}>
              <p>{el.comment}</p>
              <h5>
                <b>Por</b> {el.commentBy.username}
              </h5>
            </div>
          );
        })} */}

        <section className="user-comments">
          {receivedComments.length > 0 && (
            <>
              <h4>Comentários:</h4>

              {receivedComments.map((el) => {
                return (
                  <div className="one-comment" key={el._id}>
                    <p>{el.comment}</p>
                    <h5>
                      <b>Por</b> {el.commentBy.username}
                    </h5>
                    <button onClick={() => deleteComment(el._id)}>
                      Delete
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </section>
        {/*   <Comments receivedComments={receivedComments} /> */}
        <div className="delete-button">
          <DeleteButton type="submit">Apagar conta</DeleteButton>
        </div>
      </form>
    </UserProfile>
  );
}

export default Profile;
