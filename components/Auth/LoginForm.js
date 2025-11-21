"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faTriangleExclamation, faCheck } from "@fortawesome/free-solid-svg-icons";
import LoginWrapper from "../../components/Login/LoginWrapper";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../Schemas";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState, useTransition } from "react";
import { login } from "../../actions/login";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState();
  const [isPending, startTrans] = useTransition();

  const router = useRouter();

  // ✅ CORRECT useForm with zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
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
        font={<FontAwesomeIcon icon={faRightToBracket} className="headerIco" />}
        HeaderText="Log In to Vacation Easy"
        className="login-style"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="form-cover">
          <input
            {...register("email")}
            type="email"
            className="Login-input-style"
            placeholder="Username or Email"
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

          {error || urlError ? (
            <p className="error-style">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="error-icon-style"
              />{" "}
              {error || urlError}
            </p>
          ) : null}

          {success && (
            <p className="success-style">
              <FontAwesomeIcon
                icon={faCheck}
                className="success-icon-style"
              />{" "}
              {success}
            </p>
          )}

          <button type="submit" className="login-btn">
            Login
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
          <p>Don&apos;t have a Vacation Easy account?</p>
          <Button className="sign-up-cover">
            <Link href="/register"> Sign Up </Link>
          </Button>
        </div>
      </LoginWrapper>
    </div>
  );
};

export default LoginForm;
