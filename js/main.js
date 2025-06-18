// jQuery code Function {datepicker & slick & videoToggle}
{
    $(function () {
        $("#inputCheckIn").datepicker();
        $("#inputCheckOut").datepicker();
        $('.level-slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
        });
        function videoToggle() {
            video = $('.level-video').get(0)
            if (video.paused) {
                video.play();
                $('.video-control-play').hide();
                $('.video-control-pause').show();
            } else {
                video.pause();
                $('.video-control-play').show();
                $('.video-control-pause').hide();
            }
        }
        $('.video-control-play').click(function () {
            videoToggle();
        });

        $('.video-control-pause').click(function () {
            videoToggle();
        })
    });
};


//welcome level Function & auto Writing 
{
    var level = document.getElementById("level");
    var level_text = document.querySelector("#level p");
    let count = 0;
    const autoWriting = () => {
        const welcome = "level website";
        level_text.innerText = welcome.slice(0, count)
        count++
        if (count > welcome.length) {
            clearInterval(clearautoWriting)
        }
    }
    const clearautoWriting = setInterval(autoWriting, 100);
    setInterval(() => {
        level.style.opacity = "0"
        level.style.height = "0"
    }, 2700)
    setInterval(() => {
        level_text.style.display = "none"
    }, 3500);
};


// Drow Products Function
{
    var allProducts = document.getElementById("allProducts");
    product = [
        {
            title: "رحلات الذكاء الاصتناعى",
            disc: "يمكنك الااستفاده من الذكاء الاصطناعى ف مساعدتك على وجود الرحله المناسبه لك والمدينه ايضا ",
            image: "img/img-03.jpg"
        },
        {
            title: "احجز رحلتك اونلاين",
            disc: "يمكنك حجز رحلتك من اى مكان دون الحاجه للذهاب لمكتب الرحلات ويمكنك الحصول على افضل العروض ",
            image: "img/img-04.jpg"
        },
        {
            title: "رحلات للمناطق الطبيعيه ",
            disc: "يوجد رحلات للمناطق الطبيعيه الخلابه مثل جبال اامازون ونهر وغيرها من الاماكن الطبيعبه احجز معنا الان ",
            image: "img/img-05.jpg"
        },
    ];
    function drowProducts() {
        let y = product.map(item => {
            return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.disc}</p>
                    <a href="#" class="btn btn-custom">اعرف المزيد</a>
                </div>
                </div>
            </div>
            `
        })
        allProducts.innerHTML = y.join(" ")
    }
    drowProducts()
};


// scroll backTop Function
{
    var backTop = document.getElementById("backTop");
    window.addEventListener("scroll", () => {
        if (scrollY > 150) {
            backTop.style.display = "block";
            backTop.addEventListener("click", () => {
                scroll({ top: "0" })
            })
        } else {
            backTop.style.display = "none";
        }
    })
};

