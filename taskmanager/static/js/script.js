$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.datepicker').datepicker(
    {
      format: 'yyyy-mm-dd',
      showClearBtn: true,
      i18n: {
        done: 'Select'
      }
    }
  );
  $('select').formSelect();
  $('.collapsible').collapsible();
});