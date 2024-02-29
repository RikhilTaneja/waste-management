import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Complaint() {
  const [count, setCount] = useState(1);
  const [length, setLength] = useState(10);
  const [image, setImage] = useState("");

  function nextDetail() {
    setCount(count + 1);
    setLength((count + 1) * length);
  }
  function lastDetail() {
    setCount(count - 1);
  }
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // console.log(watch())
  //   const FormSubmitHandler = (data) => {
  //     axios
  //       .post("https://technology-fails.onrender.com/posts", data)
  //       .then(() => {
  //         console.log("ADDED");
  //         navigate("/listings");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    });
  }

  let base64;
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    base64 = await convertToBase64(file)
  }

  const imageFileUpload = () => {
    setImage({...image, myFile:base64})
    setImage((prevImage)=>{
      return {
        ...prevImage,
        myFile: base64
      };
    })
    console.log(image);
  }
  const lgog = () => {
    console.log(image);
  }

  function complaint() {
    switch (count) {
      case 1:
        return (
          <div className="tag-line">
            <div className="complaint-box">
              <div>
                <div className="tag-heading">Lets register your complaint</div>
                <div className="tag-subHeading">Select the category.</div>
              </div>
              <div className="catrgory-div">
                <SimpleGrid columns={[1, 1, 1, 4]} spacing={10}>
                  <Button
                    background="none"
                    border="3px black solid"
                    height="6vmax"
                    width="100%"
                    fontSize="1.2vmax"
                  >
                    category1
                  </Button>
                  <Button
                    background="none"
                    border="3px black solid"
                    height="6vmax"
                    width="100%"
                    fontSize="1.2vmax"
                  >
                    category2
                  </Button>
                  <Button
                    background="none"
                    border="3px black solid"
                    height="6vmax"
                    width="100%"
                    fontSize="1.2vmax"
                  >
                    category4
                  </Button>
                  <Button
                    background="none"
                    border="3px black solid"
                    height="6vmax"
                    width="100%"
                    fontSize="1.2vmax"
                  >
                    others
                  </Button>
                </SimpleGrid>
              </div>
              <div className="next-button">
                <Button colorScheme="red" onClick={nextDetail}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <>
            <div className="tag-line">
              <div className="complaint-box">
                <div className="tag-heading">Let us know more details.</div>
                <div className="tag-subHeading">
                  It will help us work on it ASAP..
                </div>
                <div className="form-parent">
                  <form className="form" onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
                        Title
                      </FormLabel>
                      <Input
                        type="text"
                        borderColor="black"
                        {...register("title", {
                          required: "Title is required",
                          maxLength: { value: 40, message: "Max 40 Chars" },
                        })}
                      />
                      <p className="err">{errors.title?.message}</p>
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
                        Description
                      </FormLabel>
                      <Textarea
                        type="text"
                        borderColor="black"
                        {...register("description", {
                          required: "Please provide the required description",
                        })}
                      />
                      <p className="err">{errors.description?.message}</p>
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
                        Address
                      </FormLabel>
                      <Input
                        type="text"
                        borderColor="black"
                        {...register("a ddress", {
                          required: "Please provide the required Address",
                        })}
                      />
                      <p className="err">{errors.address?.message}</p>
                    </FormControl>
                  </form>
                </div>
                <div className="next-button">
                  <div className="buttons">
                    <Button onClick={lastDetail}>Back</Button>

                    <Button colorScheme="red" onClick={nextDetail}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        break;
      case 3:
        return(
          <>
            <div className="tag-line">
              <div className="complaint-box">
                <div className="tag-heading">Upload the image!</div>
                <div className="tag-subHeading">
                  It will help us find the spot fast without disturbing you!
                </div>
                <div className="form-parent">
                  <form className="form" onSubmit={handleSubmit}>
                  <input
            type="file"
            label="Image"
            name="myFile"
            id="file-upload"
            accept=".jpeg, .png, .jpg"
            onChange={(e)=>handleFileUpload(e)}
          />
                    <Button onClick={imageFileUpload}>Upload!</Button>
                  </form>
                </div>
                <div className="next-button">
                  <div className="buttons">
                    <Button onClick={lastDetail}>Back</Button>

                    <Button colorScheme="red" onClick={nextDetail}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        break;
    }
  }
  return (
    <div className="complaint-parent">
      <div className="progress-div">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${length}%` }}></div>
        </div>
      </div>
      {complaint()}
    </div>
  );
}
