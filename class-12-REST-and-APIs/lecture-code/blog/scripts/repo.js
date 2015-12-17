var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
<<<<<<< HEAD
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/natepecota/repos?sorted=updated',
    headers: { Authorization: 'token ' + githubToken}
  }).done(function(data) {
    repos.all = data;
  }).done(callback);
=======
  //TODO: How would you like to fetch your repos?
>>>>>>> 2e2ea519cb4afe98a0165554e8a529c8bd8143a2
};
