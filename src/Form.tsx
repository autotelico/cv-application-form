import React, { useState, Fragment } from "react";

interface School {
  name: string;
  titleOfStudy: string;
  dateOfStudy: string;
}

const initialSchool: School = {
  name: "",
  titleOfStudy: "",
  dateOfStudy: "",
};

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState(initialSchool);

  function handleClick(e: MouseEvent): void {
    setName(document.querySelector<HTMLInputElement>("#name")!.value);
    setEmail(document.querySelector<HTMLInputElement>("#email")!.value);
    setPhone(document.querySelector<HTMLInputElement>("#phone")!.value);
    setSchool({
      name: document.querySelector<HTMLInputElement>("#school-name")!.value,
      titleOfStudy: document.querySelector<HTMLInputElement>("#title-of-study")!.value,
      dateOfStudy: document.querySelector<HTMLInputElement>("#date-of-study")!.value,
    });
  }

  return (
    <>
      <form>
        <Heading />
        <GeneralInfo />
        <Education />
        <PracticalExp />
        <SubmitButton onClick={handleClick} />
      </form>
      <Results name={name} email={email} phone={phone} school={school} />
    </>
  );
}

function Heading() {
  return (
    <>
      <h1>CV Application</h1>
      <p>Fill out the application below:</p>
    </>
  );
}

function GeneralInfo() {
  return (
    <>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" className="input-data" />
      <br />
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" />
      <br />
      <label htmlFor="phone">Phone number: </label>
      <input type="phone" id="phone" />
      <br />
      <br />
    </>
  );
}

function Education() {
  return (
    <>
      <label htmlFor="school-name">School name: </label>
      <input type="text" id="school-name" />
      <br />
      <label htmlFor="title-of-study">Title of study: </label>
      <input type="text" id="title-of-study" />
      <br />
      <label htmlFor="date-of-study">Date of study: </label>
      <input type="text" id="date-of-study" />
      <br />
    </>
  );
}

function PracticalExp() {
  return (
    <>
      <label htmlFor="company-name">Company name: </label>
      <input type="text" />
      <br />
    </>
  );
}

function SubmitButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Submit Form
    </button>
  );
}

function Results({ name, email, phone, school }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <br />
      <p>School: {school.name}</p>
      <p>Title of study: {school.titleOfStudy}</p>
      <p>Date of study: {school.dateOfStudy}</p>
    </>
  );
}
