 function myFunction() {
      const message = document.getElementById("p01");
      message.innerHTML = "";
      let x = document.getElementById("demo").value;
      try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
      }
      catch(err) {
        message.innerHTML = "Input is " + err;
      }
    }


    function seeResult(){
        const khobor = document.getElementById('msg');
        khobor.innerHTML = "";

        let praptoNumber = document.getElementById('result').value;
        try{
            if(praptoNumber == "") throw " kono number boshano hoy nai";
            if(isNaN(praptoNumber)) throw "eita kono shothik number na";
            if( praptoNumber >+ 0 &&  praptoNumber<=32) throw "tumi fail koreso";
            if( praptoNumber >+ 33 &&  praptoNumber<=39) throw "tumi D paiso";
            if( praptoNumber >+ 40 &&  praptoNumber<=49) throw " tumi c paiso";
            if( praptoNumber >+ 50 &&  praptoNumber<=59) throw " tumi B paiso";

        }
    
        catch(err) {
            khobor.innerHTML = err;
          }


    }