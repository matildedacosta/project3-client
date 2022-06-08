import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import userService from "../../service/User.services";
import followService from "../../service/Follow.services";
import commentService from "../../service/Comments.services";
import styled from "styled-components";
import { AuthContext } from "../../context/auth.context";

//Components
import UserInfo from "../../components/Profile/UserInfo";
import Skills from "../../components/Profile/Skills";
import Links from "../../components/Profile/Links";
import Comments from "../../components/Profile/Comments";
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
  const [userDetails, setUser] = useState({});
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState({});
  const [receivedComments, setComments] = useState([]);
  const [newComments, setNewComments] = useState("");
  const [follow, setFollow] = useState();
  const [loggedUser, setLoggedUser] = useState();
  const [paramsId, setParamsId] = useState("");

  //console.log(links);

  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const addFollow = async (id) => {
    try {
      setFollow(false);
      await followService.addFollow(id);
      console.log("clButton", follow);
      //change button
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const removeFollow = async (id) => {
    try {
      console.log("click", follow);
      setFollow(true);
      await followService.removeFollow(id);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      let response = await userService.getOneUser(id);
      //console.log(response.data);
      setUser(response.data.user);
      setSkills(response.data.user.skills);
      setLinks(response.data.user.links);
      setComments(response.data.user.receivedComments);
      setParamsId(response.data.user._id);
      console.log(response.data.user.receivedComments);

      if (response.data.user.followers.includes(user._id)) {
        setFollow(false);
      } else return setFollow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleComments = (e) => {
    setNewComments(e.target.value);
  };

  const submitComment = async (e, id) => {
    try {
      e.preventDefault();
      const body = { newComments };
      await commentService.addComment(id, body);
      console.log(body);
      setNewComments("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserProfile>
      <UserInfo user={userDetails} />
      <div className="info">
        <div className="follow-button">
          {follow === true && (
            <button
              onClick={() => {
                addFollow(id);
              }}
            >
              Seguir
            </button>
          )}
          {follow === false && (
            <button
              onClick={() => {
                removeFollow(id);
              }}
            >
              Deixar de Seguir
            </button>
          )}
        </div>

        <Skills skills={skills} />
        <Links links={links} />
      </div>
      <form
        onSubmit={(paramsId) => {
          submitComment(paramsId);
        }}
      >
        <textarea
          value={newComments}
          name="comments"
          cols="30"
          rows="5"
          onChange={handleComments}
        ></textarea>
        <button type="submit">Comentar</button>
      </form>

      <section className="user-comments">
        <h4>Comentários:</h4>
        {receivedComments.map((el) => {
          return (
            <div className="one-comment" key={el._id}>
              <p>{el.comment}</p>
              <h5>
                <b>Por</b> {el.commentBy.username}
              </h5>
            </div>
          );
        })}
      </section>
    </UserProfile>
  );
}

export default UserDetailsPage;
