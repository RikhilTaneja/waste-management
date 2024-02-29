import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";





export default function Signup() {
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
          setLogin(loginCheck())
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
        <Text as="b" fontSize="2.3vmax">
          Sign Up
        </Text>
        <Text as="i" fontSize="1vmax">
          Enter the following details!
        </Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Username
          </FormLabel>
          <Input
            type="text"
            borderColor="#D0D5FA"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="err">{errors.username?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Name
          </FormLabel>
          <Input
            type="text"
            borderColor="#D0D5FA"
            {...register("name", {
              required: "name is required",
            })}
          />
          <p className="err">{errors.name?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Password
          </FormLabel>
          <Input
            type="password"
            borderColor="#D0D5FA"
            {...register("password", {
              required: "Password Required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password Not Valid (Use Special Characters & Numbers)",
              },
            })}
          />
          <p className="err">{errors.password?.message}</p>

        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Address
          </FormLabel>
          <Input
            type="text"
            borderColor="#D0D5FA"
            {...register("address", {
              required: "Address is required",
            })}
          />
          <p className="err">{errors.address?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Phone no.
          </FormLabel>
          <Input
            type="number"
            borderColor="#D0D5FA"
            {...register("contact.phone", {
              required: "Phone no is required",
              minLength: {
                value: 10,
                message: "Minimum 10 digits required",
              },
              maxLength: {
                value: 8,
                message: "Maximum 10 digits required",
              },
            })}
          />
          <p className="err">{errors.contact?.phone?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Email
          </FormLabel>
          <Input
            type="email"
            borderColor="#D0D5FA"
            {...register("contact.email", {
              required: "Email is required",
            })}
          />
          <p className="err">{errors.contact?.email?.message}</p>
        </FormControl>
        <Button type="submit" colorScheme="red">
          Submit
        </Button>
      </form>
      <Link to="/login" style={{fontSize:"2vmin",color:"lightblue",textDecoration:"underline",textAlign:"center",paddingTop:"1vmax"}}>Already a user?Login here...</Link>
    </div>
  );
}