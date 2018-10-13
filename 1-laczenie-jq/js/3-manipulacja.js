// pobranie tekstu

let h1Text = $('h1').text();
//console.log(h1Text);

// ustawienie tekstu

setTimeout(function(){
    $('h2').text("nowa treść H2");
},4000);

// pobieranie html

let html = $('body').html();
console.log(html);

//zmiana html
//setTimeout(function(){
//    $('body').html("<h3>nowa zawartość body</h3><div>lorem lorem</div>");
//},2000);

// dodawanie do elementu treści jak i html
//$('h2').append("<span style='color:red;'> Span w H2</span>");
//$('h2').prepend("<span style='color:red;'> Span w H2</span>");

// dodawanie za i przed treści html

//$('a').after('<div style="padding:30px; background:green;"></div>');

// usuwanie zawartości i struktury

$('h1').remove();

// usuwanie tylko zawartości

$('h2').empty();

// style
$('p').css({
    'font-size': '2rem',
    'color': 'blue',
    'padding': '20px'
});

// dodoawanie i usuwanie klas

//setTimeout(function(){
////        $('body').addClass('decor');
//    $('body').removeClass('page');
//    },2000);

//setInterval(function(){
//    $('body').toggleClass('decor');
//},1500);
