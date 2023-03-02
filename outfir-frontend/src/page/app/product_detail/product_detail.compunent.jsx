import React from "react";
import s from "./product_detail.module.css";
import { useDispatch } from "react-redux";
import Navigation from "../../../components/navigation/navigation";
import { useFetch } from "../../../hook/useFetch";
import { addProduct } from "../../../redux/cartSlice.redux";
import { addToCart } from "../../../redux/cartSlice.redux";
import { useAuth } from "../../../context/auth.provider";

import { useParams } from "react-router-dom";
function ProductDetail() {
	const { user } = useAuth();
	//const {payload } = user
	// console.log(user.payload.email)
	console.log(user);
	const { id } = useParams();
	const { data, error, loading } = useFetch(
		`/product/${id}`
	);

	const dispatch = useDispatch();

	return (
		<>
			<Navigation />
			<div className={s.container}>
				<div className={s.productDetail}>
					<div className={s.product}>
						<img
							src={data.thumbnail}
							alt='data'
						/>
					</div>
					<div className={s.product_desc}>
						{data.description}
					</div>
					<div className={s.btn}>
						<button
							onClick={() =>
								dispatch(
									addToCart({
										id,
									})
								)
							}
						>
							Add To Cart
						</button>
						<button>Buy Now</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default ProductDetail;
