describe('countTo', function() {
  it("it will count to a given number by increments of 1", function() {
    expect(countTo(10,1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
