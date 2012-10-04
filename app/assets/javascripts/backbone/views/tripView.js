TimeTravel.Views.TripView = Backbone.View.extend({
  className: 'trip trip_entry span-6',

  initialize: function() {
    _.bindAll(this, 'render', 'formatDate', 'presentTrip', 'formatPrice');
  },

  render: function() {
    this.$el.html(TimeTravel.template('tripViewTemplate').render(this.presentTrip()));
    return this;
  },

  formatDate: function(aMoment) {
    return aMoment.format("MMMM D, YYYY");
  },

  formatPrice: function(aFloat) {
    return "$" + aFloat.toFixed(2).toLocaleString();
  },

  presentTrip: function() {
    var result = this.model.toJSON();
    result.startDateDisplay = this.formatDate(result.startMoment);
    result.endDateDisplay = this.formatDate(result.endMoment);
    result.priceDisplay = this.formatPrice(result.price);
    return result;
  }
});
