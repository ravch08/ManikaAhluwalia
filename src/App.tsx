import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Contact,
	Footer,
	Gifting,
	Header,
	Home,
	Men,
	MonogramShop,
	Page404,
	Women,
} from "./components/utils/helper";

import "./styles/main.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="women" element={<Women />} />
				<Route path="men" element={<Men />} />
				<Route path="monogramshop" element={<MonogramShop />} />
				<Route path="gifting" element={<Gifting />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
