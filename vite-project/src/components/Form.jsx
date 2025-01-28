import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Timer from "./Timer";

const Form = () => {
  /// generaly using state form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <>
      <div className="m-0 mx-auto flex items-center justify-center ">
        <form
          className=" flex flex-col max-w-[400px] gap-3"
          action=""
          onSubmit={handleSubmit((value) => onsubmit(value))}
        >
          <label htmlFor="name"> Name</label>
          <input
            {...register("name", {
              required: "Name is required",
            })}
            className="border border-black"
            type="text"
            id="name"
          />
          {errors.name && (
            <p className=" text-red-500">{errors.name.message} </p>
          )}

          <label htmlFor="Email"> Email</label>

          <input
            {...register("email", {
              required: "Email is required",
            })}
            className="border border-black"
            type="email"
            id="email"
          />
          {errors.email && (
            <p className=" text-red-500">{errors.email.message} </p>
          )}

          <label htmlFor="place"> Place</label>

          <input
            {...register("place", {
              required: "Place is required",
            })}
            className="border border-black"
            type="text"
            id="place"
          />
          {errors.place && (
            <p className=" text-red-500">{errors.place.message} </p>
          )}

          <button className=" bg-green-300 w-full" type="submit">
            {" "}
            Submit
          </button>
        </form>
      </div>

      <Timer />
    </>
  );
};

export default Form;
