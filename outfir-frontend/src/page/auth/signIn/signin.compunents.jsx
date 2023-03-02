import React from "react";
import s from "./signin.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/auth.provider";

function SigninCompunents() {
	//navigate
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//authContext
	const { signIn } = useAuth();

	const handelSubmit = (e) => {
		e.preventDefault();
		if (!email && !password)
			return alert("Fill the Form");
		signIn({ email, password });
		return;
	};

	const handelNavigate = (e) => {
		e.preventDefault();
		navigate("/signUp");
	};

	return (
		<div className={s.container}>
			<div className={s.form}>
				<h1>Sign In</h1>
				<form onSubmit={handelSubmit}>
					<div className={s.input}>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							required
							placeholder='email'
							area-label='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								console.log(email);
							}}
						/>
					</div>

					<div className={s.input}>
						<label htmlFor='password'>
							Password
						</label>
						<input
							type='password'
							required
							autoComplete='on'
							placeholder='password'
							area-label='password'
							value={password}
							onChange={(e) =>
								setPassword(e.target.value)
							}
						/>
					</div>

					<div className={s.signup_btn}>
						<button>SignIn</button>
					</div>
					<div
						className={s.notAuser}
						onClick={handelNavigate}
					>
						<p className={s._Na}>Not a User</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SigninCompunents;
