(function($){
	var EventsView = Backbone.View.extend({
		el: $('body'),
		
		events: {
			"click button#add": 'addItem'
		},

		initialize: function(){
			_.bindAll(this, 'render', 'addItem');

			this.counter=0;
			this.render();
		},

		render: function(){
			$(this.el).append("<button id='add'>Click</button>");
			$(this.el).append("<ul></ul");
		},

		addItem: function(){
			$('ul').append("<li>Added " + this.counter++);
		}

	});
	var eventsDemo = new EventsView();
})(jQuery);