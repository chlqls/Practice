var Links = { //객체
  setColor: function(color) { //setColor -> method
    // var alist = document.querySelectorAll('a');  // querySelectorAll -> a 태그에 해당되는 모든 요소 (노드리스트) -> 반복문 사용
    // var i = 0;
    // while(i < alist.length) { //반복문
    //   alist[i].style.color = color; //배열
    //   i = i + 1;
    // }
    $('a').css('color', color); // $ -> 이 웹페이지에 있는 모든 a 태그를 jQuery로 제어하겠다.
  }
}

var Body = {
  setColor: function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) { //함수 self, this 더 알아보기
  var target = document.querySelector('body');
  if(self.value === 'night') { //조건문
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('black');
  }
}
