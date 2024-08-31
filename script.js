function  getD1(){
	var date=new Date();
	var d1=date.toLocaleString();
  document.getElementById("datetime").innerHTML =d1; 
}
setInterval("getD1();",1000);
		
		//判断是否为移动设备
		function isMobile() {
		  const userAgentInfo = navigator.userAgent;
		  const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
		  let mobileFlag = false;
		  for (let i = 0; i < mobileAgents.length; i++) {
		    if (userAgentInfo.indexOf(mobileAgents[i]) > 0) {
		      mobileFlag = true;
		      break;
		    }
		  }
		  return mobileFlag;
		}
		if (isMobile()) {
			alert('当前设备为移动设备,建议用电脑访问!!!');
		}
		
		//dark-mode
		document.addEventListener('DOMContentLoaded', function() {
		  var switchButton = document.getElementById('switch-style');
		  var a= document.getElementById('maincss');
		  var b= document.getElementById('barcss');
		  var dark = document.getElementById('darkcss');
		
		  switchButton.addEventListener('click', function() {
		    if (a.disabled) {
		      // 如果默认样式表已禁用，则启用它并禁用备选样式表
		      a.disabled = false;
			  b.disabled = false;
		      dark.disabled = true;
		    } else {
		      // 如果默认样式表未禁用，则禁用它并启用备选样式表
		      a.disabled = true;
			  b.disabled = true;
		      dark.disabled = false;
		    }
		  });
		});
