(function($){
	var SimpleModel = Backbone.Model.extend({
		defaults: {
			item1: "hello",
			item2: "world"
		}
	});

	var SimpleCollection = Backbone.Collection.extend({
		model: SimpleModel
	});

	var SimpleView = Backbone.View.extend({
		el: $('body'),

		events: {
			"click button#add": "addItem"
		},

		initialize: function(){
			_.bindAll(this,"render", "addItem","appendModel");


			this.collection = new SimpleCollection();
			this.collection.bind('add', this.appendModel);
			
			this.counter=0;
			this.render();
		},

		render: function(){
			$(this.el).append("<button id='add'>Click</button>");
			$(this.el).append("<ul></ul>");
			_(this.collection.models).each(function(model){
				this.appendModel(model);
			});
		},

		addItem: function(){
			var model = new SimpleModel;
			model.set({
				item2: model.get('item2') + " " + this.counter++
			});
			this.collection.add(model);
		},

		appendModel: function(model) {
			$(this.el).append("<li>"+model.get('item1')+" "+model.get('item2')+ "</li>");
		}
	});

	var View = new SimpleView();
})(jQuery);