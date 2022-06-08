import React from "react";
import Button from "../Button";
import uploadPic from "../../assets/pictures/uploadpicture.png";
import styled from "styled-components";

const ImageButton = styled.button`
  /* Insert your favorite CSS code to style a button */

  border: 0.065rem dashed grey;
  border-radius: 10px;
  height: 80px;
  width: 100%;
  background-color: transparent;

  .upload-pic {
    width: 50px;
  }

  .button-upload-pic {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function EditMyPicture(props) {
  const { handleImage } = props;

/*   const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    const getToken = localStorage.getItem("authToken");
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);
    console.log(image);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setImage(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  }; */

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.file;
    /* props.handleFile(fileUploaded); */
    handleImage(fileUploaded);
  };

  return (
    <>
      <label className="picture-input main-label" htmlFor="picture">
        Add picture
      </label>
      <ImageButton className="button-upload-pic" onClick={handleClick}>
        <img className="upload-pic" src={uploadPic} alt="upload-pic" />
      </ImageButton>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
}

export default EditMyPicture;
