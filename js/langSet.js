function langSet() {
  var str = location.href;
  if (str.match("_en.html")) {
    var result = str.replace("_en.html",".html");
	}else{
    if (str.match("html")) {
      var result = str.replace(".html","_en.html");
    }
    else{
      var result = str.replace("github.io","github.io/index_en.html");
    }
	}
  window.location.href = result;
}
