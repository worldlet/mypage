$(document).ready(function () {
    //  tab标签页
    $('.tabs-content').hide(0);
    $('ul.tabs-bar li:first').addClass('active');
    $('.tabs-content:first').fadeIn(0);

    $('ul.tabs-bar li').on('click', function () {
        if (!$(this).hasClass('active')) {
            $('.main').scrollTop(0);
        }
        $('ul.tabs-bar li').removeClass('active');
        $(this).addClass('active');
        $('.tabs-content').hide(0);
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn(120);
        return false;
    });

    //  弹窗效果
    $(document).on('click', '[data-toggle="pop"]', function () {
        var popId = $(this).attr('data-target');
        if ($(popId).find('.pop-box').hasClass('pop-bottom')) {
            $(popId).fadeIn(200).find('.pop-box').animate({
                maxHeight: '8.26rem'
            }, 200).after('<div class="pop-bg"></div>');
        } else {
            $(popId).fadeIn(200).append('<div class="pop-bg"></div>');
        }
    });
    $(document).on('click', '.pop-bg', function () {
        if ($(this).prev('.pop-box').hasClass('pop-bottom')) {
            //  底部通用弹窗
            $(this).parents('.pop').find('.pop-box').animate({
                maxHeight: '0'
            }, 120);
            $(this).parents('.pop').delay(120).fadeOut(60);
            $(this).remove();
        } else if (!$(this).prev('.pop-box').find('a').hasClass('close')) {
            //  无关闭按钮弹窗
            $(this).parents('.pop').fadeOut(120);
            $(this).remove();
        }
    });
    $(document).on ('click', '.pop a.close', function () {
        //  带关闭按钮弹窗
        $(this).parents('.pop').fadeOut(60);
        $(this).parents('.pop-box').next('.pop-bg').remove();
    });
});