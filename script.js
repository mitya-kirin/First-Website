anime ({
    targets: '.star1',
    rotate: 360,
    duration: 12000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star2',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star3',
    rotate: 360,
    duration: 13000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star4',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star5',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star6',
    rotate: 360,
    duration: 16000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star7',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star8',
    rotate: 360,
    duration: 12000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star9',
    rotate: 360,
    duration: 11000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star10',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star11',
    rotate: 360,
    duration: 14000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star12',
    rotate: 360,
    duration: 15000,
    easing: 'linear',
    loop: true})
anime ({
    targets: '.star13',
    rotate: 360,
    duration: 19000,
    easing: 'linear',
    loop: true})

    function JS_price(event) {
        let js_p = document.querySelector('.js_price')
        if (button_js_click.innerText == 'JS') {
                event.target.innerText = 'JS hide details';
                js_p.style.display = 'block'
        } else {
            event.target.innerText = 'JS';
            js_p.style.display = 'none'
        }
    }

    let button_js_click = document.querySelector('.b_price1')
    button_js_click.addEventListener('click', JS_price)

    function P_price(event) {
        let p_p = document.querySelector('.p_price')
        if (button_p_click.innerText == 'Python') {
                event.target.innerText = 'Python hide details';
                p_p.style.display = 'block'
        } else {
            event.target.innerText = 'Python';
            p_p.style.display = 'none'
        }
    }

    let button_p_click = document.querySelector('.b_price2')
    button_p_click.addEventListener('click', P_price)

    function Reviewer1(event) {
        let reviewer_text1 = document.querySelector('.Reviewer_text1')
        if (button_reviewer1_click.innerText == 'Reviewer1') {
                event.target.innerText = 'Reviewer1 hide details';
                reviewer_text1.style.display = 'block'
        } else {
            event.target.innerText = 'Reviewer1';
            reviewer_text1.style.display = 'none'
        }
    }

    let button_reviewer1_click = document.querySelector('.b_comment1')
    button_reviewer1_click.addEventListener('click', Reviewer1)

    function Reviewer2(event) {
        let reviewer_text2 = document.querySelector('.Reviewer_text2')
        if (button_reviewer2_click.innerText == 'Reviewer2') {
                event.target.innerText = 'Reviewer2 hide details';
                reviewer_text2.style.display = 'block'
        } else {
            event.target.innerText = 'Reviewer2';
            reviewer_text2.style.display = 'none'
        }
    }

    let button_reviewer2_click = document.querySelector('.b_comment2')
    button_reviewer2_click.addEventListener('click', Reviewer2)

    function Reviewer3(event) {
        let reviewer_text3 = document.querySelector('.Reviewer_text3')
        if (button_reviewer3_click.innerText == 'Reviewer3') {
                event.target.innerText = 'Reviewer3 hide details';
                reviewer_text3.style.display = 'block'
        } else {
            event.target.innerText = 'Reviewer3';
            reviewer_text3.style.display = 'none'
        }
    }

    let button_reviewer3_click = document.querySelector('.b_comment3')
    button_reviewer3_click.addEventListener('click', Reviewer3)

    function P_Work(event) {
        let p_work = document.querySelector('.p_work')
        if (button_p_work_click.innerText == 'Python') {
            event.target.innerText = 'Python hide details';
            p_work.style.display = 'block'
        } else{
            event.target.innerText = 'Python';
            p_work.style.display = 'none'
        }
    }

    let button_p_work_click = document.querySelector('.b_work2')
    button_p_work_click.addEventListener('click', P_Work)

    function JS_Work(event) {
        let js_work = document.querySelector('.js_work')
        if (button_js_work_click.innerText == 'JS') {
            event.target.innerText = 'JS hide details';
            js_work.style.display = 'block'
        } else{
            event.target.innerText = 'JS';
            js_work.style.display = 'none'
        }
    }

    let button_js_work_click = document.querySelector('.b_work1')
    button_js_work_click.addEventListener('click', JS_Work)