import React, { useState, useContext } from 'react'
import { Form, Checkbox, Button } from 'semantic-ui-react'
import './style.css';
import { AuthenticationService } from '../../services/Authentication';
import { Auth } from '../../model/Auth';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [emailID, setEmailID] = useState('');
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useState(null);
  const {signIn } = useContext(AuthContext);

  const authService = new AuthenticationService();
  const history = useHistory();
  let authBody: Auth;

  const handleLogin = async() => {
    authBody = { username:  emailID,  password: password };

    try {
      await authService.login(authBody);
      signIn();
      history.push("/events");
    }
    catch(error) {
      if(error.response) {
        promptError(error.response.data);
      }
    }
  }

  const promptError = (response: any) => {
    if(response.key ==='invalid_account') { console.log("Invalid account details submitted"); }
    if(response.key ==='invalid_login') { console.log("Incorrect password entered"); }
  }

  return (
    <div className="login-container">
      <form className="ui large form login-form">
        <div className="ui stacked segment">
          <div className="field form-field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="email" id="email" placeholder="E-mail address" onChange={(e)=>setEmailID(e.target.value)}/>
            </div>
          </div>
          <div className="field form-field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="ui fluid large teal submit button" onClick={() => handleLogin() }>Login</div>
        </div>

        <div className="ui error message"></div>
      </form>
  </div>
   )
 }

export default Login;