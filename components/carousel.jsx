import React from 'react'

export default function carousel(props) {
	return (
		<div id="carousel-testimonial" class="carousel slide" data-ride="carousel">
		
		<div class="carousel-inner" role="listbox">
			{props.children}
		</div>

		<a class="left carousel-control" href="#carousel-testimonial" role="button" data-slide="prev">
			<i class="material-icons" aria-hidden="true">chevron_left</i>
		</a>
		<a class="right carousel-control" href="#carousel-testimonial" role="button" data-slide="next">
			<i class="material-icons" aria-hidden="true">chevron_right</i>
		</a>
	</div>

	)
}