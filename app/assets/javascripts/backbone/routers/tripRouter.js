TimeTravel.Routers.TripRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    $container = $("#container");
    $container.append(this.topNavigationView.render().el);
    $container.append(this.sidebarView.render().el);
  },

  initialize: function(){
    this.topNavigationView = new TimeTravel.Views.TopNavigationView();
    this.sidebarView = new TimeTravel.Views.SidebarView();
  }
});

