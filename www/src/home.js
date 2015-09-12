export class home {
    attached(){
       myApp.swiper('.swiper-1', {
            pagination:'.swiper-pagination-c1',
            spaceBetween: 0
        });
        /*myApp.swiper('.swiper-2', {
            pagination:'.swiper-pagination-c3',
            spaceBetween: 0
        });*/
    }
    reload(){
        myApp.alert('重新加载');
        return false;
    }
}