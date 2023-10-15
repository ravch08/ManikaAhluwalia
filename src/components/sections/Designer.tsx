import { Author } from "../utils/helper";

const Designer = () => {
	return (
		<section id="designer" title="Our Designer">
			<div className="container">
				<div className="designer-wrapper">
					<figure>
						<img src={Author} className="w-100" alt="designer" />
					</figure>

					<div className="monogram-section">
						<div className="horz-line"></div>
						<span>EXPLORE</span>
						<h2>Our Desinger</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ad architecto commodi
							blanditiis at ratione ducimus, enim rem ullam placeat nihil quo explicabo doloremque
							voluptas? Velit, ex. Deleniti, corrupti earum.
							<br /> <br />
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore amet consectetur
							pariatur laboriosam, obcaecati, aperiam voluptatum natus odio consequuntur facilis
							perspiciatis, magnam molestias sequi!
						</p>

						<div className="d-flex">
							<div className="horz-line2"></div>
							<div className="author">
								<p>MAIKA AHLUWALIA</p>
								<small>FOUNDER & CREATIVE HEAD</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Designer;
