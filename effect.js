$(window).on('load', function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    var vw;
    $(window).resize(function(){
        vw = $(window).width()/2;
        var spacing = $(window).width() < 768 ? 40 : 100; // Lebih rapat di mobile
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({top:240, left: vw - (spacing * 3)},500);
        $('#b22').animate({top:240, left: vw - (spacing * 2)},500);
        $('#b33').animate({top:240, left: vw - (spacing * 1)},500);
        $('#b44').animate({top:240, left: vw},500);
        $('#b55').animate({top:240, left: vw + (spacing * 1)},500);
        $('#b66').animate({top:240, left: vw + (spacing * 2)},500);
        $('#b77').animate({top:240, left: vw + (spacing * 3)},500);
    });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopBalloon(id) {
        var randleft = ($(window).width() - 100) * Math.random(); // 100 is balloon width
        var randtop = ($(window).height() - 200) * Math.random(); // 200 is balloon height
        $(id).animate({left:randleft,bottom:randtop},10000,function(){
            loopBalloon(id);
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        
        loopBalloon('#b1');
        loopBalloon('#b2');
        loopBalloon('#b3');
        loopBalloon('#b4');
        loopBalloon('#b5');
        loopBalloon('#b6');
        loopBalloon('#b7');
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    }); 

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        
        function launchFirework() {
            var randLeft = Math.random() * 80 + 10;
            var randTop = Math.random() * 30 + 10; 
            var colors = ['#e74c3c', '#2ecc71', '#3498db', '#f1c40f', '#9b59b6', '#e67e22'];
            var randColor = colors[Math.floor(Math.random() * colors.length)];
            
            var $firework = $('<div class="firework"></div>')
                .css({
                    'left': randLeft + '%',
                    'top': randTop + 'vh', 
                    'color': randColor     
                });
            
            $('#fireworks-container').append($firework);
            
            setTimeout(function() {
                $firework.addClass('animate');
            }, 10);
            
            setTimeout(function() {
                $firework.remove();
            }, 2000);
        }

        // Jalankan kembang api beberapa kali
        var fireworkCount = 0;
        var fireworkInterval = setInterval(function() {
            launchFirework();
            fireworkCount++;
            if (fireworkCount >= 10) clearInterval(fireworkInterval);
        }, 2000);

        $(this).fadeOut('slow').promise().done(function(){
            setTimeout(function() {
                $('#wish_message').fadeIn('slow');
            }, 2000);
        });
    });

    $('#wish_message').click(function(){
        vw = $(window).width()/2;
        var spacing = $(window).width() < 768 ? 40 : 100; // Lebih rapat di mobile
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22')
        $('#b3').attr('id','b33')
        $('#b4').attr('id','b44')
        $('#b5').attr('id','b55')
        $('#b6').attr('id','b66')
        $('#b7').attr('id','b77')
        
        $('#b11').animate({top:240, left: vw - (spacing * 3)},500);
        $('#b22').animate({top:240, left: vw - (spacing * 2)},500);
        $('#b33').animate({top:240, left: vw - (spacing * 1)},500);
        $('#b44').animate({top:240, left: vw},500);
        $('#b55').animate({top:240, left: vw + (spacing * 1)},500);
        $('#b66').animate({top:240, left: vw + (spacing * 2)},500);
        $('#b77').animate({top:240, left: vw + (spacing * 3)},500);
        
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });
        
        var totalMessages = $('.message p').length;
        function msgLoop (i) {
            $(".message p:nth-child("+i+")").fadeIn('slow').delay(2000).promise().done(function(){
                $(".message p:nth-child("+i+")").fadeOut('slow').promise().done(function(){
                    if(i < totalMessages){
                        msgLoop(i+1);
                    } else {
                        $('.cake').fadeIn('fast');
                    }
                });
            });
        }
        msgLoop(1);
    });
});