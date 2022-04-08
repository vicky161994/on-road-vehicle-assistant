import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PhoneIcon from "@material-ui/icons/Phone";
import Person from "@material-ui/icons/Person";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [numberErrorMessage, setNumberErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");
  const [error, setError] = useState(false);
  const [resgistered, setRegistered] = useState(false);
  const classes = useStyles();

  const handleName = (e) => {
    if (e.target.value === "") {
      setNameError(true);
      setNameErrorMessage("Name is required");
    } else {
      setName(e.target.value);
      setNameError(false);
      setNameErrorMessage("");
    }
  };

  const handleMobileNumber = (e) => {
    if (e.target.value === "") {
      setNumberError(true);
      setNumberErrorMessage("mobile number or email is required");
    } else {
      setEmail(e.target.value);
      setNumberError(false);
      setNumberErrorMessage("");
    }
  };

  const handlePassword = (e) => {
    if (e.target.value === "") {
      setPasswordError(true);
      setPasswordErrorMessage("Password is required");
    } else {
      setPassword(e.target.value);
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
    if (e.target.value !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Password does not matched");
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage("");
    }
  };

  const handleConfirmPassword = (e) => {
    if (e.target.value === "") {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Confirm password is required");
    } else {
      setConfirmPassword(e.target.value);
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage("");
    }
    if (e.target.value !== password) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Password does not matched");
    }
  };

  const handleRegister = async () => {
    if (name === "") {
      setNameError(true);
      setNameErrorMessage("Name is required");
    }

    if (email === "") {
      setNumberError(true);
      setNumberErrorMessage("Number is required");
    }
    if (password === "") {
      setPasswordError(true);
      setPasswordErrorMessage("Password is required");
    }
    if (confirmPassword === "") {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Confirm password is required");
    }
    if (nameError || passwordError || confirmPasswordError || numberError) {
      return false;
    }
    let userList = localStorage.getItem("vehicle-userList")
      ? JSON.parse(localStorage.getItem("vehicle-userList"))
      : [];
    if (userList.length) {
      userList.filter((user) => {
        if (user.email === email) {
          setError(true);
        } else {
          userList.push({ email: email, password: password, name: name });
          localStorage.setItem("vehicle-userList", JSON.stringify(userList));
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setRegistered(true);
        }
      });
    }
    userList.push({ email: email, password: password, name: name });
    localStorage.setItem("vehicle-userList", JSON.stringify(userList));
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRegistered(true);
  };

  return (
    <Row>
      <Col lg={3}></Col>
      <Col lg={9} md={12} sm={12} xs={12}>
        <Card
          style={{
            margin: "10px",
            width: "94vw",
            textAlign: "center",
            height: "93vh",
          }}
          className="registerCard"
        >
          <CardContent>
            <h1 id="logintext">Register into Application</h1>
            {error && (
              <Typography
                className="danger"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                This email already exist!
              </Typography>
            )}
            {resgistered && (
              <Typography
                className="danger"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                User register successfully!
              </Typography>
            )}
            <div>
              <TextField
                error={nameError}
                helperText={nameErrorMessage}
                style={{ width: "100%" }}
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Full Name"
                value={name}
                onChange={handleName}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div>
              <TextField
                error={numberError}
                helperText={numberErrorMessage}
                style={{ width: "100%" }}
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Email"
                value={email}
                onChange={handleMobileNumber}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                style={{ width: "100%" }}
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                value={password}
                onChange={handlePassword}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VisibilityOff />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div>
              <TextField
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
                style={{ width: "100%" }}
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VisibilityOff />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div>
              <Button
                onClick={handleRegister}
                variant="contained"
                color="secondary"
                style={{ width: "100%", marginLeft: "1%", marginTop: "10px" }}
              >
                Register
              </Button>
            </div>
            <div style={{ marginTop: "10px" }}>
              {/* <Link to="forgot-password" className="forgotPassword">
                Forgot Password?
              </Link> */}
              <Link to="/" className="signup">
                Login
              </Link>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Col>
    </Row>
  );
}

export default Signup;
