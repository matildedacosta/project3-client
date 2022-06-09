import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import userService from "../../service/User.services";
import followService from "../../service/Follow.services";
import commentService from "../../service/Comments.services";
import styled from "styled-components";
import { AuthContext } from "../../context/auth.context";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import UserInfo from "../../components/Profile/UserInfo";
import Skills from "../../components/Profile/Skills";
import Links from "../../components/Profile/Links";
import Button from "../../components/Button";

const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .edit-profile {
    display: none;
  }

  .follow-button button {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.yellow};
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

  .follow-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .follow-button button {
    height: 3vh;
    width: 15vw;
    border: none;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 5px;
  }

  h6 {
    font-size: 0.6rem;
  }

  form button {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.red};
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    width: 40vw;
    height: 3vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  textarea {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    border: 0.05rem solid ${({ theme }) => theme.colors.yellow};
  }

  .info button {
    margin-bottom: 0.5rem;
  }

  #remove-follow {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.red};
    width: 30vw;
  }

  #add-follow {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.weirdWhite};
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

  @media (min-width: 700px) {
    .user-comments h4 {
      font-size: 1rem;
    }

    .info {
      display: flex;
      flex-direction: column;
    }

    .user-comments {
      margin-top: 1rem;
      /*  display: flex;
      //flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap; */
      max-height: 20vh;
      overflow-y: scroll;
    }

    .follow-button button {
      height: 3vh;
      width: 4vw;
      font-size: 0.9rem;
    }

    .one-comment {
      padding: 0.5rem;
      width: 20vw;
      min-height: 5vh;
      border-radius: 5px;
      gap: 5px;
    }

    textarea {
      width: 30vw;
      height: 10vh;
    }

    form button {
      width: 10vw;
    }
  }
`;

function UserDetailsPage() {
  const { id } = useParams();
  const [userDetails, setUser] = useState(null);
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState({});
  const [receivedComments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [follow, setFollow] = useState("");
  const [loggedUser, setLoggedUser] = useState();
  const [paramsId, setParamsId] = useState("");

  //console.log(links);

  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const addFollow = async (id) => {
    try {
      setFollow("true");
      await followService.addFollow(id);
      successHandle(`Segues ${userDetails.username}`);
      //change button
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const removeFollow = async (id) => {
    try {
      await followService.removeFollow(id);
      setFollow("false");
      errorHandle(`Deixaste de seguir ${userDetails.username}`);
    } catch (err) {
      console.log(err);
    }
  };

  

  const errorHandle = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      //hideProgressBar: true,
    });
  };
  const successHandle = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      //hideProgressBar: true,
    });
  };

  const getUser = async () => {
    try {
      let response = await userService.getOneUser(id);
      setUser(response.data.user);
      setSkills(response.data.user.skills);
      setLinks(response.data.user.links);
      setComments(response.data.user.receivedComments);
      setParamsId(response.data.user._id);
      checkFollowStatus(response);
    } catch (error) {
      console.log(error);
    }
  };

  const checkFollowStatus = (response) => {
    if (response.data.user.followers.length === 0) {
      setFollow("true");
    } else {
      for (let i = 0; i < response.data.user.followers.length; i++) {
        if (response.data.user.followers[i]._id === user._id) {
          setFollow("false");
          break;
        } else setFollow("true");
      }
    }
  };

  useEffect(() => {
    getUser();
  }, [checkFollowStatus]);

  const handleComments = (e) => {
    setComment(e.target.value);
  };

  const postComment = async () => {
    try {
      const body = { comment };
      await commentService.addComment(id, body);
      console.log(body);
      setComment("");
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const submitComment = (e) => {
    e.preventDefault();
    postComment();
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
    <>
      <ToastContainer />
      {userDetails !== null && user && (
        <UserProfile>
          <UserInfo user={userDetails} />
          <div className="info">
            <div className="follow-button">
              {follow === "true" && (
                <button
                  id="add-follow"
                  onClick={() => {
                    addFollow(userDetails._id);
                  }}
                >
                  Seguir
                </button>
              )}
              {follow === "false" && (
                <button
                  id="remove-follow"
                  onClick={() => {
                    removeFollow(userDetails._id);
                  }}
                >
                  Deixar de Seguir
                </button>
              )}
            </div>

            <Skills skills={skills} />
            <Links links={links} />
          </div>
          <form onSubmit={submitComment}>
            <textarea
              value={comment}
              name="comments"
              cols="30"
              rows="5"
              onChange={handleComments}
            ></textarea>
            <button type="submit">Comentar</button>
          </form>

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
        </UserProfile>
      )}
    </>
  );
}

export default UserDetailsPage;
