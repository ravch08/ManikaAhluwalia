import React from "react";
import { Link } from "react-router-dom";

import { CopyrightBar, ScrollTop } from "../utils/helper";

const Footer = () => {
	return (
		<React.Fragment>
			<footer>
				<div className="container">
					<div className="footer-wrapper">
						<div className="ftr-logo-content">
							<Link to="/" className="ftr-logo">
								MAIKA AHLUWALIA
							</Link>
							<p>
								Manika Ahluwalia is a luxury brand in the fashion industry that manufactures and
								sells accessories for both him and her. Based out of new Delhi, we focus on not just
								the glitter but also the best quality.
							</p>

							<div className="ftr-input">
								<input type="email" placeholder="Enter Email Address..." />
								<Link to="#!" type="submit" className="btn-submit">
									<svg
										fill="white"
										height="9.507"
										width="15.211"
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

						<div className="ftr-links">
							<span className="ftr-title">QUICK LINKS</span>
							<div className="quick-links">
								<a href="#" className="ftr-navs">
									<svg
										width="18"
										height="18"
										viewBox="0 0 192 512"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									Women's
								</a>
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									Men's
								</a>
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									The Monogram Shop
								</a>
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									Gifting
								</a>
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									About Us
								</a>
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									Contact
								</a>
							</div>
						</div>

						<div className="ftr-links">
							<span className="ftr-title">POLICIES</span>
							<div className="quick-links">
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									Terms & Conditions
								</a>
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									Privacy Policy
								</a>
								<a href="#" className="ftr-navs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 192 512"
									>
										<path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
									</svg>
									Disclaimer
								</a>
							</div>
						</div>

						<div className="get-in-touch">
							<span className="ftr-title">GET IN TOUCH</span>
							<div className="address">
								<strong>Address</strong>
								<span>:</span>
								<p>
									Pragati Maidan, New Delhi, <br />
									Hall No: 9,10,11,12 & 12A, <br />
									Entry Gate: 1,8 & 10
								</p>
							</div>
							<div className="phone">
								<strong>Phone</strong>
								<span>:</span>
								<p>011 416 178 09</p>
							</div>
							<div className="email">
								<strong>Email</strong>
								<span>:</span>
								<p>info@maika.com</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<CopyrightBar />
			<ScrollTop />
		</React.Fragment>
	);
};

export default Footer;
