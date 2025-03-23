function isMobile() {
	const user = navigator.userAgent;
	const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod'];
	let flag = false;
	for (let i = 0; i < agents.length; i++) {
		if (user.indexOf(agents[i]) > 0) {
			flag = true;
			break;
		}
	}
	return flag;
}
if (isMobile()) {
	alert('尊敬的用户，我们检测到当前设备为移动设备，已默认跳转至手机简略版，为了访问完整内容，我们建议您通过计算机访问，感谢您的理解。');
	window.location.href = '/phone/index.html';
}

document.addEventListener('DOMContentLoaded', function() {
	var switchButton = document.getElementById('switch-style');
	var a = document.getElementById('maincss');
	var b = document.getElementById('barcss');
	var dark = document.getElementById('darkcss');
	switchButton.addEventListener('click', function() {
		if (a.disabled) {
			a.disabled = false;
			b.disabled = false;
			dark.disabled = true;
		} else {
			a.disabled = true;
			b.disabled = true;
			dark.disabled = false;
		}
	});
});
