
// 현재 년도
const CURRENT_YEAR = 2026

// --------------------------------------------------------------------------
// 연습 문제: 제곱 계산기
// --------------------------------------------------------------------------
// 숫자 하나를 입력받아 그 수의 제곱(n * n)을 반환하는 함수를 만드세요.
// 함수 선언으로 작성해보았다!

// 1. 함수 선언 (함수명: square)
function square(number) {
  return number **= 2
}


// 2. 함수 호출 및 결과 확인 (입력값: 12)
// 출력 결과: 144 (number)
let resultSquare = square(12)
console.log(resultSquare)


// --------------------------------------------------------------------------
// 연습 문제: 나이 계산 및 자기소개
// --------------------------------------------------------------------------
// 이름과 태어난 연도를 입력받아, 나이를 계산하고 소개 문구를 반환하는 함수를 만드세요.
// 함수 표현식으로 작성해보았다!

// 1. 함수 선언 (함수명: introduce)
// 매개변수: name, birthYear
const introduce = function(name, birthYear){
  const age = CURRENT_YEAR - birthYear + 1
  return "제 이름은 " + name + "이고, 올해 " + age + "살 입니다. " 
  // 실수한 부분 : 문자열을 반환했어야 하는데 console.log를 반환했음
}

// 출력 결과 (예시): "제 이름은 박한영이고, 올해 26살입니다."
let resultIntro = introduce('박한영', 2001)
console.log(resultIntro)

// --------------------------------------------------------------------------
// 연습 문제: 구매 가능 여부 판독기 (Boolean 반환)
// --------------------------------------------------------------------------
// 가진 돈(budget), 물건 가격(price), 개수(quantity)를 입력받습니다.
// 물건을 살 수 있으면 true, 돈이 부족하면 false를 반환하는 함수를 만드세요.
// 힌트: 비교 연산자의 결과 자체를 반환

// 함수 표현식으로 작성 (변수명: canBuy)
// 매개변수: budget, price, quantity

const canBuy = function(budget, price, quantity){
  result = budget > (price * quantity)
  return result
}

// 화살표 함수 표현식으로 적는다면? 
const can_buy = (money, productPrice, productCount) => {
  bought_result = money > (productPrice * productCount)
  return bought_result 
}

// 구매 가능한 경우 테스트
// 가진 돈: 10,000원, 가격: 3,000원, 개수: 3개
// 출력 결과: true (boolean)
let checkSuccess = canBuy(10000,3000,3)
let checkSuccess2 = can_buy(10000,3000,3)

console.log(checkSuccess + ' (' +typeof(checkSuccess)+')')
console.log(checkSuccess2 + ' (' +typeof(checkSuccess2)+')')
// 구매 불가능한 경우 테스트
// 가진 돈: 5,000원, 가격: 2,000원, 개수: 3개
// 출력 결과: false (boolean)
let checkFail = canBuy(5000,2000,3)
let checkFail2 = can_buy(5000,2000,3)
console.log(checkFail + ' (' +typeof(checkFail)+')')
console.log(checkFail2 + ' (' +typeof(checkFail2)+')')


