// --------------------------------------------------------------------------
// 함수 요약
// --------------------------------------------------------------------------
// * 함수 선언(정의)
// * 함수 호출(사용, 실행)
// * 함수 반환(결과 값)
// * 함수 확장(매개변수, 인자)
// * 함수 종료(중단)
// * 함수 표현식: 변수 = 함수(값)
// --------------------------------------------------------------------------

// 함수 정의
// 1. 함수 선언문
function logger(nth, fightingMessage) {
  // 함수 안에 지역변수 선언
  let resultLog = '멋사 프론트엔드 부트캠프'
  const numberNth = parseInt(nth, 10)

  // 특정 상황(조건)이 확인되면 함수를 여기서 종료하겠다.
  // return resultLog + ' ' + numberNth + '기 여러분! 중도 이탈은 안되요!! 💦'
  // 종료 이후엔 코드 실행이 안됨

  // 암묵적으로 undefined 반환
  // return

  // 명시적으로 결과 값 반환
  return resultLog + ' ' + numberNth + '기 ' + fightingMessage
}

// 함수 실행(사용, 호출)
console.log(logger('16기', '여러분 힘내세요! 💪'))
console.log(logger(14, '멋진 개발자되세요! 😊'))
console.log(logger(12, '월급 많이 받으세요~ 🍀'))


// 2. 함수 표현식
// const 변수 = 함수(값)
const myLogger = function(nth, message) {
  let resultMessage = ''
  resultMessage += '멋사 ' + parseInt(nth, 10) + '기 여러분!'
  resultMessage += ' '
  resultMessage += message
  resultMessage += '🥳'

  return resultMessage
}

console.log(myLogger(16, '오늘도 행복하세요!'))

// 표 생성하는 함수(기능)
// JavaScript를 사용해 마크업 (구조 설계)
function 표_만들기(표_제목) {
  // const 표_마크업 = '<table><caption>' + 표_제목 + '</caption><tr><th scope="col">셀 제목 1</th><th scope="col">셀 제목 2</th></tr><tbody><tr><td>셀 내용 1</td><td>셀 내용 2</td></tr></tbody></table>'
  
  let 표_마크업 = ''
  표_마크업 += '<table>'
  표_마크업 += '  <caption>' + 표_제목 + '</caption>'
  표_마크업 += '  <tr>'
  표_마크업 += '    <th scope="col">셀 제목 1</th>'
  표_마크업 += '    <th scope="col">셀 제목 2</th>'
  표_마크업 += '  </tr>'
  표_마크업 += '  <tbody>'
  표_마크업 += '    <tr>'
  표_마크업 += '      <td>셀 내용 1</td>'
  표_마크업 += '      <td>셀 내용 2</td>'
  표_마크업 += '    </tr>'
  표_마크업 += '  </tbody>'
  표_마크업 += '</table>'

  return 표_마크업
}

console.log(표_만들기('JavaScript로 마크업하기!'))
console.log(표_만들기('HTML로 마크업하기!'))

// 컴퓨터 메모리는 이미 sayHello 함수를 기억합니다.
// 마치, 해당 영역의 가장 상위로 함수 선언문을 끌어올린 것처럼 보이죠?
// 그래서 호이스팅(Hoisting)이라고 불러요. (용어 해설)
// function myHouse() {
//   // - 지역 변수 desk 선언 ('책상 위의 노트북')
//   const desk = '책상 위의 노트북'
//   // - 전역 변수 garden, 지역 변수 desk 콘솔에 출력
//   console.log('garden:', garden)
//   console.log('desk:', desk)
// }

// var 변수는 선언과 초기화가 동시 진행 (JS 엔진이 undefined 설정)
// var sayBye 


// --------------------------------------------------------------------------
// 실습: 변수의 범위와 안전 수칙 (Scope & TDZ)
// --------------------------------------------------------------------------
// * 스코프(Scope) : 변수가 어디까지 유효한지 결정하는 범위입니다.
// * 일시적 사각지대(TDZ) : 변수 선언 후, 초기화 전까지 접근 불가능한 구간입니다.
// * 호이스팅(Hoisting) : 선언문이 코드 최상단으로 끌어올려진 것처럼 작동하는 현상입니다.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 스코프 (Scope) - 전역과 지역
// --------------------------------------------------------------------------

// 전역 변수 garden 선언 ('마당의 꽃')
const garden = '마당의 꽃'

// --------------------------------------------------------------------------
// 블록 스코프
// 블록(Block, { ... }) - 지역 생성
{
  // 블록 내부의 범위(scope)에서만 
  // 사용 가능한 지역변수(local variable)
  // let, const 키워드로 정의된 변수 (✅ 외부에서 접근 불가능)
  // 하지만, var 키워드로 정의된 변수는 지역 만들지 않음 (⚠️ 외부에서 접근 가능)
  const blockVariable = '블록 내부의 변수'
  console.log(blockVariable)
}

// console.log(blockVariable)

// --------------------------------------------------------------------------
// 함수 스코프
// 함수 myHouse 선언
function myHouse() {
  // - 지역 변수 desk 선언 ('책상 위의 노트북')
  const desk = '책상 위의 노트북'
  // - 전역 변수 garden, 지역 변수 desk 콘솔에 출력
  console.log('garden:', garden)
  console.log('desk:', desk)
}

myHouse()


// 전역에서 garden, desk 변수 값 콘솔에 출력
// - 함수 내부(지역)에서는 외부(전역) 변수에 접근할 수 있습니다.
// - 외부(전역)에서는 함수 내부(지역) 변수에 접근할 수 없습니다. (ReferenceError)

// garden 출력 결과
console.log(garden)

// desk 출력 결과
// console.log(desk)


// --------------------------------------------------------------------------
// 스코프 체인 (Scope Chain)
// --------------------------------------------------------------------------

// 함수 outer 선언
const outer = function() {
  // - 지역 변수 livingRoom 선언 ('거실의 소파')
  const livingRoom = '거실의 소파'
  
  // - 내부 함수 inner 선언
  const inner = function () {
    //   - 지역 변수 myRoom 선언 ('내 방의 침대')
    const myRoom = '내 방의 침대'
    //   - 전역 변수 garden, 상위 함수 변수 livingRoom, 지역 변수 myRoom 출력
    console.log(garden)
    console.log(livingRoom)
    console.log(myRoom)
  }
  // - 내부 함수 inner 호출
  inner()

  //   - 전역 변수 garden, 상위 함수 변수 livingRoom, 지역 변수 myRoom 출력
  console.log(garden)
  console.log(livingRoom)
  // console.log(myRoom)
}

// 함수 outer 호출
outer()

//   - 전역 변수 garden, 상위 함수 변수 livingRoom, 지역 변수 myRoom 출력
console.log(garden)
// console.log(livingRoom)
// console.log(myRoom)

// 설명: 변수를 찾을 때 현재 범위에 없으면, 점점 더 바깥 범위로 나가며 찾습니다.
// 출력 결과:
// - 전역 변수: '마당의 꽃'
// - outer 함수 내부 지역 변수: '거실의 소파'
// - inner 함수 내부 지역 변수: '내 방의 침대'

// --------------------------------------------------------------------------
// 안전펜스 (TDZ, 일시적 사각지대)
// --------------------------------------------------------------------------

// 변수 선언(생성, 초기화)
// 생성만 한 시점

// var 변수로 정의된 것은 호이스팅(끌어올려는 것처럼 보여요)
// var 변수의 초기화가 없다면? JS 엔진이 undefined로 초기 값을 설정
console.log(notTdz)

// tdz (초기화 이전 상태: <Uninitialized>)
// console.log(tdz)

let tdz // = '✅ let, const 변수는 "안전펜스(TDZ)" 생성'
var notTdz = '⚠️ var 변수는 TDZ를 만들지 않아요.'

console.log(tdz)

// --------------------------------------------------------------------------
// 호이스팅 (Hoisting) - 함수 선언문
// --------------------------------------------------------------------------

// 함수 선언보다 호출을 먼저 작성 (sayHello)
console.log(sayHello())

// sayHello 함수 선언 ('안녕! JavaScript 🌼' 출력)
function sayHello() {
  return '안녕! JavaScript 🌼'
}

// 설명: 함수 선언문은 코드 맨 위로 끌어올려지는 것처럼 보이므로, 
//      선언 전에도 호출이 가능하도록 작동합니다. (왜? 이미 메모리되어 있으므로)
// 출력 결과: '안녕! JavaScript 🌼'


// --------------------------------------------------------------------------
// 호이스팅과 TDZ - var vs let/const
// --------------------------------------------------------------------------

// 1. var의 경우 (위험)
// 변수 선언 전 tempVar 출력
// 변수 tempVar를 var로 선언 및 초기화 ('나는 var')

// 2. let/const의 경우 (안전)
// 변수 선언 전 tempLet 출력 (ReferenceError 발생)
// 변수 tempLet을 let으로 선언 및 초기화 ('나는 let')

// 설명:
// var는 호이스팅 시, undefined로 초기화되어 미리 접근이 가능하도록 작동합니다. (버그 원인)
// let/const는 호이스팅되지만, 초기화 전까지 TDZ(접근 금지 구역)에 갇혀 에러를 발생시킵니다.
// 출력 결과: undefined


// --------------------------------------------------------------------------
// 함수 표현식과 호이스팅
// --------------------------------------------------------------------------

// 함수 표현식 선언 전, sayBye 호출 (ReferenceError 발생)
// console.log(undefined()????) 
// console.log(sayBye())

// const 키워드를 사용해 sayBye 변수에 함수 표현식 할당 ('잘 가! JavaScript 👋' 출력)
// let, const 선언 시, 메모리에 이름만 등록 [TDZ, 안전펜스] 초기화 [TDZ 해제]
// var 선언 시, 메모리에 이름이 등록됨과 동시에 초기화(초기값이 없으면 undefined 설정) 함께 진행
var sayBye = function() {
  return '잘 가! JavaScript 👋'
}

// 함수 표현식 선언 후 sayBye 호출
console.log(sayBye())

// 설명:
// 함수 표현식은 '변수 호이스팅' 규칙을 따릅니다.
// const로 선언되었으므로 TDZ의 영향을 받아, 선언 라인 전에는 사용할 수 없게 작동합니다.
// 출력 결과: '잘 가! JavaScript 👋'


// --------------------------------------------------------------------------
// 핵심!
// --------------------------------------------------------------------------
// 1. 안쪽 스코프에서는 바깥쪽을 볼 수 있지만, 바깥쪽에서는 안쪽을 볼 수 없습니다.
// 2. 호이스팅은 선언을 최상단으로 끌어올린 것처럼 작동하는 현상입니다. (함수 선언문은 즉시 사용 가능)
// 3. let과 const는 TDZ(일시적 사각지대) 덕분에 선언 전에 사용하는 실수를 막아줍니다.