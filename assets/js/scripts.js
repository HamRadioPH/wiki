!function(e){"use strict";e(".articlesx").length>0&&e.ajax({url:"/medium.json",type:"GET",crossDomain:!0,dataType:"json",success:function(t){if(t.success=!0){var n=e(".articles"),a=n.data("show"),i=n.data("excerpt"),d=n.data("tags"),o=n.data("pagination"),r=1;e.each(t.payload.references.Post,function(t,s){var c=e("#article-"+r);if(c.length>0){n.removeClass("preloading");var l="https://cdn-images-1.medium.com/fit/300/200/"+s.virtuals.previewImage.imageId;if(c.attr("href","/articles/"+s.slug+"?refid=home"),c.find(".card-img-top").empty().hide().append('<img src="'+l+'" alt="'+s.title+'" title="'+s.title+'" />').fadeIn(900),c.find(".card-title").empty().hide().html(s.title).fadeIn(1e3),1==i&&(c.find(".excerpt").remove(),c.find(".card-body").hide().append("<p>"+s.content.subtitle+"</p>").fadeIn(1e3)),1==d){var p=[];e.each(s.virtuals.tags,function(e,t){p.unshift(t.name)});var f=p.join(" / ");c.find(".card-tags").empty().hide().append("<p>"+f+"</p>").fadeIn(1e3)}if(++r==a+1)return 0==o&&n.hide().append('<div class="col-md-12 text-center mb-5"><a href="/articles" class="btn btn-primary">Read More</a></div>').fadeIn(1e3),!1}})}},error:function(e,t){console.log(e)}});var t=function(){e("nav").offset().top>100?e("body").addClass("scrolled"):e("body").removeClass("scrolled")};t(),e(window).scroll(t),window.onscroll=function(){if(document.getElementById("comments").getBoundingClientRect().top<window.innerHeight){var e=document.createElement("script");e.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=822714894740746&version=v3.2&autoLogAppEvents=1",document.body.appendChild(e),window.onscroll=null}}}(jQuery);