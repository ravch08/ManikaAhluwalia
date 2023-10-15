import { BestSellerProps } from "../../types/types";

const BestSellerItem = (props: BestSellerProps) => {
	return (
		<div className="bestsellers-product">
			<figure>
				<img src={props.imgSrc} className="w-100" alt={props.title} />
			</figure>
			<div className="product-content">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default BestSellerItem;
