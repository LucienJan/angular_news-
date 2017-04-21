// 路由模块
;
(function() {
	var routers = angular.module("newsApp.Router", []);
	routers.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		// ========第一层=========
		$stateProvider.state("index", {
				url: "/index",
				templateUrl: "template/index.html",
				controller: "indexCtrl"
			})
			// 登录页面
			.state("login", {
				url: "/login",
				templateUrl: "template/login.html",
				controller: "loginCtrl"
			})
		//=========第二层==========
			// 推荐页面
			.state("index.recommend", {
				url: "/recommend",
				templateUrl: "template/recommend.html",
				controller: "recommendCtrl"
			})
			// 娱乐页面
			.state("index.entertain", {
				url: "/entertain",
				templateUrl: "template/entertain.html",
				controller: "entertainCtrl"
			})
			// 社会页面
			.state("index.society", {
				url: "/society",
				templateUrl: "template/society.html",
				controller: "societyCtrl"
			})
			// 军事页面
			.state("index.military", {
				url: "/military",
				templateUrl: "template/military.html",
				controller: "militaryCtrl"
			})
			// 新闻详情页面
			.state("detail", {
				url: "/detail/:id",
				templateUrl: "template/detail.html",
				controller: "detailCtrl"
			})
		// 默认显示首页
		$urlRouterProvider.when("", "/index")
	}])
})();