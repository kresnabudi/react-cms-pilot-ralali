import React from 'react';

const NotFound = ({location}) => {
    return (
    	<div id="content">
			<section>
				<div class="section-header">
				</div>
				<div class="section-body contain-lg">
					<div class="row">
						<div class="col-lg-12 text-center">
							<h1><span class="text-xxxl text-light">404 <i class="fa fa-search-minus text-primary"></i></span></h1>
							<h2 class="text-light">Oops! Sorry, following page is not exist: {location.pathname}</h2>
						</div>
					</div>
				</div>
			</section>
		</div>
    );
};

export default NotFound;