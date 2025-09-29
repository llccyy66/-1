window.onload = function() {
    var map = new AMap.Map("wrapper", { // 创建地图实例并初始化地图
        center: [114.5397, 38.0369], // 设置中心点坐标和缩放级别
        zoom: 15,
    });
};
    // 添加标注
    var marker = new AMap.Marker({
        position: [116.397428, 39.90923], // 公司位置的经纬度
        title: "公司名称"
    });
    marker.setMap(map);

    // 启动导航
    var driving = new AMap.Driving({
        map: map,
        panel: "panel" // 用于显示路线信息
    });

    // 假设用户当前位置经纬度为 [userLng, userLat]
    driving.search([userLng, userLat], [116.397428, 39.90923]);
    window.onscroll = function() {
        var scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };
  
    
    

