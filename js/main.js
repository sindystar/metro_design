const btnMetro = document.querySelectorAll('#metro nav a');
const boxMetro = document.querySelectorAll('#metro section');
const btnFooter = document.querySelector('footer .toggle');

btnMetro.forEach((btn,idx)=> {
  btn.addEventListener('click', (e)=> {
    e.preventDefault();

    for (const el of btnMetro) el.classList.remove ('on');
    btnMetro[idx].classList.add('on');

    for(const el of boxMetro) el. classList.remove('on');
    boxMetro[idx].classList.add('on');

    setTimeout(()=> {  //미세하게 
      for (const el of boxMetro) el.classList.remove('active');
      boxMetro[idx].classList.add('active');
    }, 0); // 0으로 주나 100으로 주나 상관 없슴  (내부적으로 코드가 동기화 됨)  
            //setTimeoutdp에 0을 주면 찰나의 순간 on이 먼저 붙고 active가 실행 
  });
});

//토글 이벤트 

btnFooter.addEventListener('click', e => {
  e.preventDefault();
  e.currentTarget.parentElement.classList.toggle('on');
});

// 이해 안되어도 통으로 외우기!
// 쓰다 보면 이해 된다!
// 동기 비동기 시간에 다시 확인 하기 