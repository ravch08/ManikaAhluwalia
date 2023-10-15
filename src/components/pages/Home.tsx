import {
	Banner,
	BestSellers,
	Clients,
	Designer,
	InfoBar,
	InstaPosts,
	NewArrival,
	Shop,
} from "../utils/helper";

const Home = () => {
	return (
		<main>
			<Banner />
			<InfoBar />
			<NewArrival />
			<BestSellers />
			<Shop />
			<Clients />
			<Designer />
			<InstaPosts />
		</main>
	);
};

export default Home;
