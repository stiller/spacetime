describe("Rating things", function() {

  beforeEach(function() {
    incomingJSON = '{"values": [0, 2, 4, 6, 8, 10], "id": 3}';
  });

  describe("calculates values from JSON", function() {

    beforeEach(function() {
      rating = new Rating();
      rating.parseJson(incomingJSON);
    });

    it("has the histogram values", function() {
      expect(rating.values[0].count).toBe(2);
      expect(rating.values[0].rating).toBe(1);
      expect(rating.values[4].count).toBe(10);
      expect(rating.values[4].rating).toBe(5);
    });

    it("calculates total rating count", function() {
      expect(rating.totalRatings).toBe(30)
    });

    it("has histogram percentages", function() {
      expect(rating.values[0].percentage).toBe(2.0 / 30 * 100);
      expect(rating.values[4].percentage).toBe(10.0 / 30 * 100);
      expect(rating.values[4].width).toBe(10.0 / 30 * 100 * 3);
    });

    it("calculates average rating", function() {
      expect(rating.averageRating).toBe(110.0 / 30)
      expect(rating.ratingPercentage).toBe(110.0 / 30 / 5 * 100)
    });

  });

  //##template
  describe("acquires jasmine from ajax", function() {

    beforeEach(function() {
      rating = new Rating($("<div id='trip_3'>"));
      $.jasmine.inject({id: 'rating_template', text: "{{totalStars}}"})
      spyOn($, 'ajax').andCallFake(function(ajaxParams) {
        ajaxParams.success(incomingJSON)
      });

    });

    it("knows its url", function() {
      expect(rating.url()).toEqual("/trip/3/rating.json");
    });

    it("can get its template", function() {
      expect(rating.template()).toEqual("{{totalStars}}");
    });

    it("can acquire data", function() {
      rating.acquireJson();
      expect($(rating.element).html()).toEqual("110");
    });

  });
  //##template
});