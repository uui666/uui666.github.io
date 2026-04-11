// 用户名校验
function validateUsername() {
    const username = document.getElementById('username').value;
    const errorElement = document.getElementById('username-error');
    
    if (username.length < 3) {
        errorElement.textContent = '用户名长度不能小于3个字符！';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

// 密码校验
function validatePassword() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('password-error');
    
    if (password.length < 6) {
        errorElement.textContent = '密码长度不能小于6个字符！';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

// 确认密码校验
function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorElement = document.getElementById('confirm-password-error');
    
    if (confirmPassword !== password) {
        errorElement.textContent = '两次输入的密码不一致！';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

// 邮箱校验
function validateEmail() {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        errorElement.textContent = '请输入有效的邮箱地址！';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

// 手机号校验
function validatePhone() {
    const phone = document.getElementById('phone').value;
    const errorElement = document.getElementById('phone-error');
    const phoneRegex = /^1[3-9]\d{9}$/;
    
    if (!phoneRegex.test(phone)) {
        errorElement.textContent = '请输入有效的手机号！';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

// 表单提交校验
function validateForm() {
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    
    if (isUsernameValid && isPasswordValid && isConfirmPasswordValid && isEmailValid && isPhoneValid) {
        alert('注册成功！');
        return true;
    } else {
        return false;
    }
}
