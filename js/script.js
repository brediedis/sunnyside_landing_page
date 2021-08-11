$(document).ready(function () {
    $('.icon').on('click', function() {
        $('.mobile-navigation').toggleClass('visible'); 
        if($('.primary-title:visible').length)
        $('.primary-title').hide();
        else
        $('.primary-title').show();
    });
  });


  function goToBottom () {
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }