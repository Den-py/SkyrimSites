let sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

let limit = 1;

function rightButton() {

    if (limit < 7) {
        limit++;
        console.log($("#card_" + limit));
        console.log($("#card_" + (limit + 3)));
        $("#card_" + (limit - 1)).fadeTo(500, '0.1');
        setTimeout(function () {
            $("#card_" + (limit - 1)).removeClass('card_visible');
            $("#card_" + (limit - 1)).addClass('card_unvisible');

            $("#card_" + (limit + 2)).removeClass('card_unvisible');
            $("#card_" + (limit + 2)).addClass('card_visible');
            $("#card_" + (limit + 2)).fadeTo(500, '1');
        }, 500)
    }
}

function leftButton() {

    if (limit > 1) {
        console.log(limit);
        console.log("#card_" + limit);
        console.log("#card_" + (limit + 3));
        $("#card_" + (limit + 2)).fadeTo(500, '0.1');
        setTimeout(function () {

            $("#card_" + (limit + 3)).removeClass('card_visible');
            $("#card_" + (limit + 3)).addClass('card_unvisible');

            $("#card_" + (limit)).removeClass('card_unvisible');
            $("#card_" + (limit)).addClass('card_visible');
            $("#card_" + (limit)).fadeTo(500, '1');
        }, 500)
        limit--;
    }
}


$(document).ready(function () {

    $("#down_btn").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });

    $("#head_logo").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });


    $("#head_a > a").mouseover(function () { $(this).css("background", "rgba(0, 0, 0, 0.7)"); });
    $("#head_a > a").mouseout(function () { $(this).css("background", "rgba(0, 0, 0, 0.3)"); });

    $(".cards").mouseover(function () { $(this).css("background", "rgba(0, 0, 0, 0.7)"); });
    $(".cards").mouseout(function () { $(this).css("background", "rgba(0, 0, 0, 0.3)"); });

    $(".btn_form").mouseover(function () { $(this).css("border-width", "2px"); });
    $(".btn_form").mouseout(function () { $(this).css("border-width", "1px"); });

    $(".btn_a").mouseover(function () { $(this).css("color", "rgb(230, 230, 230)"); });
    $(".btn_a").mouseout(function () { $(this).css("color", "rgba(230, 230, 230, 0.752)"); });

    $(".btn_form").click(function () { $(this).css("border-width", "2px"); });
    $(".btn_form").click(function () { $(this).css("border-width", "1px"); });

    $(".btn_a").click(function () {
        let link = $(this);
    });
    $(".btn_form").click(function () { location.href = "form.html" });

    nav.find('a').on('click', function () {
        let $el = $(this),
            id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 600);
        return false;
    });

    $(window).on('scroll', function () {
        $('nav a').removeClass('active');
        let cur_pos = $(this).scrollTop();
        sections.each(function () {
            let top = $(this).offset().top - nav_height - 180,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('li').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').closest('li').addClass('active');
            }
        });
    });



});