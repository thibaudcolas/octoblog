var github = (function(){
  function escapeHtml(str) {
    return $('<div/>').text(str).html();
  }
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
      fragment += '<li><a href="'+repos[i].html_url+'">'+repos[i].name+'</a><p>'+escapeHtml(repos[i].description||'')+'</p></li>';
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      var elt = $(options.target);
      var user = elt.attr('data-user');
      var count = parseInt(elt.attr('data-count'), 10);
      console.log(user, count);

      $.ajax({
          url: "https://api.github.com/users/"+user+"/repos?sort=pushed&callback=?"
        , dataType: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
          if (!data || !data.data) { return; }
          for (var i = 0; i < data.data.length; i++) {
            // Skip forks.
            if (data.data[i].fork) { continue; }
            repos.push(data.data[i]);
          }
          if (count) { repos.splice(count); }
          render(options.target, repos);
        }
      });
    }
  };
})();

github.showRepos({
    target: '#gh_repos'
});