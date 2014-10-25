
  function syncAjax(u){
        console.log(u);
        var obj=$.ajax(
          {url:u,
           async:false
           }
        );
        console.log(obj.responseText);
        return $.parseJSON(obj.responseText);
        
      }

  function refresh(){
    document.location.reload(true);
  }

  $(document).ready(function(){

    //save details
  $("#saved").click(function(){
      var fn = $('#fname').val();
      var cn = $('#cnumber').val();
      var em = $('#email').val();
    return syncAjax("http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/miniproject/index_json_response.php?cmd=2&fn="+fn+"&cn="+cn+"&em="+em);
    document.getElementById("saved").disabled = true;
  });

 //get particitpant details
  $("#getdet1").click(function(){
 r=syncAjax("http://50.63.128.135/~csashesi/class2015/kwabena-ohene-bonsu/miniproject/index_json_response.php?cmd=1");
 for (var i = 0; i < r.myminipro.length; i++)
 {
   var part = " " + r.myminipro[i].personname + " --||-- " + r.myminipro[i].contactno + " --||-- " + r.myminipro[i].email;
   $('<li>'+ part + '</li><br>').appendTo($('#detail'));
 }
 this.disabled = true;
 });

});
