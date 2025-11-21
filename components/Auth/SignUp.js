"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faTriangleExclamation, faCheck } from "@fortawesome/free-solid-svg-icons";
import LoginWrapper from "../../components/Login/LoginWrapper";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../Schemas";
import { startTransition, useState, useTransition } from "react";
import { registerAction } from "../../actions/registerAction";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";
import { signIn } from "next-auth/react";

export default function SignUp() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const router = useRouter();

  // ✅ Correct useForm with ZOD
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      registerAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  const onClick = (provider) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="Login-wrapper-cover">
      <LoginWrapper
        font={<FontAwesomeIcon icon={faUserPlus} className="headerIco" />}
        HeaderText="Sign Up to Vacation Easy"
        className="login-style"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="form-cover">
          <input
            {...register("name")}
            type="text"
            className="Login-input-style"
            placeholder="Username"
          />
          {errors.name && (
            <p className="error-style">{errors.name.message}</p>
          )}

          <input
            {...register("email")}
            type="email"
            className="Login-input-style"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="error-style">{errors.email.message}</p>
          )}

          <input
            {...register("password")}
            type="password"
            className="Login-input-style"
            placeholder="******"
          />
          {errors.password && (
            <p className="error-style">{errors.password.message}</p>
          )}

          {error && (
            <p className="error-style">
              <FontAwesomeIcon icon={faTriangleExclamation} className="error-icon-style" />{" "}
              {error}
            </p>
          )}

          {success && (
            <p className="success-style">
              <FontAwesomeIcon icon={faCheck} className="success-icon-style" />{" "}
              {success}
            </p>
          )}

          <button type="submit" className="login-btn">
            Sign up
          </button>
        </form>

        <div className="social-cover-style">
          <Button className="social-icon" onClick={() => onClick("google")}>
            <FcGoogle />
          </Button>
          <Button className="social-icon" onClick={() => onClick("github")}>
            <FaGithub />
          </Button>
        </div>

        <div className="dont-have">
          <p>Already have a Vacation Easy account?</p>
          <Button className="sign-up-cover">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </LoginWrapper>
    </div>
  );
}
