import React from "react";

const Picture = ({ imgSrc }) => {
	return (
		<img
			src={imgSrc}
			alt="pictures"
			className="border border-[#E0CCBE] h-[250px] object-cover w-full"
		/>
	);
};

export default Picture;
