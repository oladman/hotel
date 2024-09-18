const LoginWrapper = ({ children, className, HeaderText, font }) => {
  return (
    <div className={className}>
      <div className="header-cover-login">
        {font} <h1 className="header-login-style"> {HeaderText}</h1>{" "}
      </div>
      <div className="Login-Wrapper-Children">{children}</div>
    </div>
  );
};

export default LoginWrapper;
