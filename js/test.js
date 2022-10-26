
$(document).ready(function(){

    $(".parent_ancor").css("left", "-500.875px")
let space = $(".parent_ancor").innerWidth()


$(".option").click(function(){

    if( $(".parent_ancor").css("left")== "0px"){
       
        $(".parent_ancor").animate({left:-space},1000)
    }
    else{
        $(".parent_ancor").animate({left:0},1000)
    }

})

$(".parent_ancor i").click(function(){

    $(".parent_ancor").animate({left:-space},2000)
})
$(".one_h3").click(function(){

    $(".p1").slideToggle(1000)
    $(".p2").slideUp(1000)
    $(".p3").slideUp(1000)
    $(".p4").slideUp(1000)
})
$(".two_h3").click(function(){
    $(".p2").slideToggle(1000)
    $(".p1").slideUp(1000)
    $(".p3").slideUp(1000)
    $(".p4").slideUp(1000)
})
$(".three_h3").click(function(){
    $(".p3").slideToggle(1000)
    $(".p1").slideUp(1000)
    $(".p2").slideUp(1000)
    $(".p4").slideUp(1000)
})
$(".four_h3").click(function(){
    $(".p4").slideToggle(1000)
    $(".p1").slideUp(1000)
    $(".p2").slideUp(1000)
    $(".p3").slideUp(1000)
})


//  counter

let countDownDate = new Date("Dec 28, 2022  23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime()

    let dateDiff = countDownDate - dateNow;

    // day

    let days = Math.floor(dateDiff/ (1000 * 60 * 60 * 24))

      document.querySelector(".days").innerHTML = days + " D"


         // hour
    let hours  = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    document.querySelector(".hours").innerHTML = hours + " h"

     // minutes
    let minutes  = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
    document.querySelector(".minutes").innerHTML = minutes + " m"
   
     // secondes

    let secondes  = Math.floor(dateDiff % (1000 * 60) / (1000))
    
    document.querySelector(".secondes").innerHTML = secondes + " s"
    
},1000)



$("textarea").focus(function(){
    $("textarea").css("boxShadow" , "0px 0px 5px  2px  #66AFE9")
})
$("textarea").blur(function(){
    $("textarea").css("boxShadow" , "none")
})

$(".input1").focus(function(){
    $(".input1").css("boxShadow" , "0px 0px 5px  2px  #66AFE9")
})
$(".input1").blur(function(){
    $(".input1").css("boxShadow" , "none")
})
$(".input2").focus(function(){
    $(".input2").css("boxShadow" , "0px 0px 5px  2px  #66AFE9")
})
$(".input2").blur(function(){
    $(".input2").css("boxShadow" , "none")
})



let maxlength = "100";

$("textarea").keyup(function(){


    let show =   maxlength - $("textarea").val() 


   document.querySelector(".numper").innerHTML = show

})

})
