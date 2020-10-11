/*As an user, I want to be able to:
-type in text
-click submit
-view movies on page

From the technical side: 
- detect when submit clicked
-grab user input
-use user input in our api call
-parse the response
-display data accordingly
*/

$(document).ready(function(){
  
  $("#submit").click(function(){
    let userInput = $("#search")
  alert(userInput)
     $.ajax({ url:"http://www.omdbapi.com/?i=tt3896198&apikey=387cdace"})
    .done((res)=>{
      let movies = res.Search;
      $.each(movies, (i, e)=>{   
 let poster = e.Poster       
 console.log("poster", poster)
 $("body").append('<img src="${poster}" alt="movie poster"/>')
});                           
});
});
});