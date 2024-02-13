import React from "react";
import Picture from "./Picture";
import pictureData from "../data/pictureData.js";
import "animate.css";

const PictureFrame = () => {
	return (
		<>
			{pictureData &&
				pictureData.map((picture) => (
					<div
						key={picture.imgUrl}
						className={`animate__animated animate__flipInY animate__delay-2s h-[400px] w-[270px] bg-[#f0f8ff] p-[10px] border border-[#d2c7b6] rounded-[2px] picture-frame `}
						style={{
							marginTop: picture.marginTop,
						}}
					>
						<Picture imgSrc={picture.imgUrl} />
						<h2 className=" text-center text-black mt-2 text-[50px]">
							{picture.imgDate}
						</h2>
						<h2 className=" text-center text-[#FF9800] text-[30px]">
							@{picture.imgPlace}
						</h2>
					</div>
				))}
		</>
	);
};

export default PictureFrame;
