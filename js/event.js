let arr = [
  [['image/home0/0-0.jpg','3 244 600','','6*8','1'],
   ['image/home0/0-1.jpg','6 127 750','','1x4','2'],
   ['image/home0/0-2.jpg','3 601 000','','7x9','1'],
  ],

   [
   ['image/home0/0-3.jpg','3 886 000','','7,5x5','3'],
   ['image/home0/0-4.jpg','4 536 000','','8x10','1'],
   ['image/home0/0-5.jpg','9 390 000','','','2']
  ],

   [
   ['image/home0/0-6.jpg','3 337 000','','6x9','1'],
   ['image/home0/0-7.jpg','4 233 500','','8x8','1'],
   ['image/home0/0-8.jpg','9 827 250','','9x10','2']],

   [
   ['image/home0/0-9.jpg','5 910 000','','8x13','1'],
   ['image/home0/0-10.jpg','0 000 000','','6х8','1'],
  ['image/home0/0-11.jpg','0 000 000','','ххх','х']],

   [['image/home0/0-12.jpg','0 000 000','','ххх','х'],
   ['image/home0/0-13.jpg','0 000 000','','7х7','2'],
   ['image/home0/0-14.jpg','0 000 000','','7х7','1']],

   [['image/home0/0-15.jpg','0 000 000','','ххх','2'],
   ['image/home0/0-16.jpg','0 000 000','','ххх','2'],
   ['image/home0/0-17.jpg','0 000 000','','7х6','2']],

   [['../image/home0/0-0.jpg','3 244 600','','6*8','1'],
   ['../image/home0/0-1.jpg','6 127 750','','1x4','2'],
   ['../image/home0/0-2.jpg','3 601 000','','7x9','1'],
   ['../image/home0/0-3.jpg','3 886 000','','7,5x5','3'],
   ['../image/home0/0-4.jpg','4 536 000','','8x10','1'],
   ['../image/home0/0-5.jpg','9 390 000','','','2'],
   ['../image/home0/0-6.jpg','3 337 000','','6x9','1'],
   ['../image/home0/0-7.jpg','4 233 500','','8x8','1'],
   ['../image/home0/0-8.jpg','9 827 250','','9x10','2'],
   ['../image/home0/0-9.jpg','5 910 000','','8x13','1']],

   [['../image/home0/0-0.jpg','3 244 600','','6*8','1'],
   ['../image/home0/0-1.jpg','6 127 750','','1x4','2'],
   ['../image/home0/0-2.jpg','3 601 000','','7x9','1'],
   ['../image/home0/0-3.jpg','3 886 000','','7,5x5','3'],
   ['../image/home0/0-4.jpg','4 536 000','','8x10','1'],
   ['../image/home0/0-5.jpg','9 390 000','','','2'],
   ['../image/home0/0-6.jpg','3 337 000','','6x9','1'],
   ['../image/home0/0-7.jpg','4 233 500','','8x8','1'],
   ['../image/home0/0-8.jpg','9 827 250','','9x10','2'],
   ['../image/home0/0-9.jpg','5 910 000','','8x13','1']],

   [['../image/home0/0-0.jpg','3 244 600','','6*8','1'],
   ['../image/home0/0-1.jpg','6 127 750','','1x4','2'],
   ['../image/home0/0-2.jpg','3 601 000','','7x9','1'],
   ['../image/home0/0-3.jpg','3 886 000','','7,5x5','3'],
   ['../image/home0/0-4.jpg','4 536 000','','8x10','1'],
   ['../image/home0/0-5.jpg','9 390 000','','','2'],
   ['../image/home0/0-6.jpg','3 337 000','','6x9','1'],
   ['../image/home0/0-7.jpg','4 233 500','','8x8','1'],
   ['../image/home0/0-8.jpg','9 827 250','','9x10','2'],
   ['../image/home0/0-9.jpg','5 910 000','','8x13','1']],

   [['../image/home0/0-0.jpg','3 244 600','','6*8','1'],
   ['../image/home0/0-1.jpg','6 127 750','','1x4','2'],
   ['../image/home0/0-2.jpg','3 601 000','','7x9','1'],
   ['../image/home0/0-3.jpg','3 886 000','','7,5x5','3'],
   ['../image/home0/0-4.jpg','4 536 000','','8x10','1'],
   ['../image/home0/0-5.jpg','9 390 000','','','2'],
   ['../image/home0/0-6.jpg','3 337 000','','6x9','1'],
   ['../image/home0/0-7.jpg','4 233 500','','8x8','1'],
   ['../image/home0/0-8.jpg','9 827 250','','9x10','2'],
   ['../image/home0/0-9.jpg','5 910 000','','8x13','1']],

   [['../image/home0/0-0.jpg','3 244 600','','6*8','1'],
   ['../image/home0/0-1.jpg','6 127 750','','1x4','2'],
   ['../image/home0/0-2.jpg','3 601 000','','7x9','1'],
   ['../image/home0/0-3.jpg','3 886 000','','7,5x5','3'],
   ['../image/home0/0-4.jpg','4 536 000','','8x10','1'],
   ['../image/home0/0-5.jpg','9 390 000','','','2'],
   ['../image/home0/0-6.jpg','3 337 000','','6x9','1'],
   ['../image/home0/0-7.jpg','4 233 500','','8x8','1'],
   ['../image/home0/0-8.jpg','9 827 250','','9x10','2'],
   ['../image/home0/0-9.jpg','5 910 000','','8x13','1']],
]
let index = 0;
let flagIndex = 0;
function sliderNext(elem) {
  let parent = getParent(elem,'#slide');
  let indexarr = parent.getAttribute('value');
  if(flagIndex != indexarr) {
    index = 0;
  }
if(index == arr[indexarr].length){
  return 0;
}

  let Image = parent.getElementsByTagName("img")[0];
  let price = parent.querySelector('.slider__slide-info-price');
  let name =  parent.querySelector('.slider__slide-info-name');
  let size = parent.querySelector('.slider__slide-info-property-size span');
  let floor = parent.querySelector('.slider__slide-info-property-floor span');
  Image.src = arr[indexarr][index][0];
  price.innerHTML =  arr[indexarr][index][1];
  name.innerHTML =  arr[indexarr][index][2];
  size.innerHTML =  arr[indexarr][index][3];
  floor.innerHTML =  arr[indexarr][index][4];

index++
  flagIndex = indexarr;
}
function sliderPrev(elem) {
let parent = getParent(elem,'#slide');
let indexarr = parent.getAttribute('value');
if(flagIndex != indexarr) {
  index = 0;
}
if(index != 0 ){
  index--;
}
let Image = parent.getElementsByTagName("img")[0];
let price = parent.querySelector('.slider__slide-info-price');
let name =  parent.querySelector('.slider__slide-info-name');
let size = parent.querySelector('.slider__slide-info-property-size span');
let floor = parent.querySelector('.slider__slide-info-property-floor span');
Image.src = arr[indexarr][index][0];
price.innerHTML =  arr[indexarr][index][1];
name.innerHTML =  arr[indexarr][index][2];
size.innerHTML =  arr[indexarr][index][3];
floor.innerHTML =  arr[indexarr][index][4];

flagIndex = indexarr;
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
let SwiperHeader = document.querySelectorAll(".slider__wrapper-header");
 let headerMain = document.querySelector(".header");
 let headerBody = document.querySelector(".header__body");
 let headerfooter = document.querySelector(".header__footer");
 if(SwiperHeader[0].style.display == "none"){
  headerMain.style.backgroundImage="none";
  headerBody.style.display = "none";
  headerfooter.style.display = "none";
  for (let index = 0; index < SwiperHeader.length; index++) {
  
  SwiperHeader[index].style.display = "flex";
  
}

 }else{
  headerMain.classList.toggle('_img');
 headerBody.style.display = "block";
 headerfooter.style.display = "flex";
for (let index = 0; index < SwiperHeader.length; index++) {
 
 SwiperHeader[index].style.display = "none";
  
}

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
function slider_image(cont){
  let MainImage = getParent(cont, '#sliderUp').getElementsByTagName('img')[0];
  let n = '';
  n = MainImage.src;
  MainImage.src = cont.src;
  cont.src = n;

}
