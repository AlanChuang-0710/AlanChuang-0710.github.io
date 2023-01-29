/* header內的bar點擊縮放效果 */
(function () {
    let faBar = document.querySelector(".fa-bar");
    let spans = document.querySelectorAll(".fa-bar span");
    let navBar = document.querySelector(".navbar");
    let navAList = document.querySelectorAll(".navbar a");
    faBar.addEventListener("click", () => {
        spans.forEach((span) => {
            span.classList.toggle("actived");
            if (span.className === "actived") {
                navBar.style.top = "0";
            } else {
                navBar.style.top = -120 + "%";
            }
        })
    })
    navAList.forEach((navA) => {
        navA.addEventListener("click", () => {
            if (spans[0].className === "actived") {
                setTimeout(() => {
                    spans.forEach((span) => {
                        span.classList.remove("actived");
                    })
                    navBar.style.top = -120 + "%";
                }, 100);
            }
        })
    })
})();

/* 滑動到各section 加上slowMoveTop動畫的效果 */
(function () {
    let home = document.querySelector(".home");
    let about = document.querySelector(".about");
    let portfolio = document.querySelector(".portfolio");
    let experienceBoxes = document.querySelectorAll(".experience .box");
    let distance = home.offsetHeight + about.offsetHeight + portfolio.offsetHeight - 300;
    document.addEventListener("scroll", () => {
        let scrollBar = window.scrollY;
        if (scrollBar >= home.offsetHeight / 2) {
            about.classList.add("slowMoveTop");
        }

        if (scrollBar >= distance) {
            experienceBoxes.forEach((box) => {
                box.classList.add("slowMoveTop");
            })
        }
    })
})();

/* 實現hobby圖片懶加載 */
(function () {
    const images = document.querySelectorAll('img[data-src]');

    // 設定在什麼情況下觸發 callback 函式
    const options = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    }

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const src = entry.target.getAttribute("data-src");
            if (!src) return;
            entry.target.src = src;
            observer.unobserve(entry.target);
        })
    };

    let observer = new IntersectionObserver(lazyLoad, options);
    images.forEach(image => observer.observe(image));
})();


/* Hobby區的選擇性顯示圖片的效果 */
(function () {
    let hobbyBtns = document.querySelectorAll(".hobby .controls li");
    let hobbyImages = document.querySelectorAll(".hobby .image-list li");

    hobbyBtns.forEach((hobbyBtn, index) => {
        hobbyBtn.addEventListener("click", () => {
            // 按鈕部分
            hobbyBtns.forEach((hobbyBtn) => {
                hobbyBtn.classList.remove("active");
            })
            hobbyBtn.classList.toggle("active");

            // 圖片部分
            let classList = ["hobby-image", "trekker", "ecology", "cuisine"];
            hobbyImages.forEach((hobbyImage) => {
                hobbyImage.classList.remove("d-none");
                if (!hobbyImage.classList.contains(`${classList[index]}`)) {
                    hobbyImage.classList.add("d-none");
                }
            })
        })
    })
})();




