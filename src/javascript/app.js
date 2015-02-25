
var React         = require('react');

var Reflux        = require('reflux');

var Router        = require('react-router');
var Route         = Router.Route;
var RouteHandler  = Router.RouteHandler;
var Redirect      = Router.Redirect;
var DefaultRoute  = Router.DefaultRoute;


var PsychApp = React.createClass({
	// this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
	//mixins: [Reflux.connect(todoListStore, "list")],

	render: function () {
		return (
			<div>
				<h1>Psychwire</h1>
				<section>
					<ul>

					</ul>

				</section>

				<RouteHandler/>
			</div>
		);
	}
});

var routes = (
	<Route handler={PsychApp} path="/">

	</Route>
);

console.log(routes);


Router.run(routes, function(Handler) {
	React.initializeTouchEvents(true);
	React.render(<Handler />, document.body);
});