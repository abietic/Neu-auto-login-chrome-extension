setTimeout(function () {

    var username = document.getElementById('un'); 
    username.focus(); 
    username.value = ""; // 填入自己在东北大学的学号
    var password = document.getElementById('pd'); 
    password.focus(); password.value = ""; // 填入统一身份认证时的密码
    var submitStatic = document.getElementById("index_login_btn"); // 提交表单
    submitStatic.focus(); 
    submitStatic.click();



}, 3000);