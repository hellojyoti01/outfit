//upload the filr
//send the Url back

import React, { useEffect } from "react";
import { useState } from "react";
import s from "./uploder.module.css";
import axios from "axios";

function Uploder({ uploder }) {
	const [file, setFile] = useState({});
	const [url, setUrl] = useState(null);

	const handelUpload = async () => {
		const formData = new FormData();
		formData.append("image", file);
		try {
			const { data } = await axios.post("upload", formData);
			console.log(data.url);
			if (data) uploder(data.url);
			//  console.log(data)
		} catch (e) {
			console.log(e, "some Error File Uploded");
			setUrl(null);
		}
	};

	// console.log(url)

	useEffect(() => {
		if (file?.type) {
			handelUpload();
		}
	}, [file]);
	return (
		<div className={s.uploader}>
			<div className={s.profileUploader}>
				{url ? (
					<img className={s.profilePhoto} src={url} alt='Profile Uploder' />
				) : (
					<ion-icon
						style={{
							display: "block",
							transform: "scale(2, 2)",
							color: "#fff",
						}}
						className={s.uploaderIcon}
						name='cloud-upload-outline'
					></ion-icon>
				)}
			</div>
			<input
				type='file'
				name='image'
				onChange={(e) => {
					setFile(e.target.files[0]);
					setUrl(URL.createObjectURL(e.target.files[0]));
				}}
			/>
		</div>
	);
}

export default Uploder;
