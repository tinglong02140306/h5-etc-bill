var vConsole;
// 方法处理
var handleEvent = {
        goPathEvt: function(e) {
            var index = $(this).data().index,
                path = '';
            console.log(index);
            if (index == 1) {
                path = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2015091600286745&auth_skip=false&scope=auth_user&redirect_uri=http%3a%2f%2fmob.etcsd.com%3a8099%2fuserInfo-lt.jsp%3ftype%3d1%26plat_id%3d05';
            } else if (index == 2) {
                path = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2015091600286745&auth_skip=false&scope=auth_user&redirect_uri=http%3a%2f%2fmob.etcsd.com%3a8099%2fuserInfo.jsp%3ftype%3d1%26plat_id%3d07';
            } else if (index == 3) {
                path = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2015091600286745&auth_skip=false&scope=auth_user&redirect_uri=http%3a%2f%2fmob.etcsd.com%3a8099%2fuserInfo-lt.jsp%3ftype%3d1%26plat_id%3d31';
            }
            window.location.href = path;
        }
    },
    addEvent = function() {
        var $this = $('.wrap');
        // 页面跳转
        $this.off('.menu-item').on('click', '.menu-item', handleEvent.goPathEvt);
    };
$(function() {
    addEvent();
    window.localStorage.setItem('PAGESTATE', 'nomal');
    // vConsole = new VConsole();
});