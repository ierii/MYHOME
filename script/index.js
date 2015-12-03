$(document).ready(function () {
	var ME = {
		DOM: {
			$mainNav: $('#main-nav'),
			$mainWrapper: $('#main-wrapper'),
		},
		USE: {
			currIndex: 0,
			mwPoints: [{
				x: "0%",
				y: "0%"
			}, {
				x: "-100%",
				y: "0%"
			}, {
				x: "-100%",
				y: "-100%"
			}, {
				x: "0%",
				y: "-100%"
			}]
		}
	};
	ME.DOM.$mainNav.on('click', 'ul>li', function (event) {
		var index = $(this).data('index');
		if (index&&index === ME.USE.currIndex) return;
		var ponit = ME.USE.mwPoints[index];
		ME.USE.currIndex = index;
		ME.DOM.$mainWrapper.css({
			left: ponit.x,
			top: ponit.y
		});
	});
});
