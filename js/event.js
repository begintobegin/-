function sliderNext(elem) {
  var image = getParent(elem, '#slide').getElementsByTagName('img');
  console.log(image);
  let temp = image[0].src;
  image[0].src = image[1].src;
  image[1].src = image[2].src;
  image[2].src = image[3].src;
  image[3].src = temp;
}
function sliderPrev(elem) {
  var image = getParent(elem, '#slide').getElementsByTagName('img');
  console.log(image);
  let temp = image[1].src;
  image[1].src = image[0].src;
  image[0].src = image[3].src;
  image[3].src = image[2].src;
  image[2].src = temp;
}
function getParent(elemSelector, parentSelector) {
  var elem = elemSelector;
  var parents = document.querySelectorAll(parentSelector);

  for (var i = 0; i < parents.length; i++) {
    var parent = parents[i];

    if (parent.contains(elem)) {
      return parent;
    }
  }

  return null;
}
function eventclick(elem){
let SwiperHeader = document.querySelector(".slider__wrapper-header");
 let headerMain = document.querySelector(".header");
 let headerBody = document.querySelector(".header__body");
 let headerfooter = document.querySelector(".header__footer");
 if(SwiperHeader.style.display == "none"){
  headerMain.style.backgroundImage="none";
  headerBody.style.display = "none";
  headerfooter.style.display = "none";
  SwiperHeader.style.display = "flex";
 }else{
  headerMain.style.backgroundImage="url('image/image 237.png'";
 headerBody.style.display = "block";
 headerfooter.style.display = "flex";
 SwiperHeader.style.display = "none";
 }


}
let int_num = 0;
let num_span = 1;
let cheackBoxI = 0;
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__ul-nav');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
let bar = document.querySelector('#bar');
function question_next() {
  let num = document.querySelector('.discount__body-question-count span');

  if (int_num < 9) {

    if (window.innerWidth <= 1100) {
      bar.style.width = parseInt(bar.style.width, 10) + 36 + 'px';
    } else {
      bar.style.width = parseInt(bar.style.width, 10) + 66 + 'px';
    }

    num_span++;
    num.innerHTML = num_span;
    int_num++;
    add_question(int_num);
  }
}
window.onload = function () {
  if (window.innerWidth <= 1100) {
    bar.style.width = '36px';
  } else {
    bar.style.width = '66px';
  }

  add_question(0);
};

function question_back() {
  let num = document.querySelector('.discount__body-question-count span');

  if (int_num > 0) {
    if (window.innerWidth <= 1100) {
      bar.style.width = parseInt(bar.style.width, 10) - 36 + 'px';
    } else {
      bar.style.width = parseInt(bar.style.width, 10) - 66 + 'px';
    }
    num_span--;
    num.innerHTML = num_span;
    int_num--;
    add_question(int_num);
  }
}
function add_question(num) {
  let parent = document.querySelector('.discount__body-question-wrapper');
  parent.innerHTML = '';
  let arr = [
    [
      'Когда планируете начать строительство?',
      'В ближайшее время',
      'В этом году',
      'Еще не определились',
    ],
    [
      'Какую этажность дома планируете?',
      'Одноэтажный дом',
      'Двухэтажный дом',
      'Больше двух этажей',
    ],
    [
      'Какой будет фундамент дома?',
      'Железобетонный ленточный',
      'Монолит бетон с утеплением',
      'Фундамент на трубах',
      'Два венца лиственница',
    ],
    ['Планируете строительство в Якутске?', 'Да', 'В другом городе '],
    ['У вас уже есть участок для строительства?', 'Да', 'Нет'],
    ['Нужно ли вам оформить ипотеку?', 'Да', 'Нет'],
    ['Укажите планируемый размер дома', 'Укажите размер дома...'],
    [
      'Укажите район, в котором будет находится ваш дом ',
      'Укажите район строительства...',
    ],
    ['Какую сумму закладываете на строительство?', 'Сумма строительства...'],
    [
      'Укажите район, в котором будет находится ваш дом ',
      'Укажите район строительства...',
    ],
  ];

  for (let j = 0; j < arr[num].length; j++) {
    if (j == 0) {
      let elem = document.querySelector('.discount__body-question-text');
      elem.innerText = arr[num][j];
    } else if (num >= 6) {
      let parent = document.querySelector('.discount__body-question-wrapper');
      let elem = document.createElement('input');
      elem.classList.add('discount__body-question-wrapper-item-input');
      elem.placeholder = arr[num][j];

      parent.appendChild(elem);
    } else {
      let parent = document.querySelector('.discount__body-question-wrapper');
      let elem = document.createElement('div');
      elem.classList.add('discount__body-question-wrapper-item');

      elem.innerHTML = `
        <input type="radio" value = 0 onclick = "unCheack(this)"/>${arr[num][j]}
      `;

      parent.appendChild(elem);
    }
  }
}
function unCheack(cheackBox){

 if (cheackBox.value == 0 ){
  cheackBox.checked = true;
  cheackBox.value = 1
 }else{
  cheackBox.checked = false;
  cheackBox.value = 0
 }

}

document.querySelector('#phone').onkeydown = function(e){
inputphone(e,document.querySelector('#phone'))
}
document.querySelector('#phone2').onkeydown = function(e){
  inputphone(e,document.querySelector('#phone2'))
  }




function inputphone(e, phone){
function stop(evt) {
    evt.preventDefault();
}
let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)

if(not == 1 || 'Backspace' === not){
if('Backspace' != not){ 
    if(v.length < 3 || v ===''){phone.value= '+7('}
    if(v.length === 6){phone.value= v +')'}
    if(v.length === 10){phone.value= v +'-'}
     if(v.length === 13){phone.value= v +'-'}
    }
}else{stop(e)}  }
