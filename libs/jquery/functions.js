
function ValidateForm()
{
  $('span.error_msg').html('');
 var success = true;
  $("#contactForm input").each(function()
      {
          if($(this).val()=="")
          {
              $(this).next().html("Fusha duhet te plotesohet");
              success = false;
          }
  });
  return success;
}
