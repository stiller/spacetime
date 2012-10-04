describe("Rendering all the trips with Backbone", function() {
  var tripData = [{"description":"A cruise","end_date":"1620-11-21", "id":13, "image_name":"mayflower.jpg", "name":"Mayflower Luxury Cruise",
    "price": 1204.0, "start_date":"1620-05-17", "tag_line":"Enjoy The Cruise That Started It All"},
    {"description":"See plays", "end_date":"1605-10-31", "id":14,
    "image_name":"shakespeare.jpg", "name":"See the Plays of Shakespeare",
    "price": 1313.0, "start_date":"1604-11-01",
    "tag_line":"See The Master As Intended"}];

  describe("renders individual views", function() {

    beforeEach(function() {
      this.trips = new TimeTravel.Collections.Trips(tripData);
      this.tripsView = new TimeTravel.Views.TripsView({
        collection: this.trips});
    });

    it("renders a single trip", function() {
      tripView = this.tripsView.renderTrip(this.trips.at(0));
      expect(tripView.$el).toHaveClass("trip");
    });

    it("renders all the trips in context", function() {
      spyOn(this.tripsView, 'renderTrip').andCallThrough();
      this.tripsView.render();
      expect(this.tripsView.renderTrip.calls.length).toEqual(2);
    });
  });

  describe("with a trip view", function() {
    beforeEach(function() {
      this.trip = new TimeTravel.Models.Trip({"description":"A cruise",
    "end_date":"1620-11-21", "id":13, "image_name":"mayflower.jpg",
    "name":"Mayflower Luxury Cruise", "price":1204.0,
    "start_date":"1620-05-17",
    "tag_line":"Enjoy The Cruise That Started It All"});
    });

    describe("display of individuel trip values", function() {

      it("stores begin and end dates as moments", function() {
        this.trip = new TimeTravel.Models.Trip(this.tripData);
        expect(this.trip.get("startMoment")).toEqual(moment("1620-05-17"));
        expect(this.trip.get("endMoment")).toEqual(moment("1620-11-21"));
      });

      it("renders using the presented data", function() {
        result = this.tripView.presentTrip();
        expect(result.startDateDisplay).toEqual("May 17, 1620");
        expect(result.endDateDisplay).toEqual("November 21, 1620");
        expect(result.priceDisplay).toEqual("$1204.00");
      });
    });
  });
});
