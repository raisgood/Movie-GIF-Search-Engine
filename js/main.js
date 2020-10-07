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

$(document).ready(()=>{
  
  $("#submit").click(()=>{
    let userInput = $("#search").val()
    // alert(userInput)
  alert(userInput)
     $.ajax({ url:'https://www.omdbapi.com/?apikey=387cdace=${'userInput'})
    .done((res)=>{
      let movies = res.Search;
      $.each(movies, (i, e)=>{   
 let poster = e.Poster       console.log("poster", poster)
 $("body").append('<img src="${poster}" alt="movie poster"/>')
})                           })
     })