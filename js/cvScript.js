$(function(){


    $("input , textarea").on('click',function(){
   
         $(this).addClass('select');
         $("input ,textarea").not($(this)).removeClass('select');
    
        });



    //smooth scroll to section
    $('.navbar a[href*="#"]').on('click',function(e){
        e.preventDefault();//prevent hard jump the default behavior
        var target=$(this).attr("href");
        //perform animating scrolling by getting top position of target element and set it as scroll target
        $('html,body').animate({
            scrollTop: $(target).offset().top

        },600,function(){
            location.hash=target;// attatch the hash (#jumptarget)to the page url 
        })


       return false;
    }),


    //Active navbar  to move to target section and  get color to target link 

    $(window).on("scroll",function(){
        var scrollDistance=$(window).scrollTop();

        if(scrollDistance >120)
        {
          $('header .navbar').addClass("fixed");
        }
        else{
            $('header .navbar').removeClass("fixed");
        }

        $("section").each(function(i){

            if($(this).offset().top <= scrollDistance)
            {
                $(".navbar-nav li.active").removeClass("active");
                $(".navbar-nav li").eq(i+1).addClass("active");
            }
        })


    })

//intiate Aos Animate
AOS.init();
// init progress circle plugin
$('.circle').circliful();


var Class ="";
$(".courseList  li.category").on('click', function () {
    $(this).addClass('activ').siblings().removeClass('activ');
     Class = $(this).attr("data-rel");
    $(".gal").fadeOut(500)
    $(".gal").not("." + Class).fadeOut(500)
    $("."+ Class).fadeIn(1000);
  
   
});


})