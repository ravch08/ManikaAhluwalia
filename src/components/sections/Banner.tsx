import { Link } from "react-router-dom";

import { Banner1100, Banner1300, Banner576, Banner768, BannerBG, BannerImg } from "../utils/helper";

const Banner = () => {
	return (
		<section id="hero-image">
			<picture>
				<source media="(max-width:576px)" srcSet={Banner576} />
				<source media="(max-width:768px)" srcSet={Banner768} />
				<source media="(max-width:1100px)" srcSet={Banner1100} />
				<source media="(max-width:1300px)" srcSet={Banner1300} />
				<img src={BannerImg} alt="hero Image" />
			</picture>

			<div className="hero-content">
				<div className="horz-line"></div>
				<span>FOR HIM & HER</span>
				<h1>
					Collection <br /> of Accessories
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt aliquid voluptates
					error exercitationem quam fugiat alias, atque, repellat animi veniam nam expedita
					perferendis eos, repudiandae iusto sit quisquam voluptatibus provident.
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

				<img src={BannerBG} className="hero-bg" alt="Hero BG" />
			</div>
		</section>
	);
};

export default Banner;
