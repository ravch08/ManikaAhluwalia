import { Link } from "react-router-dom";
import { MenImg, WomenImg } from "../utils/helper";

const NewArrival = () => {
	return (
		<section id="new-arrival" title="New Arrivals">
			<div className="container">
				<div className="new-arrival-wrapper">
					<div className="women">
						<figure>
							<img src={WomenImg} className="w-100" alt="women" />
						</figure>
						<div className="women-content">
							<div className="horz-line"></div>
							<span>NEW ARRIVALS</span>
							<h2>Women's</h2>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse accusantium error
								magni?
							</p>
							<Link to="#!" className="btn-arrow">
								Discover
								<svg
									width="15.211"
									height="9.507"
									viewBox="0 0 15.211 9.507"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="Icon_open-arrow-right"
										data-name="Icon open-arrow-right"
										d="M9.507,0V3.8H0V5.7H9.507v3.8l5.7-4.81Z"
									/>
								</svg>
							</Link>
						</div>
					</div>

					<div className="men">
						<figure>
							<img src={MenImg} className="w-100" alt="men" />
						</figure>
						<div className="men-content">
							<h2>Men's</h2>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet fugiat
								saepe.
							</p>
							<Link to="#!" className="btn-arrow">
								Discover
								<svg
									width="15.211"
									height="9.507"
									viewBox="0 0 15.211 9.507"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="Icon_open-arrow-right"
										data-name="Icon open-arrow-right"
										d="M9.507,0V3.8H0V5.7H9.507v3.8l5.7-4.81Z"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewArrival;
