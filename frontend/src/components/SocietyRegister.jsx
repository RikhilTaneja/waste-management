import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SocietyRegister() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(watch())
  const FormSubmitHandler = (formData) => {
    console.log(formData);
    const id = toast.loading("Signing Up...");
    setTimeout(() => {
      axios
        .post("", formData)
        .then((result) => {
          console.log("ADDED");
          toast.update(id, {
            render: "Signed Up",
            type: "success",
            isLoading: false,
          });
          setLogin(loginCheck());
          setTimeout(() => {
            navigate("");
          }, 1200);
        })
        .catch((err) => {
          console.log(err);
          toast.update(id, {
            render: "Username exists",
            type: "error",
            isLoading: false,
          });
        });
    }, 1000);
  };

  return (
    <div className="form-parent">
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
        <Text as="b" fontSize="2.3vmax" color="green">
          Register your society
        </Text>
        <Text as="i" fontSize="1.5vmax" color="green">
          Enter the following details!
        </Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550" color="green">
            Name
          </FormLabel>
          <Input
            type="text"
            borderColor="green"
            {...register("name", {
              required: "name is required",
            })}
          />
          <p className="err">{errors.name?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550" color="green">
            Location
          </FormLabel>
          <Input
            type="text"
            borderColor="green"
            {...register("location", {
              required: "location is required",
            })}
          />
          <p className="err">{errors.location?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550" color="green">
            No of residents
          </FormLabel>
          <Input
            type="number"
            borderColor="green"
            {...register("residents", {
              required: "no of residents is required",
            })}
          />
          <p className="err">{errors.residents?.message}</p>
        </FormControl>
        <Button type="submit" colorScheme="green">
          Submit
        </Button>
      </form>
    </div>
  );
}
