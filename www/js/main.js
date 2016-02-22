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

function getqueries(){
  var queries = [];
  try{
    var queries = window.location.search.split("?")[1].split("&");
    queries.forEach( function(val, index){
      var splited = val.split("=");
      queries[index] = {
        name  : splited[0],
        value : splited[1]
      }
    });
  }catch(e){
    console.error(e);
    console.log(queries);
    return [];
  }
  return queries;
}
