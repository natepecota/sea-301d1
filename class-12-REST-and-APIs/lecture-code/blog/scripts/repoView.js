var repoView = {};

repoView.index = function() {
  repoView.ui();

  var _append = function(repo) {
    $('#about ul').append(repoView.render(repo));
  };
<<<<<<< HEAD
  repos.all.forEach(_append);
};

repoView.render = function(repo) {
  return $('<li>').text(repo.full_name);
=======

  repos.all.filter(
    //TODO: How would you like to filter the repos?
  )
  .forEach(_append);
};

repoView.render = function(repo) {
  //TODO: How would you like to render this?
>>>>>>> 2e2ea519cb4afe98a0165554e8a529c8bd8143a2
};

repoView.ui = function() {
  var $about = $('#about');
  var $ul = $about.find('ul');

  $ul.empty();
  $about.fadeIn().siblings().hide();
};
