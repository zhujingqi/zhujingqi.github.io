function getD1() {
	var date = new Date();
	var d1 = date.toLocaleString();
	document.getElementById("datetime").innerHTML = d1;
}
setInterval("getD1();", 1000);

//判断是否为移动设备
function isMobile() {
	const userAgentInfo = navigator.userAgent;
	const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod'];
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
	alert('尊敬的用户，我们检测到当前设备为移动设备，已默认跳转至手机简略版，为了获得更全面的体验并访问完整内容，我们建议您通过个人计算机的网络浏览器访问本网站，感谢您的理解与配合。');
	window.location.href = 'https://www.zhujingqi.com/phone.html';
}

//dark-mode
document.addEventListener('DOMContentLoaded', function() {
	var switchButton = document.getElementById('switch-style');
	var a = document.getElementById('maincss');
	var b = document.getElementById('barcss');
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
