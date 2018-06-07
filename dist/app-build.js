"bundle";!function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><!--<require from="bootstrap/dist/css/bootstrap.min.css"></require>--><require from="../styles/app.css"></require><!--Order is not 100% same here so move bs import to app.js--><div class="fixed-top"><nav class="navbar navbar-dark"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars" style="color:white;"></i></button> <span style="color:white;" class="ml-auto d-lg-none d-xl-none">${activeTitle}</span><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav text-center"><li class="nav-item" repeat.for="nav of router.navigation"><a class="nav-link ${nav.isActive ? \'font-weight-bold\' : \'\'}" href.bind="nav.href">${nav.title}</a></li></ul></div></nav></div><router-view></router-view></template>'})}(),System.register("services/ip-service.js",["aurelia-fetch-client"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f;return{setters:[function(a){d=a.HttpClient,e=a.json}],execute:function(){a("default",f=function(){function a(){c(this,a),this.http=new d,this.http.configure(function(a){a.withBaseUrl("https://json.geoiplookup.io/")})}return a.prototype.getInfo=function(){return this.http.fetch("api",{method:"get"}).then(function(a){return a.json()}).then(function(a){return a}).catch(function(a){console.log(a)})},a}()),a("default",f)}}}),System.register("app.js",["aurelia-framework","aurelia-event-aggregator","./services/fetch-service.js","./services/ip-service.js","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j,k;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default},function(a){g=a.default},function(a){h=a.default}],execute:function(){a("App",(i=d(e,f,g),k=i(j=function(){function a(b,d,e){var f=this;c(this,a),this.activeTitle="home",this.EA=b,this.FS=d,this.IP=e,this.subscriptions=[],this.EA.subscribe("change_active_title",function(a){f.activeTitle=a})}return a.prototype.configureRouter=function(a,b){this.router=b,a.title="Expressive Art Dance";var c=function(a){return{route:"not-found",redirect:"home"}};a.mapUnknownRoutes(c),a.map([{route:"",redirect:"home"},{route:"home",name:"home",moduleId:"./pages/P01",nav:!0,title:"Home"},{route:"about",name:"about",moduleId:"./pages/P02",nav:!0,title:"About"},{route:"location",name:"location",moduleId:"./pages/P03",nav:!0,title:"Location"},{route:"bookings",name:"bookings",moduleId:"./pages/P04",nav:!0,title:"Bookings"},{route:"faq",name:"faq",moduleId:"./pages/P05",nav:!0,title:"FAQ"},{route:"contact",name:"contact",moduleId:"./pages/P06",nav:!0,title:"Contact"}])},a.prototype.activate=function(){var a=this;this.IP.getInfo().then(function(b){a.FS.addInfo(b)})},a.prototype.deactivate=function(){},a.prototype.attached=function(){h(".navbar-nav>li>a").on("click",function(){h(".navbar-collapse").collapse("hide")}),h(".navbar-collapse").on("show.bs.collapse",function(){h(".navbar").removeClass("nav-bg-hide"),h(".navbar").addClass("nav-bg-show")}),h(".navbar-collapse").on("hide.bs.collapse",function(){h(".navbar").addClass("nav-bg-hide"),h(".navbar").removeClass("nav-bg-show")})},a.prototype.detached=function(){},a}())||j)),a("App",k)}}}),function(){var a=System.amdDefine;a("components/footer.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return"<template></template>"})}(),System.register("main.js",["bootstrap/dist/css/bootstrap.min.css!","bootstrap"],function(a,b){"use strict";function c(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(){return a.setRoot("app")})}return a("configure",c),{setters:[function(a){},function(a){}],execute:function(){}}}),function(){var a=System.amdDefine;a("modals/S04M-S1.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template bindable="workshops, specials, current_price"><div class="row mb-3" repeat.for="ws of workshops"><div class="col-10"><div class="row"><div class="col-8">${ws.day}</div><div class="col-4 text-right">${ws.date}</div></div><div class="row"><div class="col-8">${ws.time.start} - ${ws.time.end}</div><div class="col-4 text-right">${ws.price}€</div></div></div><div class="col-2"><input type="checkbox" class="w-100 h-100" checked.bind="ws.checked"></div><div class="col-12"><div class="w-100 custom-ws-item"></div></div></div><div class="row mt-4 mb-3"><div class="col-12 text-center">Or</div></div><div class="row" repeat.for="special of specials"><div class="col-8"><div>All 4 Workshops</div><div></div></div><div class="col-2"><div></div><div>${special.price}€</div></div><div class="col-2"><input type="checkbox" class="w-100 h-100" checked.bind="special.checked"></div><div class="col-12"><div class="w-100 custom-ws-item"></div></div></div><div class="row mt-4 mb-2"><div class="col-12 text-center">You are investing ${current_price}€ in yourself.</div></div></template>'})}(),function(){var a=System.amdDefine;a("modals/S04M-S2.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template bindable="info, current_price"><style type="text/css">.normal-font-fam {\n\t\tfont-family: sans-serif;\n\t}</style><div class="row mt-2 mb-3"><div class="col-12 text-center">You are investing ${current_price}€ in yourself.</div><div class="col-12 mt-3"><div class="w-100 custom-ws-item"></div></div></div><form action="/charge" method="post" id="payment-form"><div class="form-group row mb-3"><div class="col-12"><label for="payment-form-name" class="">Name</label> <input id="payment-form-name" type="text" class="form-control normal-font-fam" placeholder="Jane Doe" required value.two-way="info.name"></div></div><div class="form-group row"><div class="col-12"><label for="payment-form-email" class="">Email</label> <input id="payment-form-email" type="email" class="form-control normal-font-fam" placeholder="janedoe@gmail.com" required value.bind="info.email"></div></div><div class="row mt-5"><div class="col-12"><label for="payment-form-card-number">Card number</label><div id="payment-form-card-number" class="form-control"></div></div></div><div class="row mt-3"><div class="col-6"><label for="payment-form-card-expiry">Expiry date</label><div id="payment-form-card-expiry" class="form-control"></div></div><div class="col-6"><label for="payment-form-card-cvc">CVC</label><div id="payment-form-card-cvc" class="form-control"></div></div></div><div class="row mt-2 mb-2"><div class="col-12"><!-- Used to display Element errors. --><div id="card-errors1" class="alert-danger small mt-1"></div><div id="card-errors2" class="alert-danger small mt-1"></div><div id="card-errors3" class="alert-danger small mt-1"></div><div id="card-errors4" class="alert-danger small mt-1"></div></div></div></form></template>'})}(),function(){var a=System.amdDefine;a("modals/S04M-Success.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div class="row"><div class="col-12"><h3>Thank you for your booking</h3><p>You should recieve a confirmation email shortly</p></div></div></template>'})}(),function(){var a=System.amdDefine;a("modals/S04M.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><style type="text/css">.custom-ws-item {\n\t\t \tborder-bottom: 1px solid #BCBDBE;\n\t\t }</style><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Bookings</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="container-fluid pl-0 pr-0"><require from="./S04M-S1.html"></require><s04m-s1 show.bind="next_index === 0" workshops.two-way="workshops" specials.two-way="specials" current_price.one-way="current_price"></s04m-s1><require from="./S04M-S2.html"></require><s04m-s2 show.bind="next_index === 1" info.two-way="info" current_price.one-way="current_price"></s04m-s2><require from="./S04M-Success.html"></require><s04m-success show.bind="next_index === 2" info.two-way="info"></s04m-success></div></div><div class="modal-footer"><div class="container-fluid"><div class="row"><div class="offset-2 col-8"><button type="button" class="btn btn-primary btn-block" click.trigger="next()">${next_btn_text}</button></div></div></div></div></div><require from="./loading.html"></require><loading show.bind="loading"></loading></div></div></template>'})}(),System.register("modals/S04M.js",["aurelia-framework","../services/fetch-service.js"],function(a,b){"use strict";function c(a,b,c,d){c&&Object.defineProperty(a,b,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(d):void 0})}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;return{setters:[function(a){f=a.inject,g=a.bindable,h=a.bindingMode,i=a.ObserverLocator,j=a.TaskQueue},function(a){k=a.default}],execute:function(){a("S04M",(l=f(i,j,k),m=g({defaultBindingMode:h.twoWay}),n=g({defaultBindingMode:h.twoWay}),o=g({defaultBindingMode:h.twoWay}),u=l((q=function(){function a(b,e,f){d(this,a),c(this,"workshops",r,this),c(this,"specials",s,this),c(this,"events",t,this),this.OL=b,this.TQ=e,this.FS=f,this.option5=!1,this.next_index=0,this.next_btn_text="Next",this.info={name:"",email:"",items:[]},this.loading=!1,this.current_price=0}return a.prototype.attached=function(){var a=this;$("#exampleModal").on("hidden.bs.modal",function(){a.next_index=0,a.next_btn_text="Next";for(var b=a.events,c=Array.isArray(b),d=0,b=c?b:b[Symbol.iterator]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{if(d=b.next(),d.done)break;e=d.value}var f=e;f.checked=!1}a.info.items=[],document.getElementById("card-errors1").textContent="",document.getElementById("card-errors2").textContent="",document.getElementById("card-errors3").textContent="",document.getElementById("card-errors4").textContent=""});for(var b=this.workshops,c=Array.isArray(b),d=0,b=c?b:b[Symbol.iterator]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{if(d=b.next(),d.done)break;e=d.value}var f=e;this.OL.getObserver(f,"checked").subscribe(function(b,c){if(b===!0)for(var d=a.specials,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var h=g;h.checked=!1}a.current_price=0;for(var i=a.events,j=Array.isArray(i),k=0,i=j?i:i[Symbol.iterator]();;){var l;if(j){if(k>=i.length)break;l=i[k++]}else{if(k=i.next(),k.done)break;l=k.value}var m=l;m.checked===!0&&(a.current_price+=m.price)}})}for(var g=this.specials,h=Array.isArray(g),i=0,g=h?g:g[Symbol.iterator]();;){var j;if(h){if(i>=g.length)break;j=g[i++]}else{if(i=g.next(),i.done)break;j=i.value}var k=j;this.OL.getObserver(k,"checked").subscribe(function(b,c){if(b===!0)for(var d=a.workshops,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var h=g;h.checked=!1}a.current_price=0;for(var i=a.events,j=Array.isArray(i),k=0,i=j?i:i[Symbol.iterator]();;){var l;if(j){if(k>=i.length)break;l=i[k++]}else{if(k=i.next(),k.done)break;l=k.value}var m=l;m.checked===!0&&(a.current_price+=m.price)}})}this.stripe=Stripe("pk_live_vQvS9OwMxlRiOlbZ79OYbuNd");var l=this.stripe.elements(),m={base:{fontSize:"16px",color:"#32325d"}},n={focus:"focus",empty:"empty",invalid:"invalid"},o=l.create("cardNumber",{style:m,classes:n});o.mount("#payment-form-card-number");var p=l.create("cardExpiry",{style:m,classes:n});p.mount("#payment-form-card-expiry");var q=l.create("cardCvc",{style:m,classes:n});q.mount("#payment-form-card-cvc"),this.s_elements=[o,p,q],o.addEventListener("change",function(a){var b=document.getElementById("card-errors1");a.error?b.textContent=a.error.message:b.textContent=""}),p.addEventListener("change",function(a){var b=document.getElementById("card-errors2");a.error?b.textContent=a.error.message:b.textContent=""}),q.addEventListener("change",function(a){var b=document.getElementById("card-errors3");a.error?b.textContent=a.error.message:b.textContent=""})},a.prototype.onChange1=function(a,b){if(a===!0)for(var c=this.workshops,d=Array.isArray(c),e=0,c=d?c:c[Symbol.iterator]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{if(e=c.next(),e.done)break;f=e.value}var g=f;g.checked=!1}},a.prototype.next=function(){var a=this;1===this.next_index&&(this.loading=!0,this.info.name.length>1&&this.info.email.length>1?this.stripe.createToken(this.s_elements[0]).then(function(b){var c=(b.token,b.error);if(c){var d=document.getElementById("card-errors4");d.textContent=c.message,a.loading=!1}else{for(var e=a.events,f=Array.isArray(e),g=0,e=f?e:e[Symbol.iterator]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{if(g=e.next(),g.done)break;h=g.value}var i=h;i.checked&&a.info.items.push(i.id)}a.FS.payment(a.info,b.token.id).then(function(){a.next_index++,a.next_btn_text="close",a.loading=!1}).catch(function(b){a.loading=!1,document.getElementById("card-errors4").textContent="Sorry there was an error processing your payment"})}}):this.loading=!1),0===this.next_index&&(this.next_index++,this.next_btn_text="Pay"),2===this.next_index&&$("#exampleModal").modal("hide")},a}(),r=e(q.prototype,"workshops",[m],{enumerable:!0,initializer:null}),s=e(q.prototype,"specials",[n],{enumerable:!0,initializer:null}),t=e(q.prototype,"events",[o],{enumerable:!0,initializer:null}),p=q))||p)),a("S04M",u)}}}),function(){var a=System.amdDefine;a("modals/loading.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div class="container h-100 w-100" style="opacity: 0.8; background-color: white; position: absolute; top: 0; bottom: 0; left: 0; right: 0; pointer-events: none;"><div class="row"><div class="col-12 text-center" style="margin-top: 170px;"><i class="fa fa-spinner fa-spin" style="font-size:60px"></i></div></div></div></template>'})}(),function(){var a=System.amdDefine;a("pages/P01.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P01" class="container-fluid first-route-element-top"><div class="row"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><img class="img-fluid" src="images/logo.png" alt="Expressive Art Dance"></div></div><div class="row" style="margin-top:100px;"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1 pt-2 pb-2 pl-2 pr-2"><p class="mt-3">Expressive Art Dance offers you an opportunity to express, explore and connect to yourself in a creative and artistic way through expressive dance, art and journaling.</p></div></div></div><div class="row mt-3 mb-5"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/about" class="btn btn-block nav-link">About</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/location" class="btn btn-block nav-link">Location</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/bookings" class="btn btn-block nav-link">Workshop dates</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1"><a href="#/faq" class="btn btn-block nav-link">FAQ</a></div></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P01.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P01",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P01",i)}}}),function(){var a=System.amdDefine;a("pages/P02.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P02" class="container-fluid first-route-element-top"><div class="row mb-3"><div class="col-12 text-center pl-0 pr-0"><h2 class="page-title" style="color:white;">Expressive Art Dance</h2></div></div><div class="row"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1 pt-2 pb-2 pl-2 pr-2"><p class="mt-3">Through a series of one hour workshops, Victoria will guide you in exploring your Self through expressive dancing, art and journaling. Focusing on topics like Self Discovery, Self Acceptance, Self Love, and Self Empowerment.</p><p>These four workshops are designed as a journey, and are highly recommended as a series. However, there is also the possibility to sign up for only one.</p><div class="circle mx-auto"></div><p class="lead mt-4 mb-1">Self Discovery:</p><p>Self Discovery is not a one-stop destination to reach. It is a path of unfolding who you really are. You peel off the layers to reveal the hidden essence of who you are. This workshop offers you an opportunity to start or deepen your Self Discovery. Exploring your inner values, core beliefs and visions, through expressive dancing, art and journaling.</p><p class="lead mt-4 mb-1">Self Acceptance:</p><p>Accepting who you are and not who you think you are supposed to be. Accepting your good qualities and your bad ones. Self acceptance does not happen over night but fortunately, it is something you can nurture. This workshop offers you an opportunity to celebrate your strengths and practice self-worth.</p><p class="lead mt-4 mb-1">Self Love:</p><p>You don\'t have to learn how to love yourself, you just need to remember. An Expressive Art Dance workshop inspired by all things Love and nurturing.</p><p class="lead mt-4 mb-1">Self Empowerment:</p><p>"Being Self empowered means that in times when your intuition pulls you in a direction that is not supported by others, you are gentle enough with yourself that you keep believing that you are worthy of your unique path. You are sure of what you are doing, no matter how crazy or emotional. You keep believing in you." -Alize Jireh. This workshop offers you the opportunity to practice stepping out of your comfort zone, believing in yourself, and taking a closer look at what you choose in Life.</p></div></div></div><div class="row mt-3 mb-5"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/location" class="btn btn-block nav-link">Location</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/bookings" class="btn btn-block nav-link">Workshop dates</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1"><a href="#/faq" class="btn btn-block nav-link">FAQ</a></div></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P02.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P02",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P02",i)}}}),function(){var a=System.amdDefine;a("pages/P03.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P03" class="container-fluid first-route-element-top"><div class="row mb-3"><div class="offset-1 col-10 text-center pl-0 pr-0"><h2 class="page-title" style="color:white;">Expressive Art Dance</h2></div></div><div class="row"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1"><img class="img-fluid greyscale" src="http://maps.google.com/maps/api/staticmap?center=53.3393290,-6.2664558&zoom=16&size=600x400&maptype=roadmap&sensor=false&language=&markers=color:red|label:none|53.3393290,-6.2664558" title="Expressive Art Dance Location Map" alt="Expressive Art Dance Location Map" style="border:1px solid #CECECE;"></div></div></div><div class="row mt-3"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1 pt-1 pb-1"><a href="https://goo.gl/maps/6dccERJUg3n"><p class="mt-3">YMCA DUBLIN<br>Dance Studio<br>53 Aungier Street<br>Dublin 2</p></a></div></div></div><div class="row mt-3 mb-5"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/about" class="btn btn-block nav-link">About</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/bookings" class="btn btn-block nav-link">Workshop dates</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1"><a href="#/faq" class="btn btn-block nav-link">FAQ</a></div></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P03.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P03",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P03",i)}}}),function(){var a=System.amdDefine;a("pages/P04.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P04" class="container-fluid first-route-element-top"><div class="row mb-3"><div class="offset-1 col-10 text-center pl-0 pr-0"><h2 class="page-title" style="color:white;">Workshop Dates</h2></div></div><div class="row"><div class="col-12 col-sm-6 ${$index % 2 === 1 ? \'\' : \'offset-md-2 offset-xl-3\'} col-md-4 col-xl-3 mb-3" repeat.for="ws of workshops" click.trigger="show_info(ws.id)"><div class="custom-bg-1 text-center pt-1 pb-1 pointer"><p class="mt-2 mb-1 text-capitalize lead">${ws.heading}</p><p class="mt-2 mb-1 text-capitalize">${ws.day.substring(0,3)} ${ws.date}</p><p class="mb-0 small">${ws.time.start} - ${ws.time.end}</p><p class="mb-0 small">***</p><p class="font-weight-light small mb-1" if.bind="!ws.sold_out">Book here</p><p class="font-weight-light small mb-1" if.bind="ws.sold_out">Sold out</p></div></div></div><div class="row mt-1"><div class="offset-3 col-6 offset-xl-4 col-xl-4" style="border-bottom: 1px solid white;"></div></div><div class="row mt-4"><div class="col-12 offset-md-2 col-md-8 offset-xl-3 col-xl-6 text-center" click.trigger="show_info(special.id)" repeat.for="special of specials"><div class="custom-bg-1 pt-2 pb-2 ${ws.sold_out ? \'sold-out-text\' : \'\'} pointer"><p class="mt-2 mb-1 lead text-capitalize">All four workshops</p><p class="mb-0 small">12:00 - 13:00</p><p class="mb-0 small">***</p><p class="font-weight-light small mb-1" if.bind="!ws.sold_out">Book here</p><p class="font-weight-light small mb-1" if.bind="ws.sold_out">Sold out</p></div></div></div><require from="../modals/S04M"></require><s04-m events.bind="events" workshops.bind="workshops" specials.bind="specials"></s04-m><require from="../components/footer.html"></require><footer class="mb-5"></footer></div></template>'})}(),System.register("services/fetch-service.js",["aurelia-fetch-client"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f;return{setters:[function(a){d=a.HttpClient,e=a.json}],execute:function(){a("default",f=function(){function a(){c(this,a),this.http=new d,this.http.configure(function(a){a.withBaseUrl("https://api.expressiveartdance.com/").withDefaults({credentials:"same-origin",headers:{Accept:"application/json","X-Requested-With":"Fetch"}})})}return a.prototype.getEvents=function(){return this.http.fetch("events",{method:"get"}).then(function(a){return a.json()}).then(function(a){return a||[]}).catch(function(a){console.log(a)})},a.prototype.payment=function(a,b){return this.http.fetch("payment",{method:"post",body:e({info:a,token:b})}).then(function(a){return a.json()})},a.prototype.addInfo=function(a){return this.http.fetch("info",{method:"post",body:e({info:a})}).then(function(a){return a.json()})},a}()),a("default",f)}}}),System.register("pages/P04.js",["aurelia-framework","aurelia-event-aggregator","../services/fetch-service.js","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default},function(a){g=a.default}],execute:function(){a("P04",(h=d(e,f),j=h(i=function(){function a(b,d){c(this,a),this.EA=b,this.FS=d,this.events=[],this.workshops=[],this.specials=[]}return a.prototype.activate=function(a,b){var c=this;return this.EA.publish("change_active_title",b.title),this.FS.getEvents().then(function(a){c.events=a;for(var b=c.events,d=Array.isArray(b),e=0,b=d?b:b[Symbol.iterator]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{if(e=b.next(),e.done)break;f=e.value}var g=f;g.checked=!1}c.workshops=c.events.filter(function(a){return"workshop"===a.type}),c.specials=c.events.filter(function(a){return"special"===a.type})})},a.prototype.attached=function(){this.modal=g("#exampleModal")},a.prototype.show_info=function(a){var b=this.events.find(function(b){return b.id===a});b&&!b.sold_out?(b.checked=!0,this.modal.modal("show")):console.log("ERROR: Event doesn't exist")},a}())||i)),a("P04",j)}}}),function(){var a=System.amdDefine;a("pages/P05.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P05" class="container-fluid first-route-element-top"><div class="row mb-3"><div class="offset-1 col-10 text-center pl-0 pr-0"><h2 class="page-title" style="color:white;">Expressive Art Dance</h2></div></div><div class="row mb-3" repeat.for="q of questions"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4"><div class="custom-bg-1 pl-2 pr-2 pt-2 pb-1"><a class="link-unstyled" style="display: block;" href="javascript: void(0)" data-toggle="collapse" data-target="#collapseExample${$index}" aria-expanded="true" aria-controls="collapseExample${$index}">${q.q}<div class="collapse" id="collapseExample${$index}"><p class="small mb-0">${q.a}</p></div></a></div></div></div><div class="row"><div class="offset-3 col-6 offset-xl-4 col-xl-4"><div style="border-bottom: 1px solid white;"></div></div></div><div class="row mt-3 mb-5"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/about" class="btn btn-block nav-link">About</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center mb-2"><div class="custom-bg-1"><a href="#/location" class="btn btn-block nav-link">Location</a></div></div><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4 text-center"><div class="custom-bg-1"><a href="#/bookings" class="btn btn-block nav-link">Workshop dates</a></div></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P05.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P05",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b,this.questions=[],this.questions.push({q:"Why should I attend an Expressive Art Dance Workshop?",a:"Expressive Art Dance offers you an opportunity to nurture your relationship with yourself, the most important one you will ever have."}),this.questions.push({q:"Are there any prerequisites?",a:"No."}),this.questions.push({q:"Is there an age range to attend these Workshops?",a:"There is no upper age limit. However, the lower age limit is 16+ years. Workshops for age groups under 16 years of age can be organised on demand."}),this.questions.push({q:"I am unable to attend the workshop. Will my booking fee be refunded to me?",a:"The booking fee, once paid, is non-refundable. However, you can send someone in your place."})}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P05",i)}}}),function(){var a=System.amdDefine;a("pages/P06.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P06" class="container-fluid first-route-element-top"><div class="row mb-3"><div class="offset-1 col-10 text-center pl-0 pr-0"><h2 class="page-title">Expressive Art Dance</h2></div></div><div class="row mb-3"><div class="offset-3 col-6 offset-md-4 col-md-4 offset-xl-5 col-xl-2 text-center"><img src="images/headshot.png" class="img-fluid"></div></div><div class="row"><div class="col-12 offset-md-2 col-md-8 offset-xl-4 col-xl-4"><div class="custom-bg-1 pl-2 pr-2 pb-2 text-center"><p class="pt-2">Hi, I am Victoria and I will be your guide for these Workshops. Self Expression, self acceptance, and self authenticity have always played a big role in my life and after traning with Sofiah Thom at the "Temple BodyArt" school in Costa Rica, I felt inspired to create "Expressive Art Dance".</p><p>Feel free to contact me for collaborations and any workshop related questions using one of the options below.</p><p>I hope to get to dance with you soon!</p><p>Much Love,<br>Victoria</p></div></div></div><div class="row text-center mt-3"><div class="col-12"><a href="${email_href}" class="mr-3"><i class="fa fa-envelope fa-3x" style="color:white;"></i> </a><a href="${insta_href}"><i class="fa fa-instagram fa-3x" style="color:white;"></i></a></div></div><div class="row mt-5 mb-2"><div class="col-12 text-center"><a style="text-decoration: none; color: white; display: block;" class="extra-small" href="https://alizejireh.com/home/">Photos: Alizé Jireh</a> <a style="text-decoration: none; color: white; display: block;" class="extra-small" href="https://ivanbacher.me">Website: Ivan Bacher</a></div></div><require from="../components/footer.html"></require><footer class="mb-5"></footer></div></template>'})}(),System.register("pages/P06.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P06",(g=d(e),i=g(h=function(){function a(b){
c(this,a),this.EA=b,this.email_href="mailto:info@expressiveartdance.com?subject=&body=",this.insta_href="https://www.instagram.com/victoriaueberegger/"}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P06",i)}}});