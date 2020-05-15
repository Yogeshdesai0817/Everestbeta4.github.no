  if(screen.width >=1500){
	 console.log('Hight1');
     document.write("<style>body{zoom:100%;}</style>")
   }
   if(screen.width >=2000){
	   console.log('Hight2');
     document.write("<style>body{zoom:135%;}</style>")
   }
   if(screen.width >=5500){
	   console.log('Hight3');
     document.write("<style>body{zoom:150%;}</style>")
   }
   var zero=0;
   var isactive=0;
   var closecontact=0;
   $(document).ready(function(){
      $(window).on('scroll',function(){
	    if(isactive === 1) {
		  $('.slidebar-newsletter').toggleClass('active');
		  isactive = 0;
		}
		if(closecontact === 1){
		   $('.slidebar-contact').toggleClass('active');
		   //$('.toggle').toggleClass('active');
		   closecontact = 0;
		}
	    $('.slide-container').toggleClass('hide',$(window).scrollTop() > zero);
		if(zero > 0){
          $('.menu-bar').css( "background-color", "#87CEFA" );
		}
		zero= $(window).scrollTop();
		if(zero == 0){
		 $('.menu-bar').css("background-color","");
		}
      })
	  
	  /*$('.toggle').hover(function(){
	     $('.slidebar-contact').toggleClass('active');
		 $('.toggle').toggleClass('active');
		 closecontact = 1;
	  })
	  $('.toggle').mouseout(function(){
         $('.slidebar-contact').toggleClass('active');
		 $('.toggle').toggleClass('active');
      })*/
	  
	  $('.newletterimage').click(function(){
		 if(isactive == 1){
		   isactive = 0; 
		 }else{
		   isactive = 1; 
		 }
	     $('.slidebar-newsletter').toggleClass('active');
		 if(closecontact === 1){
			 closecontact = 0;
	         $('.slidebar-contact').toggleClass('active');
		 }
	  })
	  
	  $('.closeslidebar-newsletter').click(function(){
	     isactive = 0;
		 closecontact = 0;
	     $('.slidebar-newsletter').toggleClass('active');
	  })
	  
	  $('.contactusimage').click(function(){
		 if(closecontact == 1){
		   closecontact = 0; 
		 }else{
		   closecontact = 1; 
		 }
		 $('.slidebar-contact').toggleClass('active');
		 if(isactive === 1){
			 isactive = 0;
		     $('.slidebar-newsletter').toggleClass('active'); 
		 }
	   }
	  )
	  
	  $('.closecontactus').click(function(){
	     closecontact = 0;
		 isactive = 0;
	     $('.slidebar-contact').toggleClass('active');
	  })
	  

	  $('.d1').click(function(){
	      $('.day1').css("display",	"inline-block");
		  $('.day2').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day6').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map1').css("display",	"inline-block");
		  $('.map2').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map7').css("display",	"none");
		  $('.map8').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	  $('.d2').click(function(){
	      $('.day2').css("display",	"inline-block");
		  $('.day1').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day6').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map2').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map7').css("display",	"none");
		  $('.map8').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	  $('.d3').click(function(){
	      $('.day3').css("display",	"inline-block");
		  $('.day1').css("display",	"none");
		  $('.day2').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day6').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map3').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map2').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map7').css("display",	"none");
		  $('.map8').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	  $('.d4').click(function(){
	      $('.day4').css("display",	"inline-block");
		  $('.day1').css("display",	"none");
		  $('.day2').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day6').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map4').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map2').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map7').css("display",	"none");
		  $('.map8').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	  $('.d5').click(function(){
	      $('.day5').css("display",	"inline-block");
		  $('.day1').css("display",	"none");
		  $('.day2').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day6').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map5').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map2').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map7').css("display",	"none");
		  $('.map8').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	  $('.d6').click(function(){
	      $('.day6').css("display",	"inline-block");
		  $('.day1').css("display",	"none");
		  $('.day2').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map6').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map2').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map7').css("display",	"none");
		  $('.map8').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	  $('.d7').click(function(){
	      $('.day7').css("display",	"inline-block");
		  $('.day6').css("display",	"none");
		  $('.day2').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day1').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map7').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map2').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map8').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	  $('.d8').click(function(){
	      $('.day8').css("display",	"inline-block");
		  $('.day1').css("display",	"none");
		  $('.day2').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day9').css("display",	"none");
		  $('.map8').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map2').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map7').css("display",	"none");
		  $('.map9').css("display",	"none");
	  })
	   $('.d9').click(function(){
	      $('.day9').css("display",	"inline-block");
		  $('.day1').css("display",	"none");
		  $('.day2').css("display",	"none");
		  $('.day3').css("display",	"none");
		  $('.day4').css("display",	"none");
		  $('.day5').css("display",	"none");
		  $('.day7').css("display",	"none");
		  $('.day8').css("display",	"none");
		  $('.map9').css("display",	"inline-block");
		  $('.map1').css("display",	"none");
		  $('.map2').css("display",	"none");
		  $('.map3').css("display",	"none");
		  $('.map4').css("display",	"none");
		  $('.map6').css("display",	"none");
		  $('.map5').css("display",	"none");
		  $('.map8').css("display",	"none");
	  })
   })
   
   function PostContactdetails(){
	   var varname=$("#firstname").val();
	   var varemailaddress=$("#emailaddress").val();
	   var vartelphone=$("#telephonenumber").val();
	   var varcomments=$("#usercomments").val();
	   $.ajax({
		   url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeySFAHabTeHDZRuP6z2zN_aJ2Y9LLP7VuuEIu56k4V9XXu4A/formResponse?",
		   data: {"entry.1632229291":varname,"entry.895795257":varemailaddress,"entry.393334998":vartelphone,"entry.2032185068":varcomments},
		   type: "POST",
		   dataType: "xml",
		   sucess: function(d){
			   $('.slidebar-contact').toggleClass('active');
		       $('.toggle').toggleClass('active');
		       closecontact = 0;
		   },
		   error: function(x){
			   $("#firstname").val("");
	           $("#emailaddress").val("");
	           $("#telephonenumber").val("");
	           $("#usercomments").val("");
			   $('.slidebar-contact').toggleClass('active');
		       $('.toggle').toggleClass('active');
		       closecontact = 0;
		   }
		   
	   });
	   return false;
   }
   
   function PostNewsLetterdetails(){
	   var varfirstname=$("#firstnamenewsletter").val();
	   var varlastname=$("#lastnamenewsletter").val();
	   var varemailaddress=$("#emailaddressnewsletter").val();
	   $.ajax({
		   url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfc-hsJs8_niEH_4aw1jcAUJt7BBcryNOCD5AcEdt5oA2uxeQ/formResponse?",
		   data: {"entry.458650811":varfirstname,"entry.1567944970":varlastname,"entry.57460590":varemailaddress},
		   type: "POST",
		   dataType: "xml",
		   sucess: function(d){
			   isactive = 0;
	           $('.slidebar-newsletter').toggleClass('active');
		   },
		   error: function(x){
			   $("#firstnamenewsletter").val("");
	           $("#lastnamenewsletter").val("");
	           $("#emailaddressnewsletter").val("");
			   isactive = 0;
	           $('.slidebar-newsletter').toggleClass('active');
		   }
	   });
	   return false;
   }