const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('#nav_menu_open');
const menuClose = document.querySelector('.menu_close');
const menuList = document.querySelectorAll('.menu_con > ul > li')

// 반응형 토글 메뉴

toggleBtn.addEventListener('click', ()=>{
    menu.style.height='100%';
});

menuClose.addEventListener('click', ()=>{
    menu.style.height='0';
});

// 반응형 드롭다운 서브메뉴

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", () => {
    menuList[i].classList.toggle("active");
  });
  
  menuList[i].addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
    menuList[i].classList.toggle("active");
    }
  });
};

// 베스트 탭메뉴

window.onload = function(){
  const tabBtn = document.querySelectorAll(".tab_btn > ul > li");
  const tabCont = document.querySelectorAll(".tab_cont .best_md");

  tabCont.forEach(el => el.style.display = "none");
  tabCont[0].style.display = "block";

  tabBtn.forEach((tab, index) => {
      tab.addEventListener("click", () => {
          tabBtn.forEach(tab => tab.classList.remove("active"));
          tab.classList.add("active");

          tabCont.forEach(cont => cont.style.display = "none");
          tabCont[index].style.display = "block";
      });
  });
};