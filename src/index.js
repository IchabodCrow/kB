/*
  1)  Смотрим текущий url и в соответствии с ним подставляем нужный темпл.
  2)  Навешиваем хендлера на ссылки и вместо перехода по ссылке подставляем нужный темпл
*/



function index() {
  const indexTmpl = `#${location.href.split('/').pop().split('.')[0]}Tmpl`;
  $('#centralBlock').html($(indexTmpl).tmpl());
};
index();

function burbon() {
  const burbonTmpl = `#${burbonLnk[0].href.split('/').pop().split('.')[0]}Tmpl`;
  $('#centralBlock').html($(burbonTmpl).tmpl());
};

function teqiula() {
  const teqiulaTmpl = `#${teqiulaLnk[0].href.split('/').pop().split('.')[0]}Tmpl`;
  $('#centralBlock').html($(teqiulaTmpl).tmpl());
};

const burbonLnk = $('.linkBurbon').on('click', function(event) {
  const href = $(this).attr('href');
  console.log(href);
});

const teqiulaLnk = $('.linkTeqiula').on('click', function(event) {
 const href = $(this).attr('href');
 console.log(href);
});

$('body').on('click','.linkIndex', () => index(event.preventDefault()));
$('body').on('click','.linkBurbon', () => burbon(event.preventDefault()));
$('body').on('click','.linkTeqiula', () => teqiula(event.preventDefault()));
