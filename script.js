
$(document).ready(function () {


    $(".slider").click(function () {

        // $("#data").slideToggle(2000, function () {
        //     console.log("slide toggle done");
        // });
        // $("#data").fadeOut(2000);
        // $("#data").fadeToggle(2000);
        // $("#data").slideDown(3000);
        $(".data").css("opacity", "0.9", 1000);
        // $("#data").css("opacity", "0", 1000);
    });

    $(".slider").dblclick(function () {

        // $("#data").slideToggle(2000, function () {
        //     console.log("slide toggle done");
        // });
        // $("#data").fadeOut(2000);
        // $("#data").fadeToggle(2000);
        // $("#data").slideDown(3000);
        $(".data").css("opacity", "0", 1000);
        // $("#data").css("opacity", "0", 1000);
    });

    $(".b1").click(function () {
        $(".t1").slideDown(500);
        $(".plus1").text("x");
        // document.getElementById("plus").innerText="x";

        $(".b1").dblclick(function () {
            $(".t1").slideUp(500);
            $(".plus1").text("+");
            // document.getElementById("plus").innerText="+";
            // document.getElementById("plus").innerText="+";

        });
    });

    $(".b2").click(function () {
        $(".t2").slideDown(500);
        $(".plus2").text("x");
        // document.getElementById("plus").innerText="x";

        $(".b2").dblclick(function () {
            $(".t2").slideUp(500);
            $(".plus2").text("+");
            // document.getElementById("plus").innerText="+";
            // document.getElementById("plus").innerText="+";

        });
    });

    $(".b3").click(function () {
        $(".t3").slideDown(500);
        $(".plus3").text("x");
        // document.getElementById("plus").innerText="x";

        $(".b3").dblclick(function () {
            $(".t3").slideUp(500);
            $(".plus3").text("+");
            // document.getElementById("plus").innerText="+";
            // document.getElementById("plus").innerText="+";        
        });
    });


    $(".b4").click(function () {
        $(".t4").slideDown(500);
        $(".plus4").text("x");
        // document.getElementById("plus").innerText="x";

        $(".b4").dblclick(function () {
            $(".t4").slideUp(500);
            $(".plus4").text("+");
            // document.getElementById("plus").innerText="+";
            // document.getElementById("plus").innerText="+";

        });
    });

    $(".b5").click(function () {
        $(".t5").slideDown(500);
        $(".plus5").text("x");
        // document.getElementById("plus").innerText="x";

        $(".b5").dblclick(function () {
            $(".t5").slideUp(500);
            $(".plus5").text("+");
            // document.getElementById("plus").innerText="+";
            // document.getElementById("plus").innerText="+";

        });
    });

    $(".b6").click(function () {
        $(".t6").slideDown(500);
        $(".plus6").text("x");
        // document.getElementById("plus").innerText="x";

        $(".b6").dblclick(function () {
            $(".t6").slideUp(500);
            $(".plus6").text("+");
            // document.getElementById("plus").innerText="+";
            // document.getElementById("plus").innerText="+";

        });
    });


    // feature image animation
    // $("#animation").hover(function () {

        // $("#animation img").animate({ transform: translateY("-10px") }, 1000);
        // $("#animation img").animate({ transform: translateY("0px") }, 2000);
        // $("#animation img").animate({ transform: translateY("10px") }, 3000);
        // $("#animation img").animate({ transform: translateY("0px") }, 4000);
    // })






    // $(".data a").hover(function(){
    //     $(".data:a").css("text-decoration","underline",1000);
    // });

    // $("#data").slideDown(2000);



});

// function pluschange(){
//     // document.getElementById("plus").innerText = "X";
// }