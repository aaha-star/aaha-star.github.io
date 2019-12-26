 function openNav(){
        document.getElementById("mySidenav").style.width = "250px";
        }
        function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        }
        function savediary(){
         var y=document.all.year.value;
        var  m=document.all.month.value;
        var d=document.all.day.value;
        var diary="diaryname"+y+"."+m+"."+d;
        document .getElementById("aaha").innerHTML =localStorage.getItem(diary);
        }
          function lookdiary(num){
                document .getElementById("aaha").innerHTML =localStorage.getItem(localStorage.key(num));
                }
          function hrefweb(num){
            if(localStorage.getItem(localStorage.key(num)).substring(0,4)!="http"){
                 window.location.href="http://"+localStorage.getItem(localStorage.key(num));
                          }
                 else{
                 window.location.href=localStorage.getItem(localStorage.key(num));
                      }
          }
          function deletediary(num){
            if(!confirm("你确认删除吗"))｛
            return false;       
        ｝
                localStorage.removeItem(localStorage.key(num));
                location.reload();
                  }
          function deleteweb(num){   
            if(!confirm("你确认删除吗"))｛
            return false;       
        ｝
        localStorage.removeItem(localStorage.key(num));
        location.reload();
        }
