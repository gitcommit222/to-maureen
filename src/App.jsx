import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import PictureContainer from "./components/PictureContainer";
import MainPage from "./components/MainPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<FrontPage />} />
				<Route path="/main" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
