const LoginInput = ({
  name,
  type,
  className,
  placeholder,
  label,
  ...rest 

}) => {
  return (
    <>
      <p className="text-label">
        <label>{label}</label>
      </p>
      <input
     
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        {...rest}
    
    
      />
    </>
  );
};

export default LoginInput;
