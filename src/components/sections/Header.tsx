import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo, Sidebar, SocialIcons } from "../utils/helper";

const Header = () => {
	const [sticky, setSticky] = useState("");

	const isSticky = () => {
		const stickyClass = window.scrollY > 250 ? "sticky" : "";
		setSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => window.removeEventListener("scroll", isSticky);
	}, []);

	return (
		<header className={sticky}>
			<div className="container">
				<div className="header-wrapper">
					<div className="navbar">
						<Link to="/" className="nav-brand">
							<img src={Logo} width="80" alt="logo" />
						</Link>

						<nav aria-labelledby="Primary Navigation" className="nav">
							<ul className="nav-list">
								<li className="nav-item">
									<NavLink to="/" className="nav-link">
										HOME
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/women" className="nav-link">
										WOMEN's
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/men" className="nav-link">
										MEN's
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/monogramshop" className="nav-link">
										THE MONOGRAM SHOP
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/gifting" className="nav-link">
										GIFTING
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/contact" className="nav-link">
										CONTACT
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>

					<SocialIcons id="icons-desktop" />

					<Sidebar />
				</div>
			</div>
		</header>
	);
};

export default Header;
