var isLoading = false;

$(document).ready(function () {
        $(".fancybox").fancybox();
    });
jQuery ( "a.fancybox" ). fancybox ({
    "onComplete" : function ()  {
        clearTimeout ( jQuery . fancybox . slider );
        jQuery . fancybox . slider = setTimeout ( "jQuery.fancybox.next()" , 5000 );
    }
});


	
function getUrlVars() {
    return window.location.href.slice(window.location.href.indexOf('?')).split(/[&?]{1}[\w\d]+=/);
}
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function Loading() {
    
    if (!isLoading) {
        $.LoadingOverlay("show");
        isLoading = true;
    } else {
        $.LoadingOverlay("hide");
        isLoading = false;
    }
}