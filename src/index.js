/*
  1)  Смотрим текущий url и в соответствии с ним подставляем нужный темпл.
  2)  Навешиваем хендлера на ссылки и вместо перехода по ссылке подставляем нужный темпл
*/

const link = $('.link_left_bar');

$('body').on('click', '.link_left_bar', (event) => {
console.log(event.target.href);
if (event.target.href == "file:///C:/Users/play-/apps/kb/src/index.html") {
  const indexTmpl = `#${location.href.split('/').pop().split('.')[0]}Tmpl`;
  $('#centralBlock').html($(indexTmpl).tmpl());
  event.preventDefault();
}

if (event.target.href == 'file:///C:/Users/play-/apps/kb/src/burbon.html') {
  const burbonTmpl = `#${link[2].href.split('/').pop().split('.')[0]}Tmpl`;
  $('#centralBlock').html($(burbonTmpl).tmpl());
  event.preventDefault();

} if (event.target.href == 'file:///C:/Users/play-/apps/kb/src/teqiula.html'){
  const teqiulaTmpl = `#${link[6].href.split('/').pop().split('.')[0]}Tmpl`;
  $('#centralBlock').html($(teqiulaTmpl).tmpl());
  event.preventDefault();
}
})
