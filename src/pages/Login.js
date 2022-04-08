import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Login(props) {
  const hisotry = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const classes = useStyles();
  const handleEmail = (e) => {
    if (e.target.value === "") {
      setEmailError(true);
      setEmailErrorMessage("Email is required");
    } else {
      setEmail(e.target.value);
      setEmailError(false);
      setEmailErrorMessage("");
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
  };

  const handleLogin = () => {
    let userList = localStorage.getItem("vehicle-userList")
      ? JSON.parse(localStorage.getItem("vehicle-userList"))
      : [];
    if (userList.length) {
      userList.filter((user) => {
        if (user.email === email && user.password === password) {
          hisotry.push("/dashboard");
        } else {
          setError(true);
        }
      });
    } else {
      setError(true);
    }
  };

  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <Card
          style={{
            margin: "10px",
            width: "94vw",
            textAlign: "center",
            height: "93vh",
          }}
          className="loginCard"
        >
          <CardContent>
            <h1 id="logintext">Login</h1>
            <br />
            {error && (
              <Typography
                className="danger"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                username and password is not valid
              </Typography>
            )}
            <div>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                style={{ width: "100%" }}
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Mobile Number/Email"
                onChange={handleEmail}
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
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
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "100%", marginLeft: "1%", marginTop: "10px" }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
            <div style={{ marginTop: "50px" }}>
              {/* <Link to="forgot-password" className="forgotPassword">
                Forgot Password?
              </Link> */}
              <br />
              <Link to="signup" className="signup">
                Register Here
              </Link>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
