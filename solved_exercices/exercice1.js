$(document).ready(function(){

/*PART I*/
/*1*/
  $("div .module").append("<p><strong>**This element is appened into the div elements with the class module**</strong></p>");

  $('#myListItem').text("This is the third element");

  $('#listItem_2').next().css("background-color","red");

/*2*/
  $('.bar').next().css("color","#ffffff");

/*3*/
$("[for='q']").text('selecting the label from the search result through its attribute');

/*4*/
var hidden= $("body > *").filter(":hidden").size();

console.log("hidden elements: " + hidden);

/*5*/
var img_count = $("img[alt]").length;

console.log('Total images with alt attribute: ' + img_count);

/*6*/
$("tbody tr:odd").css('background-color','#F0F0F0');

/*PART II*/

/*1*/
var img_atr= $("img[alt]").val(function() {
    return $(this).attr("alt");
});

for(var i=0;i<img_atr.length;i++){

console.log(img_atr[i].alt);

}

/*2*/
$(".input_text").parent().addClass("search_form");

/*3*/

$("#myList").find("li:eq(4)").removeClass("current");


$("#myList").find("li:eq(5)").addClass("current");

/*PART III*/

/*1*/
$("#specials").find("li").next().find("[value=Go]").val("button found!");

/*2*/
$("#slideshow").find("li").first().addClass("current");

$("#slideshow").find("li").first().siblings().addClass("disabled");

/*PART IV*/

/*1*/
  for(var i=0;i<5;i++){
  $("#myList").append("<li></li>");
  }
/*2*/
$("#myList").find("li:odd").remove();

/*3*/
$("div .module").last().append("<h2>new element appened</h2>");
$("div .module").last().append("<p>new element appened  </p>");

/*4*/
$("select").append("<option>Wednesday<option>");

/*5*/
$("body").append("<div id='last_div' class='module'></div>");
$("#last_div").append("</br><img src='images/vegetable.jpg'>");

});
