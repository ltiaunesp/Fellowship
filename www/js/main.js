function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
      var thisHeight = $(this).height();
      if(thisHeight > tallest) {
          tallest = thisHeight;
      }
  });
  group.each(function() { $(this).height(tallest); });
}
