$(document).ready(function() {
    function animateCounters() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({ countNum: countTo }, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // 检查元素是否在视口中
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // 监听滚动事件
    $(window).on('scroll', function() {
        $('.counter').each(function() {
            if (isInViewport($(this)[0])) {
                animateCounters();
                $(window).off('scroll'); // 只触发一次
            }
        });
    });

    // 页面加载时检查
    $(window).trigger('scroll');
});
