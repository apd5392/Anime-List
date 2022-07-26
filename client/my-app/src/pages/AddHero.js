import "../addHero.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddHero() {
  let [image, setimage] = useState("");
  let [name, setName] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [otherName, setOtherName] = useState([]);
  let [anime, setAnime] = useState("");
  let [age, setAge] = useState("");
  let [organizations, setOrganization] = useState("");

  const imageChange = (e) => {
    console.log(e.target.value);
    setimage(e.target.value);
  };
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value); //allows for imput in text box
  };
  const handleotherNameChange = (e) => {
    console.log(e.target.value);
    setOtherName(e.target.value);
  };
  const handleAnimeChange = (e) => {
    console.log(e.target.value);
    setAnime(e.target.value);
  };
  const handleAgeChange = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };
  const handleOrganizationChange = (e) => {
    console.log(e.target.value);
    setOrganization(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //stops the refresh (form behavior)
    console.log(name);
    setSubmitted(true);
  };
  const addheroDB = async () => {
    let hero = {
      name: name,
      otherName: otherName,
      anime: anime,
      age: parseInt(age),
      organizations: organizations,
      image: image,
    };
    await axios.post("http://localhost:3001/heroes", hero);
  };
  useEffect(() => {
    if (submitted) {
      addheroDB();
      console.log("submit");
      setSubmitted(false);
      setName("");
      setAge("");
      setAnime("");
      setOrganization("");
      setOtherName("");
      setimage("");
    } else {
      console.log("Nothing");
    }
  }, [submitted]);

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h2>Hero Information:</h2>
        <div className="userInputs">
          <input
            type="text"
            placeholder="Imgur Link"
            value={image}
            onChange={imageChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Hero Name*"
            value={name}
            required = {true}
            onChange={handleNameChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Secondary Names"
            value={otherName}
            onChange={handleotherNameChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Anime's"
            value={anime}
            onChange={handleAnimeChange}
          ></input>
          <br></br>
          <input
            type="text"
            value={age}
            placeholder="Hero's Age"
            onChange={handleAgeChange}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Groups"
            value={organizations}
            onChange={handleOrganizationChange}
          ></input>
        </div>
        <p>* = required for submission</p>
        <br></br>
        <button type="submit">Add Hero</button>
      </form>
    </div>
  );
}
