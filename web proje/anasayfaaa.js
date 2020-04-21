
function sehirlerigetir() {
    var hhtpistek = new XMLHttpRequest();
    var adresi = "https://raw.githubusercontent.com/volkansenturk/turkiye-iller-ilceler/master/il-ilce.json";

    hhtpistek.onreadystatechange = function () {
        this.readyState == 4 && this.status == 200 
            var myArri = JSON.parse(this.responseText);
            var ulkeSlce = document.getElementById('ilce');
            myArri.forEach(myArri => {
                ulkeSlce.innerHTML += '<option> ' + myArri.ilce + ' <option>'
            });
        
    };
    hhtpistek.open("GET", adresi, true);
    hhtpistek.send();
}
function start() {
  sehirlerigetir();
  
} KayanYazi=function(nesne,zaman){
    let yaziNesne=nesne;
   
   setInterval(function(){
       let yazi  = yaziNesne.innerHTML;
       let harf  = yazi.substring(0,1);
       let kalan = yazi.substring(1,yazi.length);
       kalan=kalan+harf
       yaziNesne.innerHTML=kalan;
   }, zaman);
}
   
var nesne=document.getElementById("yazi"); 
KayanYazi(nesne,750);  