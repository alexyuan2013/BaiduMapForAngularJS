var demo = angular.module('demo', ['baiduMap']);

demo.controller('demoCtrl', ['$scope', '$timeout',
    function($scope, $timeout) {

        var longitude = 121.506191;
        var latitude = 31.245554;
		
		//自定义控件
		var typeStyle = document.createElement("style");
		var value1 = document.createTextNode("div#frame {cursor:pointer; background-color:white; width:50px; height:50px; border-radius:5px; opacity:0.9}");
		var value2 = document.createTextNode("#image {width:30px; height:30px; margin:0 auto; padding:2px}");
		var value3 = document.createTextNode("div#text {height:20px; color:#7a7e83; font-family:Microsoft YaHei; font-size:12px; text-align:center;}");
		typeStyle.appendChild(value1);
		typeStyle.appendChild(value2);
		typeStyle.appendChild(value3);
		document.body.appendChild(typeStyle);

		var homeLogo = document.createElement("img");
		var homeText = document.createElement("div");	

		function HomeControl() {
		// 默认停靠位置和偏移量
		this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
		this.defaultOffset = new BMap.Size(5, 40); // 距离左上角位置
		}
		HomeControl.prototype = new BMap.Control();
		HomeControl.prototype.initialize = function (map) {

		var mainDiv = document.createElement("div");
		mainDiv.id = "frame";

		var imgDiv = document.createElement("div");
		imgDiv.id = "image";

		homeLogo.id = "image";
		homeLogo.src = "img/home.png";
		imgDiv.appendChild(homeLogo);

		homeText.id = "text";
		var desc = document.createTextNode('本部');
		homeText.appendChild(desc);

		mainDiv.appendChild(imgDiv);
		mainDiv.appendChild(homeText);
		// 绑定事件
		mainDiv.onclick = function (e) {
		  map.centerAndZoom(new BMap.Point(118.767264, 32.061369), 17);
		}
		// 添加DOM元素到地图中
		map.getContainer().appendChild(mainDiv);
		// 将DOM元素返回
		return mainDiv;
		};
			
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            city: 'ShangHai',
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'img/mappiont.png',
                width: 49,
                height: 60,
                title: 'Where',
                content: 'Put description here'
            }],
			myControls:[]
        };
		
		$scope.mapOptions.myControls.push(new HomeControl());

        $timeout(function() {
            $scope.mapOptions.center.longitude = 121.500885;
            $scope.mapOptions.center.latitude = 31.190032;
            $scope.mapOptions.markers[0].longitude = 121.500885;
            $scope.mapOptions.markers[0].latitude = 31.190032;
        }, 5000);
    }
]);