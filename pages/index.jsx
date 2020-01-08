import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

export default function () {
	return (
		<Layout>
			<div className="modal fade" id="infotaker" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-login">
					<div className="modal-content">
						<div className="card card-signup card-plain">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="material-icons">clear</i></button>
			
								<div className="header header-primary text-center">
									<h4 className="card-title">Fill this</h4>
									{/* <!-- <div className="social-line">
										<a href="#pablo" className="btn btn-just-icon btn-simple">
											<i className="fa fa-facebook-square"></i>
										</a>
										<a href="#pablo" className="btn btn-just-icon btn-simple">
											<i className="fa fa-twitter"></i>
										</a>
										<a href="#pablo" className="btn btn-just-icon btn-simple">
											<i className="fa fa-google-plus"></i>
										</a>
									</div> --> */}
								</div>
							</div>
							<div className="modal-body">
								<form className="form" method="" action="">
									<div className="card-content">
			
											<select className="selectpicker" data-style="btn btn-warning btn-round" title="Single Select" data-size="7">
													<option disabled selected>Choose Brand</option>
													<option value="2">Audi</option>
													<option value="3">Mercedez</option>
											</select>
											<select className="selectpicker" data-style="btn btn-rose btn-round" title="Single Select" data-size="7">
													<option disabled selected>Choose Model</option>
													<option value="2">R7</option>
													<option value="3">Benz</option>
											</select>
											<select className="selectpicker" data-style="btn btn-primary btn-round" title="Single Select" data-size="7">
													<option disabled selected>Choose Fuel</option>
													<option value="2">Petrol</option>
													<option value="3">Dhakka</option>
											</select>
											<button className="btn btn-round btn-success btn-block"><i className="material-icons">search</i> Find</button>
											
									</div>
								</form>
							</div>
							
						</div>
					</div>
				</div>
			</div>

    <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: "url('/Img/stock_photo.jpg')"}}>
		<Container className="container">
			<Grid container>
				<Grid item>
				<h1 className="title">Your Story Starts With Us</h1>
                    <h4>Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.</h4>
                    <br />
                    <a href="#" target="_blank" className="btn btn-round btn-danger btn-raised btn-lg">
						<i className="fa fa-play"></i> Watch video
					</a>
					<a data-toggle="modal" data-target="#infotaker" className="btn btn-round btn-primary btn-raised btn-lg">
							<i className="fa fa-car"></i>  Book
					</a>

				</Grid>
			</Grid>
		</Container>
        {/* <div className="container">
            <div className="row">
				<div className="col-md-8 col-md-offset-2">
				</div>
				
            </div>
        </div> */}
    </div>

	<div className="main main-raised">
		<div className="container">
	    	<div className="section text-center">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h2 className="title">Why Us?</h2>
                        <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                    </div>
                </div>

				<div className="features">
					<div className="row">
						<div className="col-md-4">
							<div className="info">
								<div className="icon icon-info">
									<i className="material-icons">accessibility</i>
								</div>
								<h4 className="info-title">We Make Easy</h4>
								<p>Get a quote and book a service online 24/7. Our mechanics will come to your home or office, even on evenings and weekends.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="info">
								<div className="icon icon-success">
									<i className="material-icons">attach_money</i>
								</div>
								<h4 className="info-title">Fair Pricing</h4>
								<p>We offer fair and transparent pricing and provide estimates upfront for hundreds of services on thousands of cars. Book with confidence.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="info">
								<div className="icon icon-danger">
									<i className="material-icons">face</i>
								</div>
								<h4 className="info-title">Happiness Guranteed</h4>
								<p>We only work with highly rated mechanics. All services are backed by our 12-month / 12,000-mile warranty.</p>
							</div>
						</div>
	                </div>
				</div>

				
            </div>
		</div>	
			<div className="features-5" style={{backgroundImage: "url('assets/Img/stock_photo.jpg')"}}>

					<div className="col-md-8 col-md-offset-2 text-center">
						<h2 className="title">Your life will be much easier</h2>
					</div>
			
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="info">
									<div className="icon">
										<i className="material-icons">code</i>
									</div>
									<h4 className="info-title">For Developers</h4>
									<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
								</div>
							</div>
			
							<div className="col-sm-4">
								<div className="info">
									<div className="icon">
										<i className="material-icons">format_paint</i>
									</div>
									<h4 className="info-title">For Designers</h4>
									<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
								</div>
							</div>
			
							<div className="col-sm-4">
								<div className="info">
									<div className="icon">
										<i className="material-icons">dashboard</i>
									</div>
									<h4 className="info-title">Bootstrap Grid</h4>
									<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
								</div>
							</div>
			
						</div>
			
						<div className="row">
			
							<div className="col-sm-4">
								<div className="info">
									<div className="icon">
										<i className="material-icons">view_carousel</i>
									</div>
									<h4 className="info-title">Example Pages Included</h4>
									<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
								</div>
							</div>
			
							<div className="col-sm-4">
								<div className="info">
									<div className="icon">
										<i className="material-icons">access_time</i>
									</div>
									<h4 className="info-title">Save Time</h4>
									<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
								</div>
							</div>
			
							<div className="col-sm-4">
								<div className="info">
									<div className="icon">
										<i className="material-icons">attach_money</i>
									</div>
									<h4 className="info-title">Save Money</h4>
									<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
								</div>
							</div>
						</div>
			
					</div>
			</div>

		<div className="container">
				<div className="features-2">
						<div className="row">
							<div className="col-md-8 col-md-offset-2 text-center">
								<h2 className="title">Why our product is the best</h2>
								<h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h5>
							</div>
						</div>
			
						<div className="row">
							<div className="col-md-4">
								   <div className="info info-horizontal">
									<div className="icon icon-info">
										<i className="material-icons">group_work</i>
									</div>
									<div className="description">
										<h4 className="info-title">Collaborate</h4>
										<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
										<a href="#pablo">Find more...</a>
									</div>
								</div>
			
							</div>
			
							<div className="col-md-4">
								<div className="info info-horizontal">
									<div className="icon icon-danger">
										<i className="material-icons">airplay</i>
									</div>
									<div className="description">
										<h4 className="info-title">Airplay</h4>
										<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
										<a href="#pablo">Find more...</a>
									</div>
								</div>
							</div>
			
							<div className="col-md-4">
								<div className="info info-horizontal">
									<div className="icon icon-success">
										<i className="material-icons">location_on</i>
									</div>
									<div className="description">
										<h4 className="info-title">Location Integrated</h4>
										<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
										<a href="#pablo">Find more...</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
								<div className="col-md-4">
									   <div className="info info-horizontal">
										<div className="icon icon-info">
											<i className="material-icons">group_work</i>
										</div>
										<div className="description">
											<h4 className="info-title">Collaborate</h4>
											<p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
											<a href="#pablo">Find more...</a>
										</div>
									</div>
				
								</div>
				
								<div className="col-md-4">
									<div className="info info-horizontal">
										<div className="icon icon-danger">
											<i className="material-icons">airplay</i>
										</div>
										<div className="description">
											<h4 className="info-title">Airplay</h4>
											<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
											<a href="#pablo">Find more...</a>
										</div>
									</div>
								</div>
				
								<div className="col-md-4">
									<div className="info info-horizontal">
										<div className="icon icon-success">
											<i className="material-icons">location_on</i>
										</div>
										<div className="description">
											<h4 className="info-title">Location Integrated</h4>
											<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
											<a href="#pablo">Find more...</a>
										</div>
									</div>
								</div>
						</div>
			
				</div>

		</div>

		<div className="testimonials-2 section-dark">

				<div className="container">
		
					<div className="row">
		
						<div id="carousel-testimonial" className="carousel slide" data-ride="carousel">
		
							<div className="carousel-inner" role="listbox">
								<div className="item active">
									<div className="card card-testimonial card-plain">
										<div className="card-avatar">
											<a href="#pablo">
												<img className="img" src="assets/img/faces/kendall.jpg" />
											</a>
										</div>
		
										<div className="card-content">
											<h5 className="card-description">"I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future. My brother Chance!!! <br/>Thank you for letting me work on this masterpiece. One of my favorite people."
											</h5>
											<h4 className="card-title">Cheche hasmukhlal</h4>
											<h6 className="category text-muted">CEO @ Marketing Digital Ltd.</h6>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="card card-testimonial card-plain">
										<div className="card-avatar">
											<a href="#pablo">
												<img className="img" src="assets/img/faces/christian.jpg" />
											</a>
										</div>
		
										<div className="card-content">
											<h5 className="card-description">"maje lele"
											</h5>
											<h4 className="card-title">Chuchu hasmukhlal</h4>
											<h6 className="category text-muted">Designer @ Louboutin & Co.</h6>
										</div>
									</div>
								</div>
							</div>
		
							<a className="left carousel-control" href="#carousel-testimonial" role="button" data-slide="prev">
								<i className="material-icons" aria-hidden="true">chevron_left</i>
							</a>
							<a className="right carousel-control" href="#carousel-testimonial" role="button" data-slide="next">
								<i className="material-icons" aria-hidden="true">chevron_right</i>
							</a>
						</div>
		
					</div>
		
				</div>
			</div>


		<div className="container">

        	<div className="section section-contacts">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h2 className="text-center title">Work with us</h2>
						<h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">Your Name</label>
										<input type="email" className="form-control"/>
									</div>
                                </div>
                                <div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">Your Email</label>
										<input type="email" className="form-control"/>
									</div>
                                </div>
                            </div>

							<div className="form-group label-floating">
								<label className="control-label">Your Messge</label>
								<textarea className="form-control" rows="4"></textarea>
							</div>

                            <div className="row">
                                <div className="col-md-4 col-md-offset-4 text-center">
                                    <button className="btn btn-primary btn-raised">
										Send Message
									</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

	</div>
		</Layout>
	)
}