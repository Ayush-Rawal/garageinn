import React from 'react'

export default function () {
	return (
		<nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll" color-on-scroll="100" id="sectionsNav">
			<div className="container">
				{/* <!-- Brand and toggle get grouped for better mobile display --> */}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<img href="./index.html" className="navbar-brand" src="/Img/GarageInn.png" />
					<a href="./index.html" className="navbar-brand">Garagein</a>
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="index.html">
								<i className="material-icons">home</i>Home
											</a>
						</li>
						<li className="dropdown" id="headerNavigationItems">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">
								Our Services
										<b className="caret"></b>
							</a>
							<ul className="dropdown-menu dropdown-with-icons">
								<li>
									<a href="#headers">
										Car Service
											</a>
								</li>
								<li>
									<a href="#features">
										Dent Paint
											</a>
								</li>
								<li>
									<a href="#blogs">
										Car Cleaninig
											</a>
								</li>
								<li>
									<a href="#teams">
										Wheel Care
											</a>
								</li>
								<li>
									<a href="#projects">
										AC Service
											</a>
								</li>
								<li>
									<a href="#pricing">
										Car Wrapping
											</a>
								</li>
								<li>
									<a href="#testimonials">
										Nano Coating
											</a>
								</li>


							</ul>
						</li>
						<li>
							<a href="index.html">
								Blog
									</a>
						</li>
						<li>
							<a href="index.html">
								Partner
									</a>
						</li>
						<li>
							<a href="index.html">
								Refer and Earn
									</a>
						</li>
						<li>
							<a href="index.html">
								Car Granth
									</a>
						</li>
						<li className="dropdown" id="headerNavigationItems">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">
								More
											<b className="caret"></b>
							</a>
							<ul className="dropdown-menu dropdown-with-icons">
								<li>
									<a href="#headers">
										About Us
												</a>
								</li>
								<li>
									<a href="#features">
										Contact Us
												</a>
								</li>
								<li>
									<a href="#blogs">
										FAQs
												</a>
								</li>
								<li>
									<a href="#teams">
										Corporate
												</a>
								</li>
							</ul>
						</li>
						<li>
							<a className="btn btn-danger btn-round">
								<i className="material-icons">fingerprint</i> Login
									</a>
						</li>

						<li className="button-container">
							<a className="btn btn-primary btn-round">
								<i className="material-icons">shopping_cart</i> Buy Now
									</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}