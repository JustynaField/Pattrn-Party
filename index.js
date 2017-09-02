$(document).ready(() => {
  // $(".tab_content").hide();
  // $(".tab_content:first").show();
    $('#tab1').removeClass('hidden')
})

$('.tab1').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab1').removeClass('hidden')
})

$('.tab2').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab2').removeClass('hidden')
})

$('.tab3').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab3').removeClass('hidden')
})

$('.tab4').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab4').removeClass('hidden')
})

//cell phone:
$('#cell-tab1').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab1').removeClass('hidden')
})

$('#cell-tab2').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab2').removeClass('hidden')
})

$('#cell-tab3').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab3').removeClass('hidden')
})

$('#cell-tab4').on('click', () => {
  $('.tab-content').addClass('hidden')
  $('#tab4').removeClass('hidden')
})
