/** Document Ready Functions **/
/********************************************************************/

$( document ).ready(function() {

    // Recive video
    
    scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container .background-banner');
    getRandomBackgroundBannerImg('#background-img');
    
    /** Window Resize Functions **/
    /********************************************************************/
    $(window).on('resize', function() {
        //getRandomBackgroundBannerImg('#background-img');
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container .background-banner');
    });

    stickyBar();

    /** Listener for click on arrow **/
    /********************************************************************/
    
    $("#arrow").on('click', function() {
        $('html,body').animate({
        scrollTop: $("#how-it-works").offset().top},
        'slow');
    });

});



/** Reusable Functions **/
/********************************************************************/

/** Video Functions **/
/********************************************************************/
function scaleVideoContainer() {
    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('#homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){
    
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;

            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio; 

            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

        $('#homepage-hero-module .video-container video').addClass('fadeIn animated');   
    });
}

/** Image Functions **/
/********************************************************************/

function getRandomBackgroundBannerImg(element) {
    var arrayImg = new Array();
        arrayImg[0] = "color-pencils.png";
        arrayImg[1] = "beach-painting.png";
        arrayImg[2] = "spray-painting.png";
        arrayImg[3] = "ring.png";
        arrayImg[4] = "fire-glass.png";
        arrayImg[5] = "pencil-brush.png";
        arrayImg[6] = "writing.png";
        arrayImg[7] = "face-painting.png";
    var path = 'images/background-banners/'; // default path here
    var num = Math.floor( Math.random() * arrayImg.length );
    var img = arrayImg[ num ];
    $(element).attr('src', path + img);
    //var imgStr = '<img src="' + path + img + '" alt = "">';
}


 /** Sticky Functions **/
/********************************************************************/
function stickyBar() {
    signupForm = $('#mc_embed_signup'),
    signupFormTop = signupForm.offset().top,
    logoSignupForm = $('#logo-signup-form');

    $(window).on('resize scroll', function() {
        if ( $(window).width() > 640) {
             // $(window).scroll( function() {
                signupForm.toggleClass('sticky', $(window).scrollTop() > signupFormTop),
                logoSignupForm.toggleClass('hidden', $(window).scrollTop() <= signupFormTop)

            // });
        }
        else{
            // $(window).scroll( function() {
                signupForm.removeClass('sticky');
                if(!logoSignupForm.hasClass('hidden')){
                  logoSignupForm.addClass('hidden');
                }
            // });
        }
    });
}    