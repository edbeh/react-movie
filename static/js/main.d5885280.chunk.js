(this.webpackJsonpreact_movie_db_course=this.webpackJsonpreact_movie_db_course||[]).push([[0],Array(24).concat([function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),r=a.n(o),i=a(12),l=a(1),s=a(23),m=a(11),u=a(5),d=a(6),g=a(9),h=a(8),v=a(7),p="https://api.themoviedb.org/3/",f="79979058d89787a1a5a51cfeb9b5f66a",b="http://image.tmdb.org/t/p/",E=(a(29),a(30),function(e){return c.a.createElement("div",{className:"dropdown-content"},e.menu.map((function(t,a){return c.a.createElement("p",{key:a,onClick:function(){return e.handleClick(t.id,t.name)}},t.name)})))}),k=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).displayToast=n.displayToast.bind(Object(g.a)(n)),n}return Object(d.a)(a,[{key:"displayToast",value:function(){localStorage.getItem("LikedMovieState")?this.props.history.push("/liked"):(alert("You don't have liked movies yet!"),this.props.history.push("/"))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement("div",{className:"rmdb-header-content-left"},c.a.createElement(i.b,{to:"/",onClick:function(){return e.props.handleClick2()},className:"left-menu"},c.a.createElement("span",null,"Popular")),c.a.createElement("div",{className:"left-menu dropdown"},c.a.createElement("div",null,"Genre",c.a.createElement("span",null," "),c.a.createElement("i",{className:"fa fa-caret-down"}),c.a.createElement(E,{menu:this.props.genres,handleClick:this.props.handleClick}))),c.a.createElement("div",{onClick:function(){return e.displayToast()},className:"left-menu pointer"},c.a.createElement("i",{className:"fa fa-heart",style:{color:"#ff0600"}}),c.a.createElement("span",null," "),c.a.createElement("span",null,"Liked"))),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}}]),a}(c.a.Component),N=Object(l.f)(k),S=(a(36),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0)\n                39%, rgba(0, 0, 0, 0)\n                41%, rgba(0, 0, 0, 0.65)\n                100%),\n                url('".concat(e.image,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),I=a(13),y=a.n(I),_=(a(37),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.timeout=null,e.doSearch=function(t){e.setState({value:t.target.value}),clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.props.callback(e.state.value)}),500)},e}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(y.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search Movie",onChange:this.doSearch,value:this.state.value})))}}]),a}(c.a.Component)),j=(a(38),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map((function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)}))))}),O=(a(39),function(e){return c.a.createElement("div",{className:"rmdb-moviethumb"},e.clickable?c.a.createElement(i.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image,alt:"moviethumb"})):c.a.createElement("img",{src:e.image,alt:"moviethumb"}))}),C=(a(40),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),M=(a(41),function(){return c.a.createElement("div",{className:"loader"})}),w=(a(42),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:"",genres:[],genreId:0,genreName:"Popular"},n.searchItems=function(e){console.log(e);var t="";n.setState({movies:[],loading:!0,searchTerm:e}),""===n.state.searchTerm?t=0===n.state.genreId?"".concat(p,"movie/popular?api_key=").concat(f,"&language=en-US&page=1"):"".concat(p,"discover/movie?api_key=").concat(f,"&language=en-US&with_genres=").concat(n.state.genreId,"&page=1"):(t="".concat(p,"search/movie/?api_key=").concat(f,"&language=en-US&query=").concat(e,"&page=1"),console.log(t)),n.fetchItems2(t)},n.selectGenre=function(e,t){var a;n.setState({movies:[],loading:!0,heroImage:null,genreId:e,genreName:t}),a="".concat(p,"discover/movie?api_key=").concat(f,"&language=en-US&with_genres=").concat(e,"&page=1"),n.fetchItems(a)},n.selectPopular=function(){var e;n.setState({movies:[],loading:!0,heroImage:null,genreId:0,genreName:"Popular"}),e="".concat(p,"movie/popular?api_key=").concat(f,"&language=en-US&page=1"),n.fetchItems(e)},n.loadMoreItems=function(){var e="";n.setState({loading:!0}),e=""===n.state.searchTerm&&0===n.state.genreId?"".concat(p,"movie/popular?api_key=").concat(f,"&language=en-US&page=").concat(n.state.currentPage+1):""===n.state.searchTerm&&0!==n.state.genreId?"".concat(p,"discover/movie?api_key=").concat(f,"&language=en-US&with_genres=").concat(n.state.genreId,"&page=").concat(n.state.currentPage+1):"".concat("https://cors-anywhere.herokuapp.com/").concat(p,"search/movie/?api_key=").concat(f,"&language=en-US&query=").concat(n.state.searchTerm,"&page=").concat(n.state.currentPage+1),n.fetchItems(e)},n.fetchItems=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({movies:[].concat(Object(m.a)(n.state.movies),Object(m.a)(e.results)),heroImage:n.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages},(function(){localStorage.setItem("HomeState",JSON.stringify(n.state))}))}))},n.fetchItems2=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({movies:[].concat(Object(m.a)(n.state.movies),Object(m.a)(e.results)),heroImage:n.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages})})).catch((function(e){console.log("error fetching movies",e)}))},n.selectGenre=n.selectGenre.bind(Object(g.a)(n)),n.selectPopular=n.selectPopular.bind(Object(g.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("HomeState")){var t=JSON.parse(localStorage.getItem("HomeState"));this.setState(Object(s.a)({},t))}else{this.setState({loading:!0});var a="".concat(p,"genre/movie/list?api_key=").concat(f,"&language=en-US");fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({genres:t.genres}),console.log(e.state.genres)}));var n;n=0===this.state.genreId?"".concat(p,"movie/popular?api_key=").concat(f,"&language=en-US&page=1"):"".concat(p,"discover/movie?api_key=").concat(f,"&language=en-US&with_genres=").concat(this.state.genreId,"&page=1"),this.fetchItems(n)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(N,{genres:this.state.genres,handleClick:this.selectGenre,handleClick2:this.selectPopular}),c.a.createElement(S,{image:"".concat(b).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview}),c.a.createElement(_,{callback:this.searchItems})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(j,{header:this.state.searchTerm?"Search Results":this.state.genreName+" Movies",loading:this.state.loading},this.state.movies.map((function(e,t){return c.a.createElement(O,{key:t,clickable:!0,image:e.poster_path?"".concat(b).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}))),this.state.loading?c.a.createElement(M,null):null,this.state.currentPage<this.state.totalPages&&!this.state.loading?c.a.createElement(C,{text:"Load More",onClick:this.loadMoreItems}):null))}}]),a}(c.a.Component)),P=(a(43),function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie)))}),U=(a(44),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(y.a,{className:"fa-heart",name:"heart",size:"3x",onClick:function(){return e.props.handleClick()},style:{color:this.props.toggleColor}})}}]),a}(c.a.Component)),x=(a(45),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(b).concat("w1280").concat(e.movie.backdrop_path,"')"):"black"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(O,{image:e.movie.poster_path?"".concat(b).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),e.directors.map((function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}))),c.a.createElement(U,{handleClick:e.handleClick,toggleColor:e.toggleColor})))}),T=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},L=(a(46),function(e){return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",T(e.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",T(e.revenue)))))}),D=(a(47),function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(b).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-character"},"as"),c.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))}),G=(a(48),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={movie:null,actors:null,directors:[],loading:!1,liked:!1,toggleColor:"#fff",likedMovies:[]},n.handleLikeMovie=function(){n.state.liked?(n.setState({liked:!1,toggleColor:"#fff"}),n.handleUnlikeMovie(n.state.movie)):(n.setState({liked:!0,toggleColor:"#f00",likedMovies:[n.state.movie].concat(Object(m.a)(n.state.likedMovies))},(function(){localStorage.setItem("LikedMovieState",JSON.stringify(n.state.likedMovies))})),console.log(n.state.likedMovies.slice(0))),console.log(n.state.liked)},n.handleUnlikeMovie=function(e){var t=n.state.likedMovies;t.forEach((function(t,a,n){t.id===e.id&&n.splice(a,1)})),n.setState({liked:!1,toggleColor:"#fff",likedMovies:t},(function(){localStorage.setItem("LikedMovieState",JSON.stringify(n.state.likedMovies))}))},n.fetchItems=function(e){fetch(e).then((function(e){return e.json()})).then((function(t){t.status_code?n.setState({loading:!1}):n.setState({movie:t},(function(){n.state.likedMovies.forEach((function(e){e.id===t.id&&n.setState({liked:!0,toggleColor:"#f00"})})),e="".concat(p,"movie/").concat(n.props.match.params.movieId,"/credits?api_key=").concat(f),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.crew.filter((function(e){return"Director"===e.job}));n.setState({actors:e.cast,directors:t,loading:!1})}))}))})).catch((function(e){return console.error("Error",e)}))},n.handleLikeMovie=n.handleLikeMovie.bind(Object(g.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){if(localStorage.getItem("LikedMovieState")){var e=JSON.parse(localStorage.getItem("LikedMovieState").slice(0));this.setState({likedMovies:Object(m.a)(e)})}this.setState({loading:!0});var t="".concat(p,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(f,"&language=en-US");this.fetchItems(t)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(P,{movie:this.props.location.movieName}),c.a.createElement(x,{movie:this.state.movie,directors:this.state.directors,handleClick:this.handleLikeMovie,toggleColor:this.state.toggleColor}),c.a.createElement(L,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(j,{header:"Actors"},this.state.actors.map((function(e,t){return c.a.createElement(D,{key:t,actor:e})})))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"No Movie Found Here!"),this.state.loading?c.a.createElement(M,null):null)}}]),a}(c.a.Component)),J=(a(49),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={movies:[],heroImage:null,loading:!1,genres:[],genreId:0},n.selectGenre=function(e,t){var a;n.setState({movies:[],loading:!0,heroImage:null,genreId:e,genreName:t}),a="".concat(p,"discover/movie?api_key=").concat(f,"&language=en-US&with_genres=").concat(e,"&page=1"),n.fetchItems(a)},n.selectPopular=function(){n.props.history.push("/")},n.selectGenre=n.selectGenre.bind(Object(g.a)(n)),n.selectPopular=n.selectPopular.bind(Object(g.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("LikedMovieState")){var t=JSON.parse(localStorage.getItem("LikedMovieState"));this.setState({movies:Object(m.a)(t),heroImage:t[0]});var a="".concat(p,"genre/movie/list?api_key=").concat(f,"&language=en-US");fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({genres:t.genres}),console.log(e.state.genres)}))}else{this.setState({loading:!0});var n="".concat(p,"genre/movie/list?api_key=").concat(f,"&language=en-US");fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({genres:t.genres}),console.log(e.state.genres)}))}}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(N,{genres:this.state.genres,handleClick:this.selectPopular,handleClick2:this.selectPopular}),c.a.createElement(S,{image:"".concat(b).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(j,{header:"Liked Movies",loading:this.state.loading},this.state.movies.map((function(e,t){return c.a.createElement(O,{key:t,clickable:!0,image:e.poster_path?"".concat(b).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}))),this.state.loading?c.a.createElement(M,null):null))}}]),a}(c.a.Component)),R=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Page Not Found."))},z=function(){return c.a.createElement(i.a,{basename:"/react-movie/"},c.a.createElement(c.a.Fragment,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:w,exact:!0}),c.a.createElement(l.a,{path:"/liked",component:J,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:G,exact:!0}),c.a.createElement(l.a,{component:R}))))};a(50);r.a.render(c.a.createElement(z,null),document.getElementById("root"))}]),[[24,1,2]]]);
//# sourceMappingURL=main.d5885280.chunk.js.map