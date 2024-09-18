import LoginWrapper from "../../../components/Login/LoginWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import Link from "next/link";

const errorPage = () => {
  return (
    <LoginWrapper
      font={
        <FontAwesomeIcon icon={faExclamation} className="headerIco-error" />
      }
      HeaderText="Oops! Sometthing went wrong!"
      className="error-error"
    >
      <Button className="error-btn">
        <Link href="/login" className="error-link">Back to login</Link>
      </Button>
    </LoginWrapper>
  );
};

export default errorPage;
