
window.addEventListener('DOMContentLoaded', (event) => {


    const nam=document.getElementById("name");
    const surname=document.getElementById("name2");
    const num=document.getElementById("num");
    const rate=document.getElementById("num2");
    const mail=document.getElementById("email");
       
    
 //VALIDATION FUNCTIONS
 
 
    function isPositiveInteger(str) { 
        if (typeof str !== 'string') {
          return false;
        }
        const num = Number(str);
        if (Number.isInteger(num) && num >= 0) {
          return true;
        }
        return false;
      }
    
    
    
    
    function notletters(word){
    var value=false;
    let letters=word.split('');
    for(let i=0; i<word.length;i++){
        //console.log(letters[i]);
        if(letters[i].toLowerCase()==letters[i].toUpperCase()){
            value=true;
            break;}
    }
    return value;
    }
    
    //console.log(letters("A-aaa"));
    //console.log(letters("Bb2b"));
    //console.log(letters("cccc"));



    function emailvalid(mail){
        const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;// shows which simbol combinations/their coutn may be included in email
    
        if (regex_pattern.test(mail)) { //tests string for match
            return true;
        }
        else {
            return false;
        }
    }
    //console.log(emailvalid("alsks@mail.ru"));
    //console.log(emailvalid("alsksmail.ru"));
    //console.log(emailvalid("alsks@mail.r"));

   
    function phone(number){
        return number.length==8;
    }

   // console.log(phone("22222222"));





   //VALIDATION

    function validate(event){
		let msg =""; 
		if (nam.value=="") {
			msg+="A name field should not be empty <br>";
			nam.className="invalid";
		} 
        
        else if(notletters(nam.value)) {
			msg+="A name field should be filled with letters only<br>";
			nam.className="invalid";
		}

        else{
            nam.className="";
        }




        if (surname.value=="") {
			msg+="A surname field should not be empty <br>";
			surname.className="invalid";
		} 
        
        else if(notletters(surname.value)) {
			msg+="A surname field should be filled with letters only <br>";
			surname.className="invalid";
		}

        else{
            surname.className="";
        }


        
        if (num.value=="") {
			msg+="A phone number field should not be empty <br>";
			num.className="invalid";
		} 
        
        else if((!isPositiveInteger(num.value))) {
			msg+="A phone number field should be filled with positive integers only <br>";
			num.className="invalid";
		}

        else if(!phone(num.value)){
            msg+="A phone number field should be exactly 8 digits long<br>";
			num.className="invalid";
        }

        else{
            num.className="";
        }




        if (rate.value=="") {
			msg+="A rate field should not be empty<br>";
			rate.className="invalid";
		} 
        
        else if((!isPositiveInteger(rate.value))) {
			msg+="A rate field should be filled with positive integers only<br>";
			rate.className="invalid";
		}

        else if(rate.value>10){
            msg+="A rate field should not be larger than 10<br>";
			rate.className="invalid";
        }

        else{
            rate.className="";
        }


        if (mail.value=="") {
			msg+="An email field should not be empty<br>";
			mail.className="invalid";
		} 
        
        else if(!emailvalid(mail.value)) {
			msg+="An email field should contain real email(example: catastrophe@gmail.com)<br>";
			mail.className="invalid";
		}

        else{
            mail.className="";
        }


      

	    document.getElementById("error").innerHTML=msg; 

	    if (msg.length>0) {
            document.getElementById("error").style.display="block";
			event.preventDefault(); //cancels event,in our case submition to action url
		}
	}

		document.getElementsByTagName("form")[1].addEventListener("submit", validate);  //since getelementby tag returns multiple values(array) we need to be specific 




//WARNINGS

        nam.addEventListener("change", val1);  
        function val1(){
          const label = document.getElementById("warn1");  
          if( nam.value!=="") {  
            label.style.display="none";
          
          }

          else{
            label.style.display="block";
       
          }
        } 
        
        
        surname.addEventListener("change", val2);  
        function val2(){
          const label2 = document.getElementById("warn2");  
          if( nam.value!=="") {  
            label2.style.display="none";
          }
          else{
            label2.style.display="block";
    
          }
        } 	


           
        num.addEventListener("change", val3);  
        function val3(){
          const label3 = document.getElementById("warn3");  
          if( num.value!=="") {  
            label3.style.display="none";
          }
          else{
            label3.style.display="block";
    
          }
        } 	

        rate.addEventListener("change", val4);  
        function val4(){
          const label4 = document.getElementById("warn4");  
          if( rate.value!=="") {  
            label4.style.display="none";
          }
          else{
            label4.style.display="block";
    
          }
        } 	


        mail.addEventListener("change", val5);  
        function val5(){
          const label5 = document.getElementById("warn5");  
          if( mail.value!=="") {  
            label5.style.display="none";
          }
          else{
            label5.style.display="block";
    
          }
        } 	







  //VISIBILITY

        learnvid=document.getElementById("learn");

        learnvid.onclick = () => {
        document.getElementsByTagName("iframe")[0].style.display="block";
       

        }

        learnvid.ondblclick = () => {
        document.getElementsByTagName("iframe")[0].style.display="none"; }

      var checkbox = document.getElementById("meow1");
      var checkbox2= document.getElementById("meow2");
      var checkbox3= document.getElementById("meow3");

        document.getElementById("relax").style.visibility = "hidden";
        document.getElementById("fish").style.visibility = "hidden";
        document.getElementById("fast").style.visibility = "hidden";



        checkbox.onchange=()=>{
        
        if(checkbox.checked){
            document.getElementById("fast").style.visibility = "visible";
        }

        else{
            document.getElementById("fast").style.visibility = "hidden";
        }
    
       }

       
       checkbox2.onchange=()=>{
        
        if(checkbox2.checked){
            document.getElementById("relax").style.visibility = "visible";
        }

        else{
            document.getElementById("relax").style.visibility = "hidden";
        }
    
       }
          

          
       checkbox3.onchange=()=>{
        
        if(checkbox3.checked){
            document.getElementById("fish").style.visibility = "visible";
        }

        else{
            document.getElementById("fish").style.visibility = "hidden";
        }
    
       }


  








//DOM CREATION

var click=document.getElementById("clickme");

        click.onclick = () => {
        var current=document.getElementById("question");
        var head = document.createElement('h1');
        var paraone= document.createElement('h2');
        var img = document.createElement('img');
        img.src="Icons/que.png";
        paraone.appendChild(document.createTextNode("What about you?"))
        const nodeone = document.createTextNode("We create future");
        head.appendChild(nodeone);
        current.appendChild(paraone);
        current.insertBefore(head, paraone);
        current.appendChild(img);

  
      }
      
      

      var click2=document.getElementById("clickme2");

      click2.onclick=()=>{

        var current2=document.getElementById("question");
        var new1 = document.createElement("h3");
        var rep=current2.lastElementChild;
        new1.appendChild(document.createTextNode("Nah, you cannot :-) "));
        current2.replaceChild(new1, rep);


      }


      var click3=document.getElementById("mylist");

      click3.onmouseenter=()=>{
        var current3=document.getElementById("cool");
        var first=current3.firstElementChild;
        current3.removeChild(first);
        var you = document.createElement('li');
        you.appendChild(document.createTextNode("You"));
        current3.appendChild(you);


      }










// JQUERY STUFF

//FADE

       $(".infobanner").mouseenter (function () {
        $(this).fadeOut(1000)});


        $(".wall").mouseleave (function () {
          $(".infobanner").fadeIn(500)});



        
//EXPEREMENT!!! WITH DYNAMIC TABLE(INCLUDES APPEND, STRING ECT)
 
 var mas=['<img id="theImg" src="Icons/cool.jpg" />','<p>Congrats!You are cool cat!</p>','<img id="theImg" src="Icons/smart.jpg" />','<p>Wow! You are smart cat!</p>','<img id="theImg" src="Icons/beautiful.jpg" />','<p>Congrats!You are beautiful cat!</p>'];
    
            $(".result1").click(function(){
              var res1=$( "#meow1" ).prop("checked"); // returns property (true/false), in theory may also assign
              var res2=$( "#meow2" ).prop("checked");
              var res3=$( "#meow3" ).prop("checked");
              $(".divtab").remove(); //rempves the element+all text, nodes ect.
              $( ".test" ).append( "<div class='divtab'></div>" );
              var table = $('<table></table>').addClass('foo');

                  var row = $('<tr></tr>');
                  var row1 = $('<td></td>').addClass('bar').text('Result ');
                  var row2 = $('<td></td>').addClass('bar').text('Description ');
                      table.append(row);
                      row.append(row1);
                      row.append(row2);
                      table.hide();

                      if((res1 && res2) && res3){
                          var rowx = $('<tr></tr>');
                          var rowa = $('<td></td>').addClass('bar');
                          var rowb = $('<td></td>').addClass('bar');
                          rowa.append(mas[0]);
                          rowb.append(mas[1]);
                          table.append(rowx);
                          rowx.append(rowa);
                          rowx.append(rowb);
                          table.show();
                        }
                      

                      else if((res1 && res3 && !res2)){
                          var rowx = $('<tr></tr>');
                          var rowa = $('<td></td>').addClass('bar');
                          var rowb = $('<td></td>').addClass('bar');
                          rowa.append(mas[2]);
                          rowb.append(mas[3]);
                          table.append(rowx);
                          rowx.append(rowa);
                          rowx.append(rowb);
                          table.show();
                        }


                        else if((res3 && !res1 && res2)||res1 && res2 && !res3 ){
                          var rowx = $('<tr></tr>');
                          var rowa = $('<td></td>').addClass('bar');
                          var rowb = $('<td></td>').addClass('bar');
                          rowa.append(mas[4]);
                          rowb.append(mas[5]);
                          table.append(rowx);
                          rowx.append(rowa);
                          rowx.append(rowb);
                          table.show();
                        }


               table.css('border', '3px solid black');
               $('.divtab').css({marginLeft:"32%", display:"block", marginTop:'10%'});

                     
                      
  
              $('.divtab').append(table);

 });


//TRANSITION/ANIMATION/HIDE/ECT

$("#learn").on("click", function () {
var settings={ "width" : "570px", "height": "500px", "border-radius":"50px"} 
$("iframe").animate(settings, 3000);
});

$(".banner").on('click', function () {
  alert("You are welcomed!");
  } );


$(".video").mouseenter(function(){
  $(".cat007").animate({
    height: 'toggle'
  });
});


$("ol li:odd").hover(function(){
  $(this).css("background-color","violet");
});

$("#clickme3").on('click', function () {
 $("#cool").hide();
  } );

  $("#clickme3").on('dblclick', function () {
    $("#cool").show();
     } );
   
   





//ADDITIONAL

const jsConfetti = new JSConfetti();

function confetti(){
  jsConfetti.addConfetti(
    {
      emojis: ['🐾','🌸','🐈','✨'],
      emojiSize: 40,
      confettiNumber: 70,
    }
  );
}

document.getElementById("logo-list-el").addEventListener("click",confetti);



    
});
       

          
