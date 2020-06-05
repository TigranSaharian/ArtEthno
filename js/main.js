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
        $('#close-mobile-search').css('right', '30px');
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
        $(this).toggleClass("active_onclick_dark");
    });
    
    $(".categoria_name").click(function () {
        $(".drop-menu-contaner").slideToggle();
    });
});

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
