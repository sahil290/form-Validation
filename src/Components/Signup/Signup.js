import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="heading">Signup Form</h1>
      <form className="signup-form" onSubmit={handleSubmit(submitForm)}>
        <div>
          <label className="firstName">FirstName</label>
          <br />
          <input
            type="text"
            name="firstName"
            className="firstName"
            placeholder="First name"
            {...register("text", { required: true })}
          />
        </div>
        <p>{errors.firstName?.message}</p>
        <div>
          <label className="lastName">LastName</label>
          <br />
          <input
            type="text"
            name="lastName"
            className="lastName"
            placeholder="Last Name"
            {...register("text", { required: true })}
          />
        </div>
        <p>{errors.lastName?.message}</p>
        <div>
          <label className="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            className="email"
            placeholder="email..."
            {...register("text", { required: true })}
          />
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <label className="age">Age</label>
          <br />
          <input
            type="number"
            name="age"
            className="age"
            placeholder="Please enter age..."
            {...register("text", { required: true })}
          />
        </div>
        <p>{errors.age?.message}</p>
        <div>
          <label className="password">Password</label>
          <br />
          <input
            type="text"
            name="password"
            className="password"
            placeholder="password..."
            {...register("text", { required: true })}
          />
        </div>
        <p>{errors.password?.message}</p>
        <div>
          <label className="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="text"
            name="confirmPassword"
            className="confirmPassword"
            placeholder="Confirm Password..."
            {...register("text", { required: true })}
          />
        </div>
        <p>{errors.confirmPassword && "Passwords should match!"}</p>
        <br />
        <button
          className="submit btn btn-danger"
          onClick={handleSubmit(submitForm)}
          type="submit"
          id="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
