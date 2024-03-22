import { useState } from "react";

const Myform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      number: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      confirmPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid. !!";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "Email is invalid. !!";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid. !!";
    }
    if (!regex.password.test(formData.password)) {
      errors.password = "Password is invalid. !!";
    }
    if (!regex.confirmPassword.test(formData.confirmPassword)) {
      errors.confirmPassword = "Confirm password is invalid. !!";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match. !!";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
  };
  if (showSuccessPopup) {
    document.body.classList.add('overflow-hidden')
  }
  else {
    document.body.classList.remove('overflow-hidden')
  }
  return (
    <div className=" bg-color vh-100 d-flex align-items-center justify-content-center">
      <div className=" form_box m-auto  w-100">
        <p className=" name text-center">REGISTRATION</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-100 input"
            />
            {formErrors.name && (
              <p className="eror">{formErrors.name}</p>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`formErrors.email ? "error" : "" w-100 input`}
            />
            {formErrors.email && (
              <p className="eror">{formErrors.email}</p>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={`formErrors.number ? "error" : "" w-100 input`}
            />
            {formErrors.number && (
              <p className="eror">{formErrors.number}</p>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`formErrors.password ? "error" : "" w-100 input`}
              />
            </div>
            {formErrors.password && (
              <p className="eror">{formErrors.password}</p>
            )}
          </div>
          <div className="inputs">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`formErrors.confirmPassword ? "error" : "" w-100 input`}
              />
            </div>
            {formErrors.confirmPassword && (
              <p className="eror">{formErrors.confirmPassword}</p>
            )}
          </div>
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
      </div>
      {showSuccessPopup && <div className=' h-100 w-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center z-11 modal_box p-4' onClick={ handlePopupClose}>
        <div className=' submitbox w-100 h-100 d-flex justify-content-center align-items-center position-relative' >
          <span className=' position-absolute modalsvg ' onClick={handlePopupClose}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FFFFFF" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg></span>
          <p className=' text-white fs-md text-center ' >THANKS FOR SUBSCRIBE !! 👍🏻</p>
        </div>
      </div>}
    </div>
  );
};

export default Myform;
