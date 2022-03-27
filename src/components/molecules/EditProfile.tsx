import AccountTextField from '../atoms/AccountTextField';
import "./EditProfile.css"
import AccountButton from '../atoms/AccountButton';
import {getUserReturn, UpdateProfile } from '../../client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

//TODO: Find a way to get the placeholder to show current data. 
function getFirstName() {
  let firstName = (document.getElementById("firstNameFieldSignUp") as HTMLInputElement).value;
  console.log(firstName);

  return firstName;
}

function getLastName() {
  let lastName = (document.getElementById("lastNameFieldSignUp") as HTMLInputElement).value;
  console.log(lastName);

  return lastName;
}

function getUsername() {
  let username = (document.getElementById("usernameFieldSignUp") as HTMLInputElement).value;
  console.log(username);

  return username;
}

function getEmail() {
  let email = (document.getElementById("emailFieldSignUp") as HTMLInputElement).value;
  console.log(email);

  return email;
}

function getPassword() {
  let password = (document.getElementById("passwordFieldSignUp") as HTMLInputElement).value;
  console.log(password);

  return password;
}

function getRepeatedPassword(){
  let repeatedPassword = (document.getElementById("repeatPasswordFieldSignUp") as HTMLInputElement).value;
  console.log(repeatedPassword);
  return repeatedPassword;
}

function checkPassword() {
  const password1 = getPassword();
  const password2 = getRepeatedPassword();

  if(password1 === password2){
      return true;
  } else {
      return false;
  }
}

function checkIfEmpty(){
  if (getFirstName() === '' || getLastName() === '' || getUsername() === '' || getPassword() === '' || getEmail() === ''){
      return false;
  }
  return true;
}

export default function EditProfile() {
//==========user
const userID = Number(localStorage.getItem('user'));
console.log(userID);
const userIDtostring = userID.toString();
//

const routeChange = async () =>{
console.log(userID);
if(checkIfEmpty()){
  if(checkPassword()){
    await UpdateProfile(userID, getFirstName(), getLastName(), getUsername(), getEmail(), getPassword());
  }
}
else {
  console.log("fuck meg")
  }
}

  return (
    <div className='EPOuterProfileBox'>
        <h2 className='EPEditProfileHeader'>Account Information</h2>
        <div className='EPContentBox'>
            <form className="EPTextFieldBox">
                <p className='FirstName'>First-Name</p>
                <AccountTextField type={'text'} id="firstNameFieldSignUp" placeholder={"First name"} />
                <p className='LastName'>Last-Name</p>
                <AccountTextField type={'text'} id="lastNameFieldSignUp" placeholder={'Last name'}/>
                <p className='Username'>Username</p>
                <AccountTextField type={'text'} id="usernameFieldSignUp" placeholder={'Username'}/>
                <p className='E-mail'>E-mail</p>
                <AccountTextField type={'text'} id="emailFieldSignUp" placeholder={'Email'}/>
                <p className='Password'>Password</p>
                <AccountTextField type={'password'} id="passwordFieldSignUp" placeholder={'Password'}/>
                <p className='RepeatPassword'>Repeat Password</p>
                <AccountTextField type={'password'} id="repeatPasswordFieldSignUp" placeholder={'Repeat password'}/>
            </form>
            <div className='EPBottomBox'>
                <AccountButton handleClick={routeChange} buttonText='Save Changes'/>
            </div>
        </div>
        <br />
    </div>
  );
  }