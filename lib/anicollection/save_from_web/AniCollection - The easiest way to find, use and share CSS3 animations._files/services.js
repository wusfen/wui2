!function(){function a(){var a={};return a.animateItems=function(a,b){var c=b,d=$(a);$.each(d,function(a,b){$(b).addClass(c),$(b).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(a){$(a.target).removeClass(c)})})},a}angular.module("collection").factory("animateService",a)}(),function(){function a(){function a(a){var b="",c="<!-- uncomment to use AniJS -->",d="<!--"+a.anijsRenderedCode+"-->",e="\n";return b=a.htmlRenderedCode+e+c+e+d}var b={};return b.getPostToPrefillData=function(b){var c={title:b.name+" animation from AniCollection",description:"AniCollection - The easiest way to find, use and share CSS3 animations",html:b.htmlRenderedCode,html_pre_processor:"none",css:b.cssRenderedCode,css_pre_processor:"none",css_starter:"neither",css_prefix_free:!1,js:b.jqueryRenderedCode,js_pre_processor:"none",js_modernizr:!1,js_library:"jquery",html_classes:"",css_external:"http://anicollection.github.io/public/assets/styles/codepen.css",js_external:"http://anijs.github.io/lib/anijs/anijs-min.js"};return c.html=a(b),c=JSON.stringify(c).replace(/"/g,"&quot;").replace(/'/g,"&apos;")},b}angular.module("collection").factory("codepenService",a)}(),function(){function a(){var a={};return a.findModelbyName=function(a,b){var c=_.find(a,function(a){return a.name===b});return c},a.executeFunctionListToAnyModel=function(){},a.getAllModels=function(a){var b,c,d=a.length,e=0,f=[];for(e;d>e;e++){b=a[e].animationList,c=b.length;for(var g=0;c>g;g++)f.push(b[g])}return f},a}angular.module("collection").factory("collectionHelperService",a)}(),function(){function a(a){var b={};return b.getCategories=function(){return a.get("config/data/db_category_list.json")},b.getAdds=function(){return a.get("config/adds/adds.json")},b.getAnimation=function(b,c){return b=b||"bounce",a.get("config/data/"+c+"/db_"+b+".json")},b}angular.module("collection").factory("localAPIRetrieve",["$http",a])}(),function(){function a(){var a={};return a.download=function(a,b){"html"===a&&(a="txt"),window.open("data:text/"+a+";charset=utf-8,"+encodeURIComponent(b))},a}angular.module("collection").factory("downloadService",a)}(),function(){function a(a,b){var c={};return c.getTemplate=function(c,d){var e,f=new $.Deferred,g=b.get(c);return g?(e=Mustache.render(g,d),f.resolve(e)):a.get("public/modules/collection/templates/"+c,{cache:b}).success(function(a){b.put(c,a),g=b.get(c),e=Mustache.render(g,d),f.resolve(e)}),f.promise()},c.cacheTemplates=function(a,b){var d=new $.Deferred,e=[a];return c.getTemplate("cssTemplate.html",{animationList:e,globalOptions:b}).done(function(f){a.cssRenderedCode=f,c.getTemplate("htmlTemplate.html",{animationList:e,globalOptions:b}).done(function(f){a.htmlRenderedCode=f,c.getTemplate("jQueryTemplate.html",{animationList:e,globalOptions:b}).done(function(f){a.jqueryRenderedCode=f,c.getTemplate("aniJSTemplate.html",{animationList:e,globalOptions:b}).done(function(b){a.anijsRenderedCode=b,d.resolve()})})})}),d.promise()},c}angular.module("collection").factory("templateService",["$http","$templateCache",a])}();