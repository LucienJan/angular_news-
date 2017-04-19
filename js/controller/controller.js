// 控制器模块
;
(function() {
	var controllers = angular.module("newsApp.Controller", [])
	controllers.controller("indexCtrl", ["$scope", function($scope) {
		$scope.auther = "This page is written by LucienJan";
		console.log("ok");
		// 默认的选项
		$scope.item = 0;
		$scope.itemOn = function(item) {
			$scope.item = item;
		}
	}])

		// 推荐
		.controller("recommendCtrl", ["$scope", function($scope) {
			$scope.title = "推荐页面";
			
		}])

		// 娱乐
		.controller("entertainCtrl", ["$scope", function($scope) {
			$scope.title = "娱乐页面";
		}])

		// 社会
		.controller("societyCtrl", ["$scope", function($scope) {
			$scope.title = "社会页面";
		}])

		// 军事
		.controller("militaryCtrl", ["$scope", function($scope) {
			$scope.title = "军事页面";
		}])

		// 登录页面
		.controller("loginCtrl",["$scope",function($scope){
			$scope.title = "登录页面";
		}])
		
		// 新闻详情页
		.controller("detailCtrl", ["$scope","$http","$location",function($scope,$http,$location) {
			$scope.title = "新闻详情页"
		}])
})()