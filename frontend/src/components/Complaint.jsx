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
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Complaint() {
  const [comp, setComp] = useState({});
  const [count, setCount] = useState(1);
  const [length, setLength] = useState(1);
  const [image, setImage] = useState("");
  const categories = ["Industrial", "Event", "Societal Waste", "Others"];

  function handleButtonClick(value) {
    setComp({ category: value });
    nextDetail();
  }

  function nextDetail() {
    setCount(count + 1);
    setLength((count + 1) * 33.3);
  }
  function lastDetail() {
    setCount(count - 1);
    setLength(1);
  }
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function handleSubmitForm(data) {
    setComp((prevData) => ({
      ...prevData,
      title: data.title,
      description: data.description,
      address: data.address,
    }));
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  let base64;
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    base64 = await convertToBase64(file);
  };

  const imageFileUpload = async () => {
    setImage({ ...image, myFile: base64 });
    setComp((prevData) => ({
      ...prevData,
      image: base64,
    }));
  };

  let finalSubmit = () => {
    const id = toast.loading("Signing Up...");
    axios
      .post("https://waste-management-theta.vercel.app/complaint/new", comp)
      .then(() => {
        toast.update(id, {
          render: "Complaint Registered!",
          type: "success",
          isLoading: false,
        });
        setTimeout(()=>{
          navigate("/");
        }, 1500)
      })
      .catch((err) => {
        console.log(err);
        toast.update(id, {
          render: "An Error Occured :(",
          type: "error",
          isLoading: false,
        });
      });
  };

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
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      className="category-btn"
                      background="none"
                      border="3px green solid"
                      height="6vmax"
                      width="100%"
                      onClick={() => handleButtonClick(category)}
                    >
                      {category}
                    </Button>
                  ))}
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
                <div className="form-paren">
                  <form
                    className="form"
                    onSubmit={handleSubmit(handleSubmitForm)}
                  >
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
                        {...register("address", {
                          required: "Please provide the required Address",
                        })}
                      />
                      <p className="err">{errors.address?.message}</p>
                    </FormControl>
                    <Button type="submit" colorScheme="green">
                      Submit
                    </Button>
                  </form>
                </div>
                <div className="next-button">
                  <div className="buttons">
                    <Button
                      onClick={lastDetail}
                      color="white"
                      backgroundColor="greenyellow"
                    >
                      Back
                    </Button>

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
        return (
          <>
            <div className="tag-line">
    <ToastContainer />
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
                      onChange={(e) => handleFileUpload(e)}
                    />
                    <Button onClick={imageFileUpload}>Upload!</Button>
                  </form>
                </div>
                <div className="next-button">
                  <div className="buttons">
                    <Button onClick={lastDetail}>Back</Button>

                    <Button colorScheme="red" onClick={finalSubmit}>
                      Submit
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
