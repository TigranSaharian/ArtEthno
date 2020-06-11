const hide = 'burger-section-hide';
const show = 'burger-section-show';
var buger_categ_title = $('.burger-categoria-name');
var current_page_title = $('#current-page-name');
var section = [];

// bottom menu search side,,,when click the search icon open the search box
$(function(){
    let mobile_menu_item = $(".mobile-icon").find("a[rel='bottom-menu-item']");
    $('#mobile-search-item').click(function () {
        $('#mobile-search-input').addClass('mobile-search-active');
        $('#close-mobile-search').css('right', '0');
        mobile_menu_item.css('visibility', 'hidden');
    });

    $('#close-mobile-search').click(function () {
        $('#mobile-search-input').removeClass('mobile-search-active');
        $('#close-mobile-search').css('right', '-50%');
        mobile_menu_item.css('visibility', 'visible');
    });
});

// larg screen menu bar 
$(function(){
    $(".sub-categoria").click(function () {
        let firstFilter = $(".drop-menu-second-filter");
        let section = firstFilter.closest('.row').find('section');
        section.css('border-left', '0.5px solid #F5CD79');
        section.css('display', 'block');
    });

    $(document).on('click', '.material-name', function () {
        console.log(333)
        $(this).toggleClass("active_onclick_dark");
    });
    
    $(".categoria_name").click(function () {
        $(".drop-menu-contaner").slideToggle();
    });
});

// dropdown
$(".dropbtn").click(function () {
    let dropdown_content = $(this).closest(".dropdown").find(".dropdown-content");
    let dropdown = $(this).find('span');
    let arrow = dropdown_content.closest(".dropdown").find("i").css('transform', 'rotate(-180deg)');
    dropdown_content.slideToggle(200);
    dropdown_content.on('click', 'span', function () {
        arrow.css('transform', 'rotate(0deg)');
        dropdown.text($(this).text());
        dropdown_content.slideUp(200);
    })
});

// click sign-in
$('.sign-in').click(function(){
    $('.sign-in-wrapper').addClass('popup-background');
});

// click sign-up 
$('.sign-up').click(function(){
    $('.sign-up-wrapper').addClass('popup-background');
});

// click anywhere for removing the sign-in window
$(".sign-in-wrapper").click(function(e) {
    e.preventDefault();
    if ($(e.target).attr('rel') === 'sign-in-popup') {
        $('.sign-in-wrapper').removeClass('popup-background');
    }
});

// click anywhere for removing the sign-up window
$(".sign-up-wrapper").click(function(e) {
    e.preventDefault();
    if ($(e.target).attr('rel') === 'sign-up-popup') {
        $('.sign-up-wrapper').removeClass('popup-background');
    }
});

// click like heart
$('.fa-heart').click(function(){
    $(this).closest('span').find('.far').toggleClass('fas');
    $('.alert-wrapper').addClass('alert-active');
    setTimeout(() => {
        $('.alert-wrapper').removeClass('alert-active');
    }, 2000);

});

$('#user').click(function(){
    var user_profile_window = $(this).closest('.user-popup-window').find('.user-popup-container');
    user_profile_window.toggleClass('block');
});

$('#user-burger').click(function(){
    var user_profile_window = $(this).closest('.mobile-icon').find('.user-popup-container');
    user_profile_window.toggleClass('block');
    $(this).toggleClass('bottom-menu-active');
});

$('#notification').click(function(){
    var notification = $(this).closest('.notification-container').find('.notification-wrapper');
    notification.toggleClass('block');
})

$('#notification-burger').click(function(){
    var notification = $(this).closest('.mobile-icon').find('.notification-wrapper');
    notification.toggleClass('block');
    $(this).toggleClass('bottom-menu-active');
});

$("#map-button").click(function(){
    var map = $(this).closest('.map-container').find('iframe');
    map.toggleClass('active-map');
});

$('.opacity').click(function(e){
    e.preventDefault();
    if ($(e.target).attr('rel') === 'message-popup') {
        $('.opacity').removeClass('popup-background');
    }
});

$('.inbox-message').click(function(){
    window.location.replace("./message-pm.html");
});

$('#new-message').click(function(){
    $('.opacity').addClass('popup-background');
});

$('.new-message-input .fa-paper-plane').click(function(){
    let new_message = $(this).closest('.new-message-input').find('.new-message'); 
    let message_container = $(this).closest('.message-content').find('.inbox-wrapper');
    let inbox_message = $('<div></div>').addClass('inbox-message');
    inbox_message.addClass('sender');
    let message_wrapper = $('<div></div>').addClass('message-wrapper');
    inbox_message.append(message_wrapper);
    let h6 = $('<h6>Jony Brjoni</h6>');
    let p = $('<p></p>');
    let span = $('<span></span>').addClass('date');
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    span.append(time)
    p.text(new_message.val());
    message_wrapper.append(h6);
    message_wrapper.append(p);
    message_wrapper.append(span);
    if (0 < message_container.length) {
        message_container.append(inbox_message).scrollTop(1e5);
        new_message.val('');
    }
});

$(function(){
    $('#feedback-btn').click(function(){
        $('#feedback-window').addClass('popup-background');
        $('.deliverved-item-feedback-wrapper').addClass('block');
    });

    $('#cancel-feedback').click(function(){
        var feedback_window = $(this).closest('.feedback-popup');
        feedback_window.removeClass('popup-background');
        var block = feedback_window.find('.deliverved-item-feedback-wrapper');
        block.removeClass('block');  
    });

    $(document).on('click','.fa-star',function(){
        let star = $(this).closest('.stars').find('i');
        let indexCount = star.index(this);
        if($(this).hasClass('fas')){
            for (let index = star.length; index >= $(this).index(); index--) {
                star.eq(index).removeClass('fas');
                star.eq(index).addClass('far');
            }
        }
        for (let index = 0; index < indexCount + 1; index++) {
            star.eq(index).removeClass('far');
            star.eq(index).addClass('fas');
        }
    });
})

// moblie size burgem menu
$(function(){
    $('#burger').click(function () {
        $("#burger-menu").find(".mobile-drop-menu-contaner").addClass("menu-active"); // TODO toggleClass changed to addClass
    });
    
    $("#close-burger").click(function () {
        $(this).closest("#burger-menu").find(".mobile-drop-menu-contaner").removeClass("menu-active");
    });
    
    $(".burger-sub-categoria").click(function () {
        section = $('#burger-menu').find('section');
        $('.back').attr('hidden', false);
        let checked_categoria_name = $(this).find('a').text();
        buger_categ_title.text(checked_categoria_name);

        section.eq(0).addClass(hide);
        section.eq(1).addClass(show);

        SetPageIndex();
        SetBackBtnIndex(section.eq(0));
        current_page_title.text(' | Delivery options');
    });

    $('.back').on('click', function (e) {
        e.preventDefault();
        if(parseInt( $(this).attr('rel')) === 1){
            $(this).attr('hidden', true);
        }
        let privuse_page_index = $(this).attr('rel');
        current_page_title.text('');
        GetPrivusePage(privuse_page_index);
    });

    $('#next').click(function (e) {
        e.preventDefault();
        SetBackBtnIndex(section.eq(1));
        section.eq(1).removeClass(show);
        section.eq(2).addClass(show);
        current_page_title.text(' | Item options');
    });
});

function SetPageIndex() {
    for (let index = 0; index < section.length; index++) {
        $(section).eq(index).attr('rel', (index + 1))
    }
}

function SetBackBtnIndex(current_section){
    $('.back').attr('rel', current_section.attr('rel'));
}

function GetPrivusePage(page_index){
    for (let index = 0; index < section.length; index++) {
        let page_name = section[index];
        var privuse_page_index = $(page_name).attr('rel');
        if(privuse_page_index === page_index){
            if(parseInt(privuse_page_index) === 1){
                buger_categ_title.text('Browse Categories');
                section.eq(index).removeClass(hide);
                section.eq(index + 1).removeClass(show);
            }else{
                current_page_title.text(' | Delivery options');
                SetBackBtnIndex(section.eq(index - 1));
                section.eq(index).addClass(show);
                section.eq(index + 1).removeClass(show);
            }
        }
    }
}
