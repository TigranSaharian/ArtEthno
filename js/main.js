$(function(){
    $(".sub-categoria").click(function(){
        let firstFilter = $(".drop-menu-second-filter");
        let section = firstFilter.closest('.row').find('section');
        section.css('border-left', '0.5px solid #F5CD79');
        section.css('display', 'block');
    });
    
    $(document).on('click', '.material-name', function(){
        $(this).toggleClass("active_onclick_dark");
    });
    
    $(".categoria_name").click(function(){
        $(".drop-menu-contaner").slideToggle();
    });
    $(".dropbtn").click(function(){
        let dropdown_content = $(this).closest(".dropdown").find(".dropdown-content");
        let dropdown = $(this).find('span');
        let arrow = dropdown_content.closest(".dropdown").find("i").css('transform', 'rotate(-180deg)');
        dropdown_content.slideToggle(200);
        dropdown_content.on('click', 'span', function(){
            arrow.css('transform', 'rotate(0deg)');
            dropdown.text($(this).text());
            dropdown_content.slideUp(200);
        })
    });

    var menu_item = $(".mobile-icon").find("a[rel='bottom-menu-item']");
    $('#mobile-search-item').click(function(){
        $('#mobile-search-input').addClass('mobile-search-active');
        $('#close-mobile-search').css('right','30px');
        menu_item.css('visibility', 'hidden');
    });
    $('#close-mobile-search').click(function(){
        $('#mobile-search-input').removeClass('mobile-search-active');
        $('#close-mobile-search').css('right','-50%');
        menu_item.css('visibility', 'visible');
    });
});
