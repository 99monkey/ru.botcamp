// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require_tree ./libs
//
$(document).ready(function(){
  //$('textarea').autoResize({minHeight: 35, animate: 200 });
  //
  $('section.contacts').each(function(){
    $(this).find('button').click(function(e){
      e.preventDefault();
      var message = $('form textarea').last().val();
      if(message != ""){
        $.post('/send_message.json', { 'message': message})
      .complete(function(data) {
        $('form').css('visibility', 'hidden');
        $('.message-sent').show();
      });
      }
    });
  });
});
