var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: " ",
          excerpt: "Coming Soon!\n\n",
          categories: [],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: " ",
          excerpt: "Anomaly Detection in Dynamic Networks (This section is an overview of material available as a preprint on the arXiv.) Introduction...",
          categories: [],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: " ",
          excerpt: "NetComp: Python Network Comparison (NetComp source code is available on GitHub.) As I worked on my research on network data...",
          categories: [],
          tags: [],
          id: 2
      })
      
    
      this.add({
          title: " ",
          excerpt: "Algorithmic Musical Genre Classification (A detailed write-up of this project can be found here, and the code is publicly available...",
          categories: ["machine_learning"],
          tags: [],
          id: 3
      })
      
    
      this.add({
          title: " ",
          excerpt: "Portfolio Here you’ll find summaries of the major projects I’ve done over the years, which are representative of my skills...",
          categories: [],
          tags: [],
          id: 4
      })
      
    
      this.add({
          title: " ",
          excerpt: "Noisy Dynamics of Magnetic Waves\n\n(This section is an overview of material published in Physical Review B.)\n\nComing Soon!\n\n\n\n",
          categories: [],
          tags: [],
          id: 5
      })
      
    
      this.add({
          title: " ",
          excerpt: "Statistical Analysis of Quantum Entanglement (This section is an overview of material which is available on the arXiv.) Quantum mechanics...",
          categories: [],
          tags: [],
          id: 6
      })
      
    
      this.add({
          title: " ",
          excerpt: "DeskAI: Automated Campaign Management for Advertisers The bulk of my time at the Trade Desk has been spent conceptualizing, testing,...",
          categories: [],
          tags: [],
          id: 7
      })
      
    
      this.add({
          title: " ",
          excerpt: "Smart Climate Indices Entelligent currently publishes two indices, the SCLMX and SCLMK. These indices reflect the performance of Entelligent’s financial...",
          categories: [],
          tags: [],
          id: 8
      })
      
    
      this.add({
          title: " ",
          excerpt: "Anomaly Detection in Social Networks (Code for this project is available on GitHub.) This project looks at ways to automatically...",
          categories: [],
          tags: [],
          id: 9
      })
      
    
  
    
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/coming/",
        "excerpt": "Coming Soon!\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/networks/",
        "excerpt": "Anomaly Detection in Dynamic Networks (This section is an overview of material available as a preprint on the arXiv.) Introduction...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/netcomp/",
        "excerpt": "NetComp: Python Network Comparison (NetComp source code is available on GitHub.) As I worked on my research on network data...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/genre_cls/",
        "excerpt": "Algorithmic Musical Genre Classification (A detailed write-up of this project can be found here, and the code is publicly available...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio2/index.html",
        "excerpt": "Portfolio Here you’ll find summaries of the major projects I’ve done over the years, which are representative of my skills...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/waves/",
        "excerpt": "Noisy Dynamics of Magnetic Waves\n\n(This section is an overview of material published in Physical Review B.)\n\nComing Soon!\n\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/qm_stats/",
        "excerpt": "Statistical Analysis of Quantum Entanglement (This section is an overview of material which is available on the arXiv.) Quantum mechanics...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/deskai/",
        "excerpt": "DeskAI: Automated Campaign Management for Advertisers The bulk of my time at the Trade Desk has been spent conceptualizing, testing,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/sclm/",
        "excerpt": "Smart Climate Indices Entelligent currently publishes two indices, the SCLMX and SCLMK. These indices reflect the performance of Entelligent’s financial...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/social-networks/",
        "excerpt": "Anomaly Detection in Social Networks (Code for this project is available on GitHub.) This project looks at ways to automatically...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
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
