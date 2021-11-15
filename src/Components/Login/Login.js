import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  return (
    <>
      <h1 className="heading">Login Form</h1>
      <form className="login-form" onSubmit={handleSubmit}>
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
          <label className="password">Password</label>
          <br />
          <input
            type="text"
            name="password"
            className="password"
            placeholder="password..."
            {...register("text", { required: true })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <br />
        <button
          className="btn btn-info"
          type="submit"
          
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
