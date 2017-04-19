//组件和指令模块
;
(function() {
	var directives = angular.module("newsApp.Directives", []);
	//头部组件
	directives.directive("myheader", function() {
		return {
			templateUrl: "directives/myheader.html"
		}
	})
	//底部组件
	directives.directive("myfooter", function() {
		return {
			templateUrl: "directives/myfooter.html"
		}
	})
	//轮播图组件
	directives.directive("myswiper", function() {
		return {
			templateUrl:"directives/myswiper.html",
			link:function(scope,ele,attr){
				
			}
		}
	})
	// 新闻列表组件
	directives.directive("mylist",function(){
		return {
			templateUrl:"directives/mylist.html"
		}
	})
})();