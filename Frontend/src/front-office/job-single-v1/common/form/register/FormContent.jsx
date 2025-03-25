const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="username" placeholder="Username" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
