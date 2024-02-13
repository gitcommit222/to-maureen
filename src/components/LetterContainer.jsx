import React, { useState } from "react";
import Paper from "./Paper";

const LetterContainer = () => {
	const [openPaper, setOpenPaper] = useState(false);

	const handleClick = () => {
		setOpenPaper(!openPaper);
	};
	return (
		<div
			className={`letter-container ${
				openPaper ? "p-[30px] top-[20%]" : "top-[60%]"
			}`}
		>
			<Paper openPaper={openPaper} />
			<button id="myButton" className="heart-button" onClick={handleClick}>
				💐
			</button>
		</div>
	);
};

export default LetterContainer;
