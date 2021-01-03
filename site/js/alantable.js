
$(document).ready(function () {

    (function ($) {

        /* $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        }); */
        
        function refresh(){
          $2017 =  document.getElementById('2017').checked;
          $2016 =  document.getElementById('2016').checked;
          $2015 =  document.getElementById('2015').checked;
          $2014 =  document.getElementById('2014').checked;
          $business =  document.getElementById('business').checked;
          $engineering =  document.getElementById('engineering').checked;
          $fulltime =  document.getElementById('fulltime').checked;
          $internship =  document.getElementById('internship').checked;
          var temp = $('.searchable tr');

            if ($2017==$2016 && $2016==$2015 && $2015==$2014){
              }else{
                temp = temp.filter(function (){
                  var years = [$2017, $2016, $2016, $2014];
                  for (var i = 0, len=4, i<len, i++){
                    if years[i]{
                      var compare = 2017-i;
                      return $(this).find('td').eq(4).text() == compare.toString();
                    }
                  }
                }
              }
            if ($engineering==$business){
            } else {
              if ($engineering){
                temp = temp.filter(function() {
                  return $(this).find('td').eq(5).text() == "Engineering";
                })
              } else {
                temp = temp.filter(function() {
                  return $(this).find('td').eq(5).text() == "Business";
                })
              }
            }
            if ($fulltime==$internship){
            } else {
              if ($fulltime){
                temp = temp.filter(function() {
                  return $(this).find('td').eq(6).text() == "Full-Time";
                })
              } else {
                temp = temp.filter(function() {
                  return $(this).find('td').eq(6).text() == "internship";
                })
              }
            }
            temp.show();
            }

            $('#2016').on('change', refresh());
            $('#2016').change(refresh());
            $('#2015').change(refresh());
            $('#2014').change(refresh());
            $('#business').change(refresh());
            $('#engineering').change(refresh());
            $('#fulltime').change(refresh());
            $('#internship').change(refresh());
            
            /*
        $('#2016').on('change', function(){
            
            if(document.getElementById('2016').checked){
                $('.searchable tr').hide();
                $('.searchable tr').filter(function() {
                    return $(this).find('td').eq(4).text() == "2016"
                }).show();
            }else{
                $('.searchable tr').show();
            }
        });

         $('#2015').on('change', function(){
            
            if(this.checked){
                $('.searchable tr').hide();
                $('.searchable tr').filter(function() {
                    return $(this).find('td').eq(4).text() == "2015"
                }).show();
            }else{
                $('.searchable tr').show();
            }
        }); */

    }(jQuery));

};