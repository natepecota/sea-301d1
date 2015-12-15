page('/', articleController.index);

page('/index', articleController.index);

page('/about', function() {
  $('#about').show();
  $('#articles').hide();
  $('#spinner').hide();
});

page.start();
