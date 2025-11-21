"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus} from "@fortawesome/free-solid-svg-icons";
import LoginWrapper from "../../components/Login/LoginWrapper";
import LoginInput from "../../components/Login/LoginInput";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../Schemas";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../../actions/login";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();


  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); 
    try {
      const formData = new FormData(event.target);
      const response = await fetch("/api/user", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
    

     
      const data = await response.json();

    } catch (error) {

      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="Login-wrapper-cover">
      <LoginWrapper
        font={<FontAwesomeIcon icon={faUserPlus} className="headerIco" /> 
      }
        HeaderText="Sign Up to Vacation Easy"
        className="login-style"
      >
        <form onSubmit={onSubmit} className="form-cover">
        <LoginInput
            name="name"
            label="Name"
            type="text"
            className="Login-input-style"
            placeholder="Username"
          />
          <LoginInput
            name="email"
            label="Email"
            type="email"
            className="Login-input-style"
            placeholder="Email"
          />

          <LoginInput
            name="password"
            label="Password"
            type="password"
            className="Login-input-style"
            placeholder="******"
          />

          <Button
            type="submit"
            name="submit"
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>

        <div className="social-cover-style">
          <Button className="social-icon" onClick={()=> onClick("google")}>
            <FcGoogle />
          </Button>
          <Button className="social-icon" onClick={()=> onClick("github")}>
            <FaGithub />
          </Button>
        </div>
        <div className="dont-have">
          <p>Already have a Vacation Easy account? </p>
          <Button className="sign-up-cover">Sign In</Button>
        </div>
      </LoginWrapper>
    </div>
  );
};

export default RegisterForm;
