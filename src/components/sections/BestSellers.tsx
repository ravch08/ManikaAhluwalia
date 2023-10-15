import bestSellerItems from "../utils/data.tsx";
import { BestSellerItem } from "../utils/helper";

const BestSellers = () => {
	const bestSellerItemsList = bestSellerItems.map((bestSellerItem) => (
		<BestSellerItem
			key={bestSellerItem.id}
			title={bestSellerItem.title}
			imgSrc={bestSellerItem.imgSrc}
			description={bestSellerItem.description}
		/>
	));

	return (
		<section id="bestsellers" title="Bestsellers">
			<div className="container">
				<div className="bestsellers-wrapper">
					<div className="section-heading">
						<div className="horz-line"></div>
						<span>LOREM IPSUM</span>
						<h2>Our bestsellers</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus magnam porro
							asperiores ratione repellendus dignissimos unde.
						</p>
					</div>

					<div className="bestsellers-list"> {bestSellerItemsList} </div>
				</div>
			</div>
		</section>
	);
};

export default BestSellers;
