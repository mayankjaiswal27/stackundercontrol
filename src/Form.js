import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import myImage from "./Photos/Next.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export default function Form() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div className="borders">
        <div className="inner">
        
        </div>
        <form>
          <input type="text" className="field1" placeholder="Username"></input>
          <br></br>
          <input
            type="password"
            className="field2"
            placeholder="Password"
          ></input>
          <br></br>
          <a href="">Forgot password?</a>
          <div className="recap">
            <ReCAPTCHA
              sitekey="6Leh8mgoAAAAAEg6HjX5l8rqfNQ3tCzJQiEK-Ahp"
              onChange={onChange}
            />
          </div>
          <a href="">
            <img src={myImage}></img>
          </a>
          <br></br>
          <br></br>
          <p>
            <b>Or login with Google</b>
          </p>
          <div className="recap1">
            <GoogleOAuthProvider clientId="686653176298-bkjq3c6u8t9ipg84p2tupkhha1s9ns01.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          <br></br>
          <p>
            Don't have an account?<br></br>
            <a href="">Sign Up</a>
          </p>
        </form>
      </div>
    </>
  );
}
