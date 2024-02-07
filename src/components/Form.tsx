import React, { useState, Fragment } from "react";

interface School {
  name: string;
  titleOfStudy: string;
  dateOfStudy: string;
}

interface Company {
  name: string;
  position: string;
  mainResponsibilities: string;
  dateFrom: string;
  dateUntil: string;
}

const initialSchool: School = {
  name: "",
  titleOfStudy: "",
  dateOfStudy: "",
};

const initialCompany: Company = {
  name: "",
  position: "",
  mainResponsibilities: "",
  dateFrom: "",
  dateUntil: "",
};

export function Form({ handleSend }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState(initialSchool);
  const [company, setCompany] = useState(initialCompany);

  function handleClick(e: MouseEvent): void {
    setName(document.querySelector<HTMLInputElement>("#name")!.value);
    setEmail(document.querySelector<HTMLInputElement>("#email")!.value);
    setPhone(document.querySelector<HTMLInputElement>("#phone")!.value);
    setSchool({
      name: document.querySelector<HTMLInputElement>("#school-name")!.value,
      titleOfStudy:
        document.querySelector<HTMLInputElement>("#title-of-study")!.value,
      dateOfStudy:
        document.querySelector<HTMLInputElement>("#date-of-study")!.value,
    });
    setCompany({
      name: document.querySelector<HTMLInputElement>("#company-name")!.value,
      position: document.querySelector<HTMLInputElement>("#position")!.value,
      mainResponsibilities: document.querySelector<HTMLTextAreaElement>(
        "#main-responsibilities"
      )!.value,
      dateFrom: document.querySelector<HTMLInputElement>("#date-from")!.value,
      dateUntil: document.querySelector<HTMLInputElement>("#date-until")!.value,
    });
    handleSend();
  }

  return (
    <section>
      <form id="form">
        <Heading />
        <GeneralInfo />
        <Education />
        <PracticalExp />
        <SubmitButton onClick={handleClick} />
      </form>
      <Results
        name={name}
        email={email}
        phone={phone}
        school={school}
        company={company}
      />
    </section>
  );
}

function Heading() {
  return (
    <section>
      <h1>CV Application</h1>
      <p>Fill out the application below:</p>
    </section>
  );
}

function GeneralInfo() {
  return (
    <section>
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
      <EditButton />
    </section>
  );
}

function Education() {
  return (
    <section>
      <label htmlFor="school-name">School name: </label>
      <input type="text" id="school-name" />
      <br />
      <label htmlFor="title-of-study">Title of study: </label>
      <input type="text" id="title-of-study" />
      <br />
      <label htmlFor="date-of-study">Date of study: </label>
      <input type="text" id="date-of-study" />
      <br />
      <EditButton />
    </section>
  );
}

function PracticalExp() {
  return (
    <section>
      <label htmlFor="company-name">Company name: </label>
      <input type="text" id="company-name" />
      <br />
      <label htmlFor="position">Position: </label>
      <input type="text" id="position" />
      <br />
      <label htmlFor="main-responsibilities">Main responsibilities: </label>
      <textarea id="main-responsibilities" />
      <br />
      <label htmlFor="date-from">From: </label>
      <input type="text" id="date-from" />
      <br />
      <label htmlFor="date-until">Until: </label>
      <input type="text" id="date-until" />
      <br />
      <EditButton />
    </section>
  );
}

function EditButton() {
  return (
    <button
      type="button"
      onClick={(e) => e.target.parentNode.firstChild.focus()}
    >
      Edit
    </button>
  );
}

function SubmitButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Submit Form
    </button>
  );
}

function Results({ name, email, phone, school, company }) {
  return (
    <div className="results">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <br />
      <p>School: {school.name}</p>
      <p>Title of study: {school.titleOfStudy}</p>
      <p>Date of study: {school.dateOfStudy}</p>
      <p>Company name: {company.name}</p>
      <p>Position: {company.position}</p>
      <p>Main responsibilities: {company.mainResponsibilities}</p>
      <p>From: {company.dateFrom}</p>
      <p>Until: {company.dateUntil}</p>
    </div>
  );
}
