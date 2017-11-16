//Start manipulating DOM once it gets loaded fully
window.onload = function() {
  //Find all the <li> elements in the document
  var li = document.getElementsByTagName("li");

  //add a border around all of them
  for ( var j = 0; j < li.length; j++ ) {
    li[j].style.border = "1px solid #000";
  }

  //Locate the element with an ID OF 'everywhere'
  var every = document.getElementById( "everywhere" );

  //and remove it from the document
  every.parentNode.removeChild( every );
};
