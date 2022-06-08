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

  @media (min-width: 700px) {
    margin: 1rem 0;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h5 {
      font-size: 1rem;
    }

    textarea {
      height: 20vh;
      width: 40vw;
    }

    Button {
      font-size: 0.9rem;
      width: 40vw;
      height: 3vh;
    }
  }
`;

function Comments(props) {
  const {
    receivedComments,
    userDetails,
    submitComment,
    newComments,
    handleComments,
  } = props;

  return (
    <UserComments>
      <h5>Comentários:</h5>
       <form
        onSubmit={() => {
          submitComment(userDetails._id);
          console.log(userDetails);
        }}
      >
        <textarea
          value={newComments}
          name="comments"
          cols="30"
          rows="5"
          onChange={handleComments}
        ></textarea>
        <Button type="submit">Comentar</Button>
      </form>
      <div className="comments">
        {receivedComments.map((comment) => {
          return (
            <div key={comment._id}>
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
