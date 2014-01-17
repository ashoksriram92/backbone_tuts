(function($) {

	var SimpleView = Backbone.View.extend ({
		el: $('body'),

		initialize: function() {
			_.bindAll(this, 'render');
			this.render();
		},

		render: function() {
			$(this.el).append("hello world");
		}
	});

	var SimpleView = new SimpleView();
})(jQuery);

