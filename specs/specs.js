describe('countTo', function() {
  it("it will count to the given number by given increments", function() {
    expect(countTo(30,5)).to.eql([5, 10, 15, 20, 25, 30, 35]);
  });

});
// describe('countBy', function () {
//   it("it will count to the given number in given increments", function () {
//     expect(countBy(5)).to.equal(true);
//   })
// });
