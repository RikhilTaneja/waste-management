import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookie";
import {
  BarLoader,
  ClimbingBoxLoader,
  ClockLoader,
  MoonLoader,
  PacmanLoader,
  PuffLoader,
  PulseLoader,
  RiseLoader,
} from "react-spinners";

export default function CardDetail() {
  let loadersArray = [
    <BarLoader color="green" />,
    <ClimbingBoxLoader color="green" />,
    <ClockLoader color="green" />,
    <MoonLoader color="green" />,
    <PuffLoader color="green" />,
    <PacmanLoader color="green" />,
    <PulseLoader color="green" />,
    <RiseLoader color="green" />,
  ];
  let randomLoader = Math.floor(Math.random() * 8);
  const navigate = useNavigate();
  const username = getCookie("username");
  let { id } = useParams();
  const [societyData, setSocietyData] = useState({});
  const [residentsData, setResidentsData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:8080/society/details/${id}`)
        .then((res) => {
          console.log(res.data);
          setSocietyData(res.data.societyData);
          setResidentsData(res.data.residentsData); // Assuming users data is what you're getting for residents
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data === "Post not found..!") {
            toast.error("Post not found!");
          } else {
            toast.error("Server side error or wrong ID..!");
          }
        });
    }, 100);
  }, [id]); // Adding id as a dependency to re-fetch data when id changes

  console.log(societyData);
  console.log(residentsData);

  return (
    <div id="listings-parent">
      {residentsData.length == 0 ? (
        <div className="loading">{loadersArray[randomLoader]}</div>
      ) : (
        <div className="society-data">
          <div className="society-name">{societyData.name}</div>
          <div className="society-users">
            {residentsData.map((resident) => (
              <div>
                <li>{resident.name}</li>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
