//a generic function for retreiving the text contents of an element
function text(e) {
  var t = "";

  //If an element was passed, get its children,else assume it's an array
  e = e.childNodes || e;

  //Look through all child nodes
  for ( var j = 0; j < e.length; j++ ) {
    //If it's not an element, append its text value, else recurse
    t += e[j].nodeType != 1 ? e[j].nodeValue : text(e[j].childNodes);
  }
  return t;
}
