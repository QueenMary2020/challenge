
var presentdelindicatif="<p>Je XXXX<b>e</b></p><p>Tu XXXX<b>es</b></p><p>Il, elle XXXX<b>e</b></p><p>Nous XXXX<b>ons</b></p><p>Vous XXXX<b>ez</b></p>Ils, elles XXXX<b>ent</b></p>";
var futurdelindicatif="<p>Je XXXX<b>rai</b></p><p>Tu XXXX<b>ras</b></p><p>Il, elle XXXX<b>ra</b></p><p>Nous XXXX<b>rons</b></p><p>Vous XXXX<b>rez</b></p>Ils, elles XXXX<b>ront</b></p>";
var passeedelindicatif="<p>Je XXXX<b>ai</b></p><p>Tu XXXX<b>as</b></p><p>Il, elle XXXX<b>a</b></p><p>Nous XXXX<b>âmes</b></p><p>Vous XXXX<b>âtes</b></p>Ils, elles XXXX<b>èrent</b></p>";
var imparfaitdelindicatif="<p>Je XXXX<b>ais</b></p><p>Tu XXXX<b>ais</b></p><p>Il, elle XXXX<b>ait</b></p><p>Nous XXXX<b>ions</b></p><p>Vous XXXX<b>iez</b></p>Ils, elles XXXX<b>aient</b></p>";
var verbe = document.getElementById('verb').value;
var temps = document.getElementById('liste').value;

  function conjugue(){
if (verbe.substr(-2) =="er" && temps == 1) {
        document.getElementById('rsp').innerHTML=presentdelindicatif.replace(/XXXX/g,verbe.substr(0,verbe.length-2));
    }
    else if(verbe.substr(-2) == er && temps == 2){
      document.getElementById('rsp').innerHTML=imparfaitdelindicatif.replace(/XXXX/g,verbe.substr(0,verbe.length-2));
    }
    else if(verbe.substr(-2) == er && temps == 3){
      document.getElementById('rsp').innerHTML=passeedelindicatif.replace(/XXXX/g,verbe.substr(0,verbe.length-2));
    }
    else if(verbe.substr(-2) == er && temps == 4){
      document.getElementById('rsp').innerHTML= futurdelindicatif.replace(/XXXX/g,verbe.substr(0,verbe.length-2));
    }
    else alert("ce verbe n'appartient pas au 1er groupe !");
}
