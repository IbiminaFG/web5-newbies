"use client";

import Image from "next/image";
import { useState } from "react";

// Function to covert to binary64
const convertToBase64 = (file) => {
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
};

const page = () => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("/assets/user-image.png");
  const [imageFile, setImageFile] = useState("/assets/user-image.png");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImageFile(URL.createObjectURL(file));
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      jobTitle: jobTitle,
      company: company,
      dob: dob,
      image: image,
    };
    console.log(data);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center onboarding_heading py-10">
        <h1 className="text-white text-lg font-bold">
          Set up your basic profile
        </h1>
        <p className="text-white text-md">
          This is the most important information to add, because it is used to
          introduce you to organizations.
        </p>
        <p className="text-white text-md">
          You can always add more details later.
        </p>
      </div>
      <form
        action=""
        className="flex flex-col items-center gap-5 mt-4"
        onSubmit={handleSubmit}
      >
        <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center relative">
          <Image
            src={imageFile}
            width={70}
            height={70}
            alt="user profile pic"
            className="rounded-xl"
          />
          <label
            htmlFor="picture"
            className="absolute -right-0 -bottom-0 cursor-pointer"
          >
            <Image
              src="/assets/positive.svg"
              width={20}
              height={20}
              alt="image add"
            />
          </label>
          <input
            type="file"
            name="picture"
            id="picture"
            className="hidden"
            accept=".jpeg, .png, .jpg"
            onChange={handleFileUpload}
          />
        </div>
        <div className="flex gap-5">
          <div className="flex w-60 flex-col gap-2">
            <label htmlFor="name" className="text-white text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full onboarding_input_text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="job-title" className=" text-white text-lg">
              Job Title
            </label>
            <input
              type="text"
              id="job-title"
              name="jobName"
              value={jobTitle}
              className="w-full onboarding_input_text"
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="company" className="text-white text-lg">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full onboarding_input_text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date-of-birth" className=" text-white text-lg">
              Date of Birth
            </label>
            <input
              type="date"
              id="date-of-birth"
              name="dateOfBirth"
              className="w-full onboarding_input_text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-3 border border-solid border-gray-400 text-white rounded-3xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default page;
