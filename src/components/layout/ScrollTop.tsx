import { useEffect, useState } from "react";

const ScrollTop = () => {
	const [scroll, setScroll] = useState("");

	const isScrolling = () => {
		const scrollClass = window.scrollY > 250 ? "show" : "";
		setScroll(scrollClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", isScrolling);
		return () => window.removeEventListener("scroll", isScrolling);
	}, []);

	const scrollTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToTop = scroll ? `${scroll} scroll-top` : "scroll-top";

	return (
		<div className={scrollToTop} onClick={scrollTopHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 320 512">
				<path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
			</svg>
		</div>
	);
};

export default ScrollTop;
