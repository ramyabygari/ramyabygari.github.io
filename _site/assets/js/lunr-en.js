var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
  
    
    
      this.add({
          title: "Anomaly Detection in Dynamic Networks",
          excerpt: "“Data analysis” is a hugely popular thing these days, for obvious reasons. When most people think of “data,” they think...",
          categories: ["posts"],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: "Types as Propositions",
          excerpt: "Some of the most meaningful mathematical realizations that I’ve had have been unexpected connections between two topics; that is, realizing...",
          categories: ["posts"],
          tags: [],
          id: 1
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
  
    
    
    
      
      {
        "title": "Anomaly Detection in Dynamic Networks",
        "url": "http://localhost:4000/posts/2017/09/09/dynamic.html",
        "excerpt": "“Data analysis” is a hugely popular thing these days, for obvious reasons. When most people think of “data,” they think...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Types as Propositions",
        "url": "http://localhost:4000/posts/2018/11/30/types.html",
        "excerpt": "Some of the most meaningful mathematical realizations that I’ve had have been unexpected connections between two topics; that is, realizing...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().replace(":", "");
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
