import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetBaseUrl from "../conf";
import CompetenceComponent from "./competence";
import AddCompetence from "./addCompetence";
import Table from "react-bootstrap/Table";

export default function UserCompetence({
  reloadUserState,
  handleUserReload,
  reloadCompleted,
}) {
  const { userId } = useParams();

  const [userData, setUserData] = useState([]);
  const [competenceData, setCompetenceData] = useState([]);
  const apiEndPoint = GetBaseUrl() + "/api/users/" + userId + "/";

  console.log("UserDetailApi: ", apiEndPoint);
  console.log(userData); //fix this

  // function updateCopetence(event) {
  //   event.preventDefault();

  //   var fullName = event.target.elements.fullName.value;
  //   var email = event.target.elements.email.value;
  //   console.log(fullName);
  //   console.log(email);

  //   fetch(apiEndPoint, {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       fullName: fullName,
  //       email: email,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       navigate("/users");
  //     });
  // }

  // function deleteCompetence(event) {
  //   event.preventDefault();
  //   console.log("Deleting user...");
  //   fetch(apiEndPoint, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       navigate("/users");
  //     });
  // }

  useEffect(() => {
    function getUserDetails() {
      console.log("get user detail");
      fetch(apiEndPoint, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUserData(data);
          setCompetenceData(data.competence);
          reloadCompleted();
        });
    }
    getUserDetails();
  }, [apiEndPoint, reloadUserState, reloadCompleted]);

  return (
    <div>
      <br />
      <h4>Competance</h4>
      <hr />
      <AddCompetence userId={userId} handleUserReload={handleUserReload}>
        {" "}
      </AddCompetence>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Rank</th>
            <th>Skill Group</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {competenceData.map((item) => (
            <CompetenceComponent
              id={item.id}
              skill={item.skill.name}
              skillGroup={item.skill.skillGroup.name}
              rank={item.rank}
            ></CompetenceComponent>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
