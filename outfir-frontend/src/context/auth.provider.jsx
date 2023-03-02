import { useState, useEffect, createContext, useContext } from "react";
//Navigate hook
import { useNavigate } from "react-router-dom";
//axios
import axios from "axios";

//create context
const authContext = createContext();

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(() => {
		const token = localStorage.getItem("outFit-Token");

		if (token) {
			axios.defaults.headers.common["Authorization"] = token;
		}
		return token;
	});

	//Who am i   User Info
	const who_am_i = async () => {
		// console.log("Who Am I")
		const { data } = await axios.get("auth/who_am_i");

		if (data.status) {
			setUser(data);
			navigate("/");
		}
	};
	//Sign In
	const signIn = async ({ email, password }) => {
		const { data } = await axios.post("auth/sign_in", {
			email,
			password,
		});

		const Token = data.payload;
		if (data.status) {
			axios.defaults.headers.common["Authorization"] = Token;
			localStorage.setItem("outFit-Token", Token);
			setToken(Token);
		}
	};

	//Sign Up
	const signUp = async ({ name, email, password, photo, rule }) => {
		try {
			// console.log(name, email, password, photo, rule);
			const { data } = await axios.post("auth/sign_up", {
				name,
				email,
				password,
				profile: photo,
				rule,
			});

			const Token = data.payload;

			axios.defaults.headers.common["Authorization"] = Token;
			localStorage.setItem("outFit-Token", Token);
			setToken(Token);
		} catch (e) {
			console.log(e, "Error");
		}

		// console.log(data)
	};

	//Sign out
	const signOut = () => {
		localStorage.removeItem("outFit-Token");
		setToken(null);
		setUser(null);
	};

	const context = {
		user,
		signIn,
		signUp,
		signOut,
	};

	useEffect(() => {
		if (token) {
			axios.defaults.headers.common["Authorization"] = token;
			who_am_i();
		}
	}, [token]);

	return (
		<authContext.Provider value={context}>{children}</authContext.Provider>
	);
};

//use auth

const useAuth = () => {
	const auth = useContext(authContext);
	return auth;
};

export { AuthProvider, useAuth };
