
function getTIme () {
     setInterval(function() {
        const date = new Date();
        var s = date.getSeconds();
        var m = date.getMinutes();
        var h = date.getHours();
         //formatting
         var AMPM = setAMPM(h)
         h = setFormatting(h);
         s = setPadding(s);
         m = setPadding(m);
         h = setPadding(h);
         var hex = '#'.concat(h,m,s);
        document.getElementById('clock').innerHTML =h + ":" + m + ":" + s +" "+AMPM;
        document.body.style.backgroundColor = hex;
        document.getElementById('colorHex').innerHTML =hex;
     }, 800)
    function setAMPM(i){
        if(i>=12){ 
            return "PM"}
        else {return "AM"}
    }
    function setFormatting(i){
        if (i > 12){i = i -12};
        return i;
    }
    function setPadding(i){
        if (i < 10){i = "0" +i};
        return i;
    }
 }
getTIme()
