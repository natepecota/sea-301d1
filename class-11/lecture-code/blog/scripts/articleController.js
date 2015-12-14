var articleController = {};

articleController.index = function(ctx, next) {
  Article.loadAll(articleView.index);
};

articleController.show = function() {
  
};
