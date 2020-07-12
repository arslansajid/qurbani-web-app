import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDropzone} from 'react-dropzone';
import Colors from "../../styles/Colors"

const ImagePicker = (props) => {
  console.log(props)
  const [files, setFiles] = useState(props.image);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      if(!!acceptedFiles) {
        props.setImage(acceptedFiles);
      }
    }
  });
  
  const thumbs = files.map(file => (
    <div key={file.name}>
      <Thumb>
        <ThumbInner>
          <Image
            src={file.preview}
          />
        </ThumbInner>
      </Thumb>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    // files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <DropZone {...getRootProps({className: 'dropzone'})}>
        <ImageContainer>
          <input {...getInputProps()} />
          <Picker>
            <PickerText>
              Upload Pictures
            </PickerText>
          </Picker>
        </ImageContainer>
      </DropZone>
      <ThumbContainer>
        {thumbs}
      </ThumbContainer>
    </>
  );
}

const ThumbContainer = styled.div`
  display: flex;
	// justify-content: center;
  align-items: center;
  margin: 10px 0 10px;
`;

const Thumb = styled.div`
  cursor: pointer;
  display: inline-flex;
  border-radius: 2;
  width: 78px;
  height: 78px;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 10px;
  object-fit: contain;

  @media (max-width: 425px) {
    width: 64px;
    height: 64px;
  }
`;

const ThumbInner = styled.div`
  min-width: 0;
  overflow: hidden;
  border-radius: 3px;
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
  overflow: hidden;

  @media (max-width: 425px) {
    width: 64px;
    height: 64px;
  }
`;


const DropZone = styled.div`
	width: 100%;
	height: 100%;
  background-color: transparent;
  z-index: 100;
`;

const ImageContainer = styled.div`
	background-color: ${Colors.appRed};
	display: flex;
	justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  padding: 10px;

`;

const Picker = styled.div`
	width: 100%;
  height: 100%;
  min-height: 100px;
	border: 1px dashed white;
	display: flex;
	justify-content: center;
  align-items: center;
  
  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;

const PickerText = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
`;

export default ImagePicker;