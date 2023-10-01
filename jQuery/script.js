function magic(){
    $('#h1').fadeToggle(1000);
    $('#h1').css('background','green');
    $('p').css('fontSize','50px');
}

$('button').click(magic);