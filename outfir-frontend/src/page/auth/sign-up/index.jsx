import s from "./signUp.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/auth.provider";
import Uploder from "../../../components/uploader/uploder";

function SignIn() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [Cpassword, setCPassword] = useState("");
	const [rule, setRule] = useState("");
	const [image, setImage] = useState("");

	const { signUp } = useAuth();

	const handelSubmit = (e) => {
		e.preventDefault();

		console.log(`${email} ${password} ${name} ${Cpassword} ${rule} ${image}`);
		if (!name && !email && !password && !Cpassword && !image)
			return alert("Fill the Form");

		if (password !== Cpassword)
			return alert("Password and Confirm Password Not Same");
		signUp({
			name,
			email,
			password,
			photo: image,
			rule,
		});
		return;
	};

	const handelNavigate = (e) => {
		e.preventDefault();
		navigate("/signIn");
	};

	return (
		<section>
			<div className={s.fromBox}>
				<div className={s.fromValue}>
					<h2>Sign Up</h2>
					<Uploder uploder={setImage} />
					<form onSubmit={handelSubmit}>
						<div className={s.inputBox}>
							<ion-icon name='person-outline'></ion-icon>
							<input
								type='text'
								name='name'
								id='name'
								value={name}
								required
								onChange={(e) => {
									setName(e.target.value);
									console.log(name);
								}}
							/>
							<label htmlFor='name'>Name</label>
						</div>
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
							<ion-icon name='key-outline'></ion-icon>
							<input
								type='password'
								name='password'
								id='password'
								value={password}
								required
								onChange={(e) => {
									setPassword(e.target.value);
									console.log(password);
								}}
							/>
							<label htmlFor='password'>Password</label>
						</div>
						<div className={s.inputBox}>
							<ion-icon name='key-outline'></ion-icon>
							<input
								type='password'
								name='Cpassword'
								id='Cpassword'
								value={Cpassword}
								required
								onChange={(e) => {
									setCPassword(e.target.value);
									console.log(Cpassword);
								}}
							/>
							<label htmlFor='Cpassword'>Confirm Password</label>
						</div>
						<div className={`${s.inputBoxRadio}`}>
							<label htmlFor='rule'>User</label>
							<input
								type='radio'
								name='rule'
								id='rule-user'
								value={"user"}
								required
								onChange={(e) => {
									setRule("user");
									//console.log(rule, "user Feild");
								}}
							/>

							<label htmlFor='rule'>Merchant</label>
							<input
								type='radio'
								name='rule'
								id='rule-merchant'
								value={"merchant"}
								required
								onChange={(e) => {
									//console.log(e.target.value);

									setRule("merchant");
									//console.log(rule, "Merchant feild");
								}}
							/>
						</div>
						<div className={s.forget}>
							<label htmlFor='rememberMe'>
								<input type='checkbox' name='rememberMe' id='rememberMe' />
								Remember Me
							</label>
							<p>Forget Password</p>
						</div>
						<button>Sign Up</button>
						<div className={s.register} onClick={handelNavigate}>
							<p>Account Already exit ? LogIn Now </p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default SignIn;
