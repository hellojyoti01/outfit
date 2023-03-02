import React, { useState, useEffect } from "react";
import s from "./navigation.module.css";
import { useAuth } from "../../context/auth.provider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useSelector } from "react-redux";
import cartIcon from "../../../public/cart-icon.svg";

import NavigationModel from "./navigation_model/navigation_model";

function Navigation() {
	const { user, signOut } = useAuth();
	const [open, setOpen] = useState(false);
	const [item, setItem] = useState([]);

	//redux ---
	console.log(user);
	const value = useSelector(({ cart }) => cart.value);

	const fetchData = async (value) => {
		try {
			const { data } = await axios.get(`product/look_up/${value}`);
			let item = data.payload;
			setItem([...item]);
			setOpen(true);
		} catch (e) {}
	};

	const handelChange = async (e) => {
		let el = e.target.value;
		if (el.length > 2) {
			fetchData(e.target.value);
		} else {
			setOpen(false);
		}
	};

	const navigate = useNavigate();
	const handelLognIn = (e) => {
		e.preventDefault();
		navigate("/signIn");
	};
	const handelLogOut = (e) => {
		e.preventDefault();

		signOut();
	};

	return (
		<div>
			<nav className={s.wrapper}>
				<div className={s.left}>
					<img src='../../../public/logo.svg' alt={`logo`} />
				</div>
				<div className={s.search_box}>
					<input onChange={handelChange} />
					{/* <span>x</span> */}
					<img src='../../../public/filter_timeline.svg' alt='filter' />
				</div>
				<div
					className={s.content_menu}
					onClick={user ? handelLogOut : handelLognIn}
				>
					<img
						src={user ? user.payload.profile : "../../../public/login-.svg"}
						alt='profile'
					/>
				</div>
				{value > 0 ? (
					<span>
						<img src={cartIcon} alt='Cart' /> {value}
					</span>
				) : (
					<img src={cartIcon} alt='Cart' />
				)}
			</nav>

			<NavigationModel item={item} open={open} />
		</div>
	);
}

export default Navigation;
