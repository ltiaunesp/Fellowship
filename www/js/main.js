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

function getqueries(field){
  var queries = [];
  try{
    var queries = window.location.search.replace("?","").split("&");
    var len = queries.length;
    for(var i = 0; i < len; i++) {
      var splited = queries[i].split("=");
      if(field !== undefined && splited[0] == field){
        return splited[1];
      }
      queries[i] = {
        name  : splited[0],
        value : splited[1]
      }
    }
  }catch(e){
    console.error(e);
    console.log(queries);
    return [];
  }
  return queries;
}
