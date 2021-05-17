$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });

    $("h2").css({color: "blue"});


  });


  // filter 
  $("header nav li:first").css ( {border : "2px solid red"});
  $("header nav li:last").css ( {border : "2px solid red"});


  $("header nav li:even").css ( {border : "2px solid red"});
  $("header nav li:last").css ( {border : "2px solid red"});

  // Adding & changing content 

  //.appennd() adds content to bottom of the the element 
  //.prepend() adds content to top of element
  //.before() adds content before element 
  //.html() changes the whole html of the element 
  //.text() changes the text of an element 

  var tweet = " <h1> Mahfoos Ahamed</h1>"

  $("#heading hed").append(tweet);
  $("#heading hed").prepend(tweet);


  // Removing content 
  //.empty() - empties the inner HTML of an element
  //.remove() - removes the element completely

  $(".button").empty();
  $(".button").remove();


  // Changeing atribute
  //.removeAttr() - removes an attribute completely 
  //.attr() - can read or set any attribute 

  $("content img").removeAttr("alt"); // removing alt


  // Css with jQuery
  $("#social-nav").css("top", "-200px").css("left", "100px");
  
  $("#social-nav").css({
      "height" : "40",
      "speed" : "100"
  });

  // Adding & Removing Classes
  /*
  removeClass() - remove a class from the matched elements
  addClass() - adds a class to the matched elements
  toggleClass - toggles the class on and off on the matched elements
  */

  $("header .wrapper").removeClass("wrapper");
  $("header > div").removeClass("wrapper");

  





