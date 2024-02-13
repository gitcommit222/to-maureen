import React, { useState } from "react";
import { please } from "../assets";
import { Link } from "react-router-dom";

const FrontPage = () => {
	return (
		<section className="flex flex-col items-center justify-center">
			<h1 className="text-red-500 font-semibold text-[85px] text-center">
				Hello love, can you be my Valentine?
			</h1>
			<img src={please ? please : ""} />
			<div className="flex gap-5 mt-5">
				<div className="relative inline-block">
					<Link
						to={"/main"}
						className="bg-red-500 text-white py-1 px-4 rounded-[2px] text-[25px]"
					>
						Yes
					</Link>
					<div className="hidden absolute bg-gray-700 text-white px-2 py-1 rounded-md shadow-md top-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
						This is a tooltip
					</div>
				</div>
				<div className="relative inline-block">
					<Link
						to={"/main"}
						className={`bg-[#555] text-white py-1 px-4 rounded-[2px] text-[25px]`}
					>
						Yes
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FrontPage;
