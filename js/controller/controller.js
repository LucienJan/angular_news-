// 控制器模块
;
(function() {
	var controllers = angular.module("newsApp.Controller", [])
	controllers.controller("indexCtrl", ["$scope", function($scope) {
		$scope.auther = "This project is written by LucienJan";
		console.log("ok");
		// 默认的选项
		$scope.item = 0;
		$scope.itemOn = function(item) {
			$scope.item = item;
		}
	}])

	// 推荐
	controllers.controller("recommendCtrl", ["$scope","$http","$timeout", function($scope,$http,$timeout) {
		$scope.title = "推荐页面";
		$scope.page = 0;
		$scope.news = [];
		$scope.isLoading = false;
		$scope.loadMore = function(){
			// 点击更多时出现loading
			$scope.isLoading = true;
			$timeout(function(){
				$http({
					url:"js/news.json",
					method:"GET",
					params:{
						channle_id:6,
						page:$scope.page++
					}
				}).then(function(data){
					$scope.isLoading = false;
					$scope.news = $scope.news.concat(data.data.news_list);
				})
			},2000)
		}
		$scope.loadMore();
		
		$scope.searchName = "";
		// 搜索框
		$scope.isShowSearchBar = false;
		$scope.showSearchBar = function(){
			$scope.isShowSearchBar = true;
		}
		
		// 清空搜索框
		$scope.searchClear = function(){
			$scope.searchName = "";
		}
		$scope.resetSearch = function(){
			$scope.searchName = "";
			$scope.isShowSearchBar = false;
		}
		
		// 弹窗
		$scope.isShowPop = false;
		$scope.showPop = function(){
			$scope.isShowPop = true;
		}
	}])

	// 娱乐
	controllers.controller("entertainCtrl", ["$scope", function($scope) {
		$scope.title = "娱乐页面";
	}])

	// 社会
	controllers.controller("societyCtrl", ["$scope", function($scope) {
		$scope.title = "社会页面";
	}])

	// 军事
	controllers.controller("militaryCtrl", ["$scope", function($scope) {
		$scope.title = "军事页面";
	}])

	// 登录页面
	controllers.controller("loginCtrl",["$scope",function($scope){
		$scope.title = "登录页面";
	}])
	
	// 新闻详情页
	controllers.controller("detailCtrl", ["$scope","$http","$location","$state",function($scope,$http,$location,$state) {
		$scope.title = "新闻详情页";
		console.log($location);
		console.log($location.search);
		console.log($state.params);
		$http({
			url:"js/detail.json",
			method:"GET",
			params:{
				id:$state.params.id
			}
		}).then(function(data){
			console.log(data);
			switch($state.params.id){
				case 'iverson': $scope.newData = data.data.news_list[0]; break;
				case 'kobe':    $scope.newData = data.data.news_list[1]; break;
				case 'carter':  $scope.newData = data.data.news_list[2]; break;
				case 'mcgrady': $scope.newData = data.data.news_list[3]; break;
			}
			//$scope.newData = data.data.news_list[0];
		})
	}])
})()