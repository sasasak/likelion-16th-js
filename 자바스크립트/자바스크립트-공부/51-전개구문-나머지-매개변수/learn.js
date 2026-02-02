// --------------------------------------------------------------------------
// 실습: 배열 전개 구문 (Array Spread)
// --------------------------------------------------------------------------

// [실습] 배열 합치기와 복사
// 1. 기존 간식 배열 const snacks = ['쿠키', '젤리']를 만드세요.
// 2. 전개 구문을 사용하여 새로운 배열에 '사탕', snacks의 모든 요소, '초콜릿' 순서로 담으세요.
// 3. 얕은 복사가 잘 되었는지 원본 배열과 비교해 보세요.
console.groupCollapsed('배열 전개 구문 실습')

// 배열
const snacks = ['cookie', 'jelly', 'candy']

// 배열 전개 (전개 연산자 ...)
console.log(...snacks)

// ...배열 = 배열 내부 원소들을 펼친 것과 같음
console.log('cookie', 'jelly', 'candy')


// 전개된(펼쳐진) 배열의 요소를 전달받는 함수
function logSnacks(snack1, snack2, snack3) {
  console.log(snack1)
  console.log(snack2)
  console.log(snack3)
}

logSnacks(snacks.at(0), snacks.at(1), snacks.at(-1))
logSnacks(...snacks)

const otherSnacks = ['cracker', 'pocky']

// 배열의 concat() 메서드 vs 전개 구문
{
  // 배열 병합(배열 메서드 활용, Array's concat method)
  const newSnacks = otherSnacks.concat(snacks)
  console.log(newSnacks)
}

{
  // 배열 병합(전개 구문 활용, spread syntax)
  const newSnacks = [...otherSnacks, ...snacks]
  console.log(newSnacks)
}


// 배열 변환
{
  // 유사 배열 객체
  const arrayLikeObject = {
    length: 4,
    0: 'number 1.',
    1: 101,
    2: { type: '유사 배열 객체' },
    3: [
      { id: 'kcisdl', title: '상점' },
      { id: 'ciskde', title: '매점' },
    ],
  }

  console.log(arrayLikeObject[0])
  console.log(arrayLikeObject[1])
  console.log(arrayLikeObject[2])
  console.log(arrayLikeObject[3][1])
  console.log(arrayLikeObject.length)
  console.log(Array.isArray(arrayLikeObject))

  // Array.from()
  const convertedArray = Array.from(arrayLikeObject)
  console.log(Array.isArray(convertedArray))

  // Spread Syntax
  // 이터러블(Iterable): 열거 가능한 (순환 가능한, 반복 가능한)
  // const convertedArrayFromSPread = [...arrayLikeObject]
  // console.log(convertedArrayFromSPread)

}


console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 나머지 매개변수 (Rest Parameters)
// --------------------------------------------------------------------------

// [실습] 무한 인수를 받는 함수 만들기
// 1. 첫 번째 인수는 '연산자(operator)', 그 뒤로는 '숫자들'을 몇 개든 받는 calculate 함수를 만드세요.
// 2. 나머지 매개변수(...numbers)를 사용하여 숫자들을 배열로 관리하세요.
// 3. 전달받은 숫자 배열의 합계를 구해 연산자와 함께 출력해 보세요.
console.groupCollapsed('나머지 매개변수 실습')

// 이곳에 코드를 작성하세요

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 객체 전개 및 나머지 (Object Spread & Rest)
// --------------------------------------------------------------------------

// [실습] 설정 객체 업데이트 및 특정 속성 제외
// 1. const baseConfig = { theme: 'dark', sound: true, volume: 50 } 객체를 만드세요.
// 2. 전개 구문을 사용하여 volume만 80으로 변경한 newConfig 객체를 만드세요.
// 3. 구조 분해 할당과 Rest(...others)를 사용해 theme만 따로 빼고 나머지만 모은 객체를 출력해 보세요.
console.groupCollapsed('객체 전개 및 나머지 실습')

// 이곳에 코드를 작성하세요

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. Spread (펼치기): [...array]나 {...object}를 사용해 기존 요소를 개별로 펼쳐서 복사하거나 병합합니다.
// 2. Rest (모으기): 함수의 마지막 매개변수로 ...args를 사용하여 남은 모든 인수를 하나의 배열로 모읍니다.
// 3. 위치의 차이: Spread는 주로 할당문 우항이나 함수 호출 시 쓰이고, Rest는 함수 정의나 구조 분해 좌항에 쓰입니다.
// 4. 불변성 유지: 전개 구문을 활용하면 원본 데이터를 수정하지 않고 새로운 객체/배열을 만드는 '불변성'을 지키기 쉽습니다.
// --------------------------------------------------------------------------