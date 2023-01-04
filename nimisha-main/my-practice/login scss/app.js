var body = document.getElementById('body');

var container = document.createElement('div');

var box = document.createElement('div');

body.appendChild(container);
container.setAttribute('class', 'container');

container.appendChild(box);
box.setAttribute('class', 'box');


box.innerHTML = `
<div class="iner-box">
        <p class="title" size="large">
            Sign Up
        </p>
        <div>
            <input type="text" placeholder="USERNAME" name="username" class="input">
            <br>
            <input type="email" placeholder="E-MAIL" name="email" class="input">
            <br>
            <input type="password" placeholder="PASSWORD" name="password" class="input">
            <br>
            <div size="small" class="condition">
                <input type="radio" required>
                <span color="gray">I agree to all <b color="blue">Tearm & Condisens</b></span>
            </div>
            <br>
            <div class="condition">
                <button class="btn" color="white" size="medium" background="blue">SIGN UP</button>
                <p color="gray">Already Have account? <b color="blue"> Login</b></p>
            </div>
        </div>
        <br>
        <br>
        <div class="online" background="blue">

            <div>
                <p color="white">
                    Sign up with social platforms
                </p>
            </div>
            <div class="row">
                <div class="icon" background="white">
                    <i class="fa-brands fa-facebook-f blue" color="blue" size="medium"></i>
                </div>
                <div class="icon" background="white">
                    <i class="fa-brands fa-twitter blue" color="blue" size="medium"></i>
                </div>
                <div class="icon" background="white">
                    <i class="fa-solid fa-at blue" color="blue" size="medium"></i>
                </div>
                <div class="icon" background="white">
                    <i class="fa-brands fa-linkedin-in blue" color="blue" size="medium"></i>
                </div>
            </div>
        </div>
    </div>

`