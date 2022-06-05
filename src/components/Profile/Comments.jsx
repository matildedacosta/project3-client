import React from "react";
import styled from "styled-components";
import Button from "../Button";

const UserComments = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //padding: 1rem;
  textarea {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }

  .comments {
    margin: 0.5rem;
  }
`;

function Comments(props) {
  const { receivedComments } = props;

  return (
    <UserComments>
      <h5>Comentários:</h5>
      <form>
        <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
        <Button>Comentar</Button>
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
    </UserComments>
  );
}

export default Comments;
