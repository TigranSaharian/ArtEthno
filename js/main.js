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
});

$(function(){
    var closeBtn = $('#close-search');
    var searcheInput = $('.search_box');
    var icons = $('.icon');
    if ($(window).width() <= 768) {  
        $('#search-item').click(function(){
            searcheInput.removeClass('search_box');
            searcheInput.addClass('mobile-search');
            closeBtn.css('display', 'block');
            icons.css('display','none');
        })
        $('#close-search').on('click',function(){
            closeBtn.css('display', 'none');
            searcheInput.removeClass('mobile-search');
            searcheInput.addClass('search_box');
            icons.css('display','block');
        });
    }
});