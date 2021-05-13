$(document).ready(function () {

    //each() array

    $("p").each(function (index, item) { //index  = 0, 1 ,2 ...
        console.log($(this/*or item*/).text());

        if (index % 2 == 0) {
            $(this).css("background", "#ff0000");
        }
        else {
            $(this).css("background", "#ffff00");
        }
        
    })
    //html(), text() read, write
    console.log("htmlmethod : " + $("#htmlmethod").html()); //read
    $("#htmlmethod").html("<strong>new</strong>" + $("#textmethod").html()); //write

    console.log("textmethod : " + $("#textmethod").text());
    $("#textmethod").text("new" + $("#textmethod").text());

    //addClass() removeClass()
    $("#addClass").addClass("addCla");
    $(".addCla").css("background", "#ff7854");

    $("#removeClass").removeClass("removeCls"); //$(".removeCls").removeClass("removeCls")

    //attr()
    $("#attrmethod img").attr("src", "img/emblem.jpg");
    console.log("#attrmethod img : " + $("#attrmethod img").attr("src"));

    //removeAttr()
    $("#attrmethod img").removeAttr("src");
    console.log("#attrmethod img : " + $("#attrmethod img").attr("src"));

    //css()
    $("#cssmethod").css("width", "300px").css("height", "200px").css("background", "#ff0000");
    console.log("#cssmethod background" + $("#cssmethod").css("background"));

    //remove() empty()
    $("#removeM").remove(); //object remove
    $("#emptyM").empty(); //object content remove
    
})
