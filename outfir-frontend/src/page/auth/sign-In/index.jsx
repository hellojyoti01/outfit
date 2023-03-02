import s from "./signIn.module.css";

import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/auth.provider";
function SignIn() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//authContext
	const { signIn } = useAuth();

	const handelSubmit = (e) => {
		e.preventDefault();
		if (!email && !password) return alert("Fill the Form");
		signIn({ email, password });
		return;
	};

	const handelNavigate = (e) => {
		e.preventDefault();
		navigate("/signUp");
	};

	return (
		<section>
			<div className={s.fromBox}>
				<div className={s.fromValue}>
					<h2>Log in</h2>
					<form onSubmit={handelSubmit}>
						<div className={s.inputBox}>
							<ion-icon name='mail-outline'></ion-icon>
							<input
								type='email'
								name='email'
								id='email'
								value={email}
								required
								onChange={(e) => {
									setEmail(e.target.value);
									console.log(email);
								}}
							/>
							<label htmlFor='email'>Email</label>
						</div>
						<div className={s.inputBox}>
							<ion-icon name='lock-closed-outline'></ion-icon>
							<input
								type='password'
								name='password'
								id='password'
								value={password}
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label htmlFor='password'>Password</label>
						</div>
						<div className={s.forget}>
							<label htmlFor='rememberMe'>
								<input type='checkbox' name='rememberMe' id='rememberMe' />
								Remember Me
							</label>
							<p>Forget Password</p>
						</div>
						<button>Log In</button>
						<div className={s.register} onClick={handelNavigate}>
							<p>Don't Have Account ? Register Now </p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default SignIn;
