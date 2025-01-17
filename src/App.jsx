import { useEffect, useState } from "react";
import StarsEffect from "./components/StarsEffect.jsx";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

function App() {
	const [paused, setPaused] = useState(false);

	const [openSections, setOpenSections] = useState({
		section1: false,
		section2: false,
		section3: false,
		section4: false,
		section5: false,
	});

	const toggleSection = (section) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	useEffect(() => {
		const content = document.querySelectorAll(".content");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.3 }
		);

		content.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector(".header");
			const hasScrolledClass = header.classList.contains("scrolled");
			const scrollPosition = window.scrollY > 30;

			if (scrollPosition && !hasScrolledClass) {
				setTimeout(() => {
					header.classList.add("scrolled");
				}, 200);
			} else if (!scrollPosition && hasScrolledClass) {
				setTimeout(() => {
					header.classList.remove("scrolled");
				}, 200);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const slideMenu = () => {
		const slideMenu = document.querySelector(".slideMenu");
		slideMenu.classList.toggle("active");
	};

	return (
		<>
			<main className="appContainer">
				<StarsEffect className="starsEffect" />
				<div className="slideMenu">
					<div className="slideMenuContent">
						<div className="slideMenuTitle">
							<h2 className="slideMenuTitleText">Menu</h2>
						</div>
						<div className="slideMenuLinks">
							<a href="/" className="link">
								About
							</a>
							<a href="/" className="link">
								Sponsors
							</a>
							<a href="/" className="link">
								FAQ
							</a>
						</div>
						<span>fr</span>
						<img src="close.svg" className="close" alt="Close" onClick={() => slideMenu()} />
					</div>
				</div>
				<section className="hero">
					<header className="header">
						<div className="wrapper">
							<h1 className="title">UdeMHacks</h1>
							<div className="mobileNavigator" onClick={() => slideMenu()}></div>
							<div className="navigator">
								<a href="/" className="link">
									About
								</a>
								<a href="/" className="link">
									Sponsors
								</a>
								<a href="/" className="link">
									FAQ
								</a>
								<span>fr</span>
							</div>
						</div>
					</header>

					<div className="centerHero">
						<div className="logo"></div>
						<button className="btn">Pre-register now</button>
					</div>
				</section>

				<section className="mainHome">
					<div className="wrapper">
						<div className="content">
							<div className="contentTitle">
								<img src="anchor.svg" alt="" className="contentSvg" />
								<h2 className="secondTitle">What is a Hackathon?</h2>
							</div>
							<p className="description">
								A hackathon is a 24-hour event, where a team of four students build a software or hardware project, referred to as a ‘hack’. Themes and challenges guide teams toward an idea, and using cutting-edge technologies such as IoT or AI students
								bring them to life.
							</p>
						</div>

						<div className="content">
							<div className="contentTitle">
								<img src="person.svg" alt="" className="contentSvg" />
								<h2 className="secondTitle">Who are we?</h2>
							</div>

							<p className="description">
								UdeMHacks is an inclusive hackathon that aims to bring together emerging talents, experienced developers, and tech enthusiasts to collaborate and create innovative solutions to today’s challenges. Whether you're a beginner or an expert, this
								event is the perfect opportunity to learn, share ideas, and work in teams on real projects that could shape the future. Join us for an immersive and exciting experience where creativity and innovation are at the heart of the action!
							</p>
						</div>

						<div className="content">
							<div className="contentTitle">
								<img src="heartbeat.svg" alt="" className="contentSvg" />
								<h2 className="secondTitle">What to expect</h2>
							</div>

							<p className="description">
								UdeMHacks is a 24-hour event where you can learn, build, and share your ideas with other tech enthusiasts. You'll have the opportunity to work with mentors, attend workshops, and participate in fun activities throughout the event. Whether
								you're a beginner or an expert, UdeMHacks is the perfect opportunity to learn, share ideas, and work in teams on real projects that could shape the future.
							</p>
						</div>
					</div>
				</section>

				<section className="sponsorsHome">
					<h2 className="secondTitle">Sponsors</h2>
					<p className="description">Sponsors make it possible for as many people as possible to participate in UdeMHacks. Want to help us empower the next generation of innovators? Become a sponsor today!</p>
					<br />
					<div className="btn btnSponsor">Become a sponsor</div>
					{/* <div className="slider">
						<div className={"list" + (paused ? " paused" : "")} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
							<div className="sponsor" style={{ "--position": 6 }}>
								Sponsor1
							</div>
							<div className="sponsor" style={{ "--position": 5 }}>
								Sponsor2
							</div>
							<div className="sponsor" style={{ "--position": 4 }}>
								Sponsor3
							</div>
							<div className="sponsor" style={{ "--position": 3 }}>
								Sponsor4
							</div>
							<div className="sponsor" style={{ "--position": 2 }}>
								Sponsor5
							</div>
							<div className="sponsor" style={{ "--position": 1 }}>
								Sponsor6
							</div>
						</div>
					</div> */}
				</section>

				<section className="faqHome">
					<div className="wrapper">
						<h2 className="secondTitle">FAQ</h2>
						<p className="txtDark">Have a question? Find the answer here.</p>

						<div className="question" onClick={() => toggleSection("section1")}>
							<p className="faqQuestion">What is UdeMHacks?</p>
							<SlideDown>
								{openSections.section1 && (
									<div className="slidedown">
										<p>UdeMHacks is an inclusive hackathon that aims to bring together emerging talents, experienced developers, and tech enthusiasts...</p>
									</div>
								)}
							</SlideDown>
						</div>

						<div className="question" onClick={() => toggleSection("section2")}>
							<p className="faqQuestion">Who can participate?</p>
							<SlideDown>
								{openSections.section2 && (
									<div className="slidedown">
										<p>Whether you're a beginner or an expert, UdeMHacks is the perfect opportunity to learn, share ideas, and work in teams on real projects that could shape the future.</p>
									</div>
								)}
							</SlideDown>
						</div>

						<div className="question" onClick={() => toggleSection("section3")}>
							<p className="faqQuestion">When is UdeMHacks?</p>
							<SlideDown>
								{openSections.section3 && (
									<div className="slidedown">
										<p>UdeMHacks will take place from March 1st to March 3rd, 2025. Don't miss out on this exciting event!</p>
									</div>
								)}
							</SlideDown>
						</div>

						<div className="question" onClick={() => toggleSection("section4")}>
							<p className="faqQuestion">How can I become a sponsor?</p>
							<SlideDown>
								{openSections.section4 && (
									<div className="slidedown">
										<p>Become a sponsor today and help empower the next generation of innovators.</p>
									</div>
								)}
							</SlideDown>
						</div>

						<div className="question" onClick={() => toggleSection("section5")}>
							<p className="faqQuestion">How can I join the team?</p>
							<SlideDown>
								{openSections.section5 && (
									<div className="slidedown">
										<p>Join our team today and become a part of the next generation of innovators.</p>
									</div>
								)}
							</SlideDown>
						</div>
					</div>
				</section>

				<footer className="footer">
					<div className="contact">
						<div>
							<h2>Contact us</h2>
						</div>

						<div className="social">
							<img src="mail.svg" alt="mail" onClick={() => window.open("mailto:WgW2D@example.com")} />
							<img src="linkedin.svg" alt="Linkedin" onClick={() => window.open("https://www.linkedin.com/company/udemhacks/")} />
							<img src="instagram.svg" alt="Instagram" onClick={() => window.open("https://www.instagram.com/udemhacks/")} />
						</div>
					</div>

					<div className="copyright">
						<p>&copy; 2025 UdeMHacks.</p>
						<p>All rights reserved.</p>
					</div>
				</footer>
			</main>
		</>
	);
}

export default App;
