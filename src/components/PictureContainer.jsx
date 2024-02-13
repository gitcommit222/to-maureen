import React from "react";
import PictureFrame from "./PictureFrame";

const PictureContainer = () => {
	return (
		<div className="flex w-full justify-center h-[100vh] flex-wrap gap-5 p-[30px]">
			<PictureFrame />
		</div>
	);
};

export default PictureContainer;
