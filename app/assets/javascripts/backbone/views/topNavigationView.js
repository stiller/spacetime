TimeTravel.Views.TopNavigationView = Backbone.View.extend({
  tagName: 'nav',
  className: 'topNav',

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function(){
    this.$el.html(
      TimeTravel.template('topNavigationViewTemplate').render());
      return this;
  },

  template: function(filename) {
    return HoganTemlates["backbone/templates/" + filename];
  }
});
