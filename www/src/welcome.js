export default {
    'slides': [
        {
            id: 'slide0',
            picture: '<div class="tutorialicon">♥</div>',
            text: 'Welcome to this tutorial. In the next steps we will guide you through a manual that will teach you how to use this app.'
        },
        {
            id: 'slide1',
            picture: '<div class="tutorialicon">✲</div>',
            text: 'This is slide 2'
        },
        {
            id: 'slide2',
            picture: '<div class="tutorialicon">♫</div>',
            text: 'This is slide 3'
        },
        {
            id: 'slide3',
            picture: '<div class="tutorialicon">☆</div>',
            text: 'Thanks for reading! Enjoy this app.<br><br><a id="tutorial-close-btn" href="#">End Tutorial</a>'
        }
    ],
    'options':{
        bgcolor: '#0da6ec',
        fontcolor: '#fff',
        closeButtonText:'跳过',
        loop:true,
        onClosed:function(){
            window.localStorage.setItem('firstStart','true');
        }
    }
}