export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging().feature("src/resources");
    aurelia.start().then(a => {
        window.$$ = Dom7;
        window.myApp = new Framework7({
            modalTitle: '老乡村',
            pushState: true,
            popupCloseByOutside: false,
            animateNavBackIcon: true,
            router: false,
            smartSelectInPopup:true,
            smartSelectPopupCloseTemplate:'<div class="right logo_r"><span  class="link close-popup"><em class="iconfont"></em></span></div>',
            smartSelectPopupCloseText:'关闭'
        });
        a.setRoot('./src/app', document.body);
    });
}