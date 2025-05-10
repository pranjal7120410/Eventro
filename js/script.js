
        $(document).ready(function(){
        $("#brandname").owlCarousel({
            items:5,
            loop:true,
            center:true,
            autoplay:true,
            dots:false,
        });
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        // Listen to owl events:
        owl.on('changed.owl.carousel', function(event) {
        new WoW.init();
      })
      new WoW.init();

      $("#port").owlCarousel({
        items:4,
        loop:true,
        center:false,
        autoplay:true,
        dots:false,
      });

    });
    
    