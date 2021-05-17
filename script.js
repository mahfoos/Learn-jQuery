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
  

