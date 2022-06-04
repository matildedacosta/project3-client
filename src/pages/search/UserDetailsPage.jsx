import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userService from "../../service/User.services";

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState({});
  const [receivedComments, setComments] = useState([]);

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

  return (
    <div>
      {" "}
      <main>
        <img src={user.image} alt="profile-img" />
        <h4>{user.username}</h4>
        <h1>Name: {user.fullName}</h1>
        <h5>Localidade: {user.location}</h5>
        <p>{user.description}</p>
        <h5>As minhas ligações com a música:</h5>
        <ul>
          {skills.map((skill) => {
            return (
              <div key={skill}>
                <li>{skill}</li>
              </div>
            );
          })}
        </ul>
        <div className="user-links">
          <a href={links.spotify} target="_blank">
            <img src="" alt="spotify-icon" />
          </a>
          <a href={links.instagram} target="_blank">
            <img src="" alt="spotify-icon" />
          </a>
          <a href={links.facebook} target="_blank">
            <img src="" alt="spotify-icon" />
          </a>
          <a href={links.youtube} target="_blank">
            <img src="" alt="spotify-icon" />
          </a>
          <a href={links.soundcloud} target="_blank">
            <img src="" alt="soundcloud-icon" />
          </a>
          <a href={links.portfolio} target="_blank">
            <img src="" alt="spotify-icon" />
          </a>
        </div>

        <h5>Comentários:</h5>
        <form>
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
          ></textarea>
        </form>
        <div className="comments">
          {receivedComments.map((comment) => {
            return (
              <div>
                <p>{comment.comment}</p>
                <h6>{comment.commentBy}</h6>
              </div>
            );
          })}
        </div>
        {/* <Link to={`/edit-profile/{user._id}`}>
          <button>Follow</button>
        </Link> */}
      </main>
    </div>
  );
}

export default UserDetailsPage;
