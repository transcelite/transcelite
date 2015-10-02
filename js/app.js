var myapp = angular.module('myapp', ['ui.router','ngAnimate','ui.bootstrap']);

	myapp.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
		$stateProvider
		.state('home', {
		  url: "/home",
		  templateUrl: "views/home.html",
		  controller: "HelloController"
		})
		.state('products', {
		  url: "/products",
		  templateUrl: "views/products.html",
		  controller: "HelloController"
		})
		.state('products.vegetables', {
		  url: "/products/vegetables",
		  templateUrl: "views/vegetables.html",
		  controller: "HelloController"
		})
		.state('products.fruits', {
		  url: "/products/fruits",
		  templateUrl: "views/fruits.html",
		  controller: "HelloController"
		})
		.state('products.spices', {
		  url: "/products/spices",
		  templateUrl: "views/spices.html",
		  controller: "HelloController"
		})
		.state('products.pulses', {
		  url: "/products/pulses",
		  templateUrl: "views/pulses.html",
		  controller: "HelloController"
		})
		.state('products.cereals', {
		  url: "/products/cereals",
		  templateUrl: "views/cereals.html",
		  controller: "HelloController"
		})
		.state('products.fibrecrops', {
		  url: "/products/fibrecrops",
		  templateUrl: "views/fibrecrops.html",
		  controller: "HelloController"
		})
		.state('about', {
		  url: "/about",
		  templateUrl: "views/about.html",
		  controller: "HelloController"
		})
		.state('contact', {
		  url: "/contact",
		  templateUrl: "views/contact.html",
		  controller: "HelloController"
		});
	});
	
	myapp.controller("HelloController", function($scope) {
		$scope.myInterval = 2000;
		  $scope.noWrapSlides = false;
		  var slides = $scope.slides = [];
		  var captions = ["Logistics","Best quality vegetables and fruits","Dairy products"];
		  $scope.addSlide = function(index) {
			slides.push({
			  image: "img/slides/slide-"+index+".jpg",
			  text: captions[index]
			});
		  };
		  for (var i=0; i<captions.length; i++) {
			$scope.addSlide(i);
		  }
    });
