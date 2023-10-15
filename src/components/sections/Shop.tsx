import { Link } from "react-router-dom";

import { Shop1200, Shop628, Shop900, ShopBG, ShopImg } from "../utils/helper";

const Shop = () => {
	return (
		<section id="monogram-shop" title="The Monogram Shop">
			<picture>
				<source media="(max-width:628px)" srcSet={Shop628} />
				<source media="(max-width:900px)" srcSet={Shop900} />
				<source media="(max-width:1200px)" srcSet={Shop1200} />
				<img src={ShopImg} alt="The Monogram Shop" />
			</picture>

			<div className="monogram-section">
				<h2>
					The <br /> Monogram Shop
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, atque quos molestias
					sequi, dolorem obcaecati aliquid eveniet, quia deleniti inventore amet doloribus aliquam
					neque fugiatillo qui facilis vero corrupti.
				</p>

				<Link to="#!" className="btn-outline">
					EXPLORE
				</Link>
			</div>

			<img src={ShopBG} className="monogram-bg" alt="hero-bg" />
		</section>
	);
};

export default Shop;
