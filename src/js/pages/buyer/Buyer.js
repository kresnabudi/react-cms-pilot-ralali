import React from "react";


export default class Buyer extends React.Component {
  render() {
    return (
		<div id="content">
			<section>
				<div class="section-header">
					<ol class="breadcrumb">
						<li class="active">Dashboard</li>
					</ol>
				</div>
				<div class="section-body contain-lg">
					<div class="row">
						<div class="col-lg-12">
							<h4>Blank Page</h4>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-12">
							<h4>Loading buttons</h4>
						</div>
						<div class="col-lg-3 col-md-4">
							<article class="margin-bottom-xxl">
								<p>
									Add <code>data-loading-text="Loading..."</code> to use a loading state on a button.
								</p>
							</article>
						</div>
						<div class="col-lg-offset-1 col-md-8">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col-sm-3">
											<button type="button" class="btn ink-reaction btn-flat btn-primary btn-loading-state" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Loading...">Load example</button>
										</div>
										<div class="col-sm-3">
											<button type="button" class="btn ink-reaction btn-raised btn-primary btn-loading-state" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Loading...">Load example</button>
										</div>
										<div class="col-sm-3">
											<button type="button" class="btn ink-reaction btn-floating-action btn-sm btn-primary btn-loading-state" data-toggle="dropdown" data-loading-text="<i class='fa fa-spinner fa-spin'></i>"><i class="fa fa-star"></i></button>
										</div>
										<div class="col-sm-3">
											<button type="button" class="btn ink-reaction btn-icon-toggle btn-primary btn-loading-state" data-toggle="dropdown" data-loading-text="<i class='fa fa-spinner fa-spin'></i>"><i class="fa fa-star"></i></button>
										</div>
									</div>
								</div>
							</div>
							<em class="text-caption">Click the buttons to see the loading states</em>
						</div>
					</div>
				</div>
			</section>
		</div>
    );
  }
}
