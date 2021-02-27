var slider_content = document.getElementById('box');

  	// contain images in an array
    var image = ['a','b', 'c', 'd','e','f','g','h'];

    var i = image.length;


    // function for next slide 

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 2;
    	}
        console.log(image[i-1]);
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }


    // function for prew slide

    function prewImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }

  
  //script for auto image slider

  setInterval(nextImage , 4000);


var hiddenBox1 = $("#IMG1");
$(".IMG1").on("click",function (event){

    slider_content.innerHTML = "<img src=a.jpg>";

$(".IMG1").css("border-style","solid")
$(".IMG1").css("border-color","red")
$(".IMG2,.IMG3,.IMG4,.IMG5,.IMG6,.IMG7").css("border-style","none")

});




    var hiddenBox2 = $( "#IMG2" );
    $( ".IMG2" ).on( "click", function( event ) {

        slider_content.innerHTML = "<img src=b.jpg>";

    $(".IMG2").css("border-style","solid")
    $(".IMG2").css("border-color","red")
    $(".IMG1,.IMG3,.IMG4,.IMG5,.IMG6,.IMG7").css("border-style","none")

        
    
    });

 

        var hiddenBox3 = $( "#IMG3" );
        $( ".IMG3" ).on( "click", function( event ) {

            slider_content.innerHTML = "<img src=c.jpg>";
        
        $(".IMG3").css("border-style","solid")
        $(".IMG3").css("border-color","red")
        $(".IMG2,.IMG1,.IMG4,.IMG5,.IMG6,.IMG7").css("border-style","none")
           
        });

        


                var hiddenBox4 = $( "#IMG4" );
            $( ".IMG4" ).on( "click", function( event ) {

                slider_content.innerHTML = "<img src=d.jpg>";

            $(".IMG4").css("border-style","solid")
            $(".IMG4").css("border-color","red")
            $(".IMG2,.IMG3,.IMG1,.IMG5,.IMG6,.IMG7").css("border-style","none")

               
                });

           

                var hiddenBox5 = $( "#IMG5" );
                $( ".IMG5" ).on( "click", function( event ) {
                    
                    slider_content.innerHTML = "<img src=e.jpg>";

                $(".IMG5").css("border-style","solid")
                $(".IMG5").css("border-color","red")
                $(".IMG2,.IMG3,.IMG4,.IMG1,.IMG6,.IMG7").css("border-style","none")
                    
                });
                
                

                    var hiddenBox6 = $( "#IMG6" );
                    $( ".IMG6" ).on( "click", function( event ) {

                        slider_content.innerHTML = "<img src=f.jpg>";

                    $(".IMG6").css("border-style","solid")
                    $(".IMG6").css("border-color","red")
                    $(".IMG2,.IMG3,.IMG4,.IMG5,.IMG1,.IMG7").css("border-style","none")

                      
                    });
                    
                  
                    var hiddenBox7 = $( "#IMG7" );
                    $( ".IMG7" ).on( "click", function( event ) {
                        
                        slider_content.innerHTML = "<img src=g.jpg>";
                        
                        $(".IMG7").css("border-style","solid")
                        $(".IMG7").css("border-color","red")
                        $(".IMG2,.IMG3,.IMG4,.IMG5,.IMG6,.IMG1").css("border-style","none")                    
                       
                    });
                    
                    
                    var hiddenBox8 = $( "#IMG8" );
                    $( ".IMG8" ).on( "click", function( event ) {
                        
                        slider_content.innerHTML = "<img src=h.jpg>";
                        
                        $(".IMG8").css("border-style","solid")
                        $(".IMG8").css("border-color","red")
                        $(".IMG2,.IMG3,.IMG4,.IMG5,.IMG6,.IMG1, .IMG8").css("border-style","none")                    
                          
                        });
                                    
                                    
                                    
                                    