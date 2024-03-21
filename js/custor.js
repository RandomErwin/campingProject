function showNav() {
    console.log(link.className);
    if (link.className == 'bugernav') {
        link.className = 'bugernavShow';
    }else{
        link.className = 'bugernav';
    }
}
bugerBtn.addEventListener('click', showNav);

// 隨著網頁滑動顯示
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));