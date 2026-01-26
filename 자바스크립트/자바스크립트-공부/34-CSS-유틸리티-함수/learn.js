// --------------------------------------------------------------------------
// 실습: 스타일 제어 유틸리티 함수 작성 (Utilities)
// --------------------------------------------------------------------------

// [실습] getStyle() 함수
// 1. 요소(element)와 CSS 속성 이름(propertyName)을 인자로 받습니다.
// 2. getComputedStyle()을 사용하여 요소의 계산된 스타일 값을 반환하는 로직을 작성하세요.
console.group('getStyle() 함수 작성')

/* 추상화된 기능 구현 */

// 첫 번째 버전
// function getStyleV1(element, propertyName) {
//   const elementStyleSnapshot = getComputedStyle(element)
//   const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
//   return propertyVaue
// }

// 두 번째 버전
// function getStyleV2(element, propertyName) {
//   if (element === null || element.nodeType !== document.ELEMENT_NODE) {
//     console.warn('전달된 element는 문서의 요소가 아닙니다. 확인해보세요.')
//     return null
//   }
  
//   const elementStyleSnapshot = getComputedStyle(element)

//   if (typeof propertyName !== 'string') {
//     console.warn('전달된 propertyName은 CSS 속성명을 문자열로 전달해야 합니다.')
//     return null
//   }

//   const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
//   return propertyVaue
// }


function getStyle(element, propertyName) {
  // 방어적 프로그래밍
  // 조건: element가 문서의 요소가 맞는가?
  // 틀리다면 아무 것도 없음을 명시적으로 반환
  //        경고 메시지를 콘솔 패널에 출력
  if (element === null || element.nodeType !== document.ELEMENT_NODE) {
    console.warn('전달된 element는 문서의 요소가 아닙니다. 확인해보세요.')
    return null
  }
  
  // 맞다면 프로그램 계속 실행
  const elementStyleSnapshot = getComputedStyle(element)

  // 방어적 프로그래밍
  // 전달된 propertyName의 타입이 문자열이 아니라면?
  // 아무 것도 없음을 명시적으로 반환
  // 경고 메시지를 콘솔 패널에 출력
  if (typeof propertyName !== 'string') {
    console.warn('전달된 propertyName은 CSS 속성명을 문자열로 전달해야 합니다.')
    return null
  }

  const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
  return propertyVaue
}

const strongElement = document.querySelector('.prose p:first-of-type strong')
// const strongElement = document.querySelector('.unknown strong')

console.log( getStyle(strongElement, 21234) )
// console.log( getStyle(strongElement, 'font-weight') )
// console.log( getStyle(strongElement, 'font-size') )
// console.log( getStyle(strongElement, 'color') )
// console.log( getStyle(strongElement, 'letter-spacing') )
// console.log( getStyle(strongElement, 'word-spacing') )


console.groupEnd()


// [실습] setStyle() 함수
// 1. 요소, 속성 이름, 스타일 값을 인자로 받습니다.
// 2. 요소의 style 속성을 사용해 값을 설정하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('setStyle() 함수 작성')

// 이곳에 코드를 작성하세요.

console.groupEnd()


// [실습] removeStyle() 함수
// 1. 요소, 속성 이름 값을 인자로 받습니다.
// 2. 요소의 style.removeProperty 메서드를 활용하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('removeStyle() 함수 작성')

// 이곳에 코드를 작성하세요.

console.groupEnd()


// [실습] css() 함수
// 1. 위에서 작성한 getStyle과 setStyle을 내부에서 활용하세요.
// 2. propertyValue가 있으면 '설정(set)'하고, 없으면 '읽기(get)'를 수행하도록 조건문을 작성하세요.
// 3. (심화) propertyName이 객체({})인 경우, 재귀 호출을 통해 여러 스타일을 한 번에 적용하세요.
console.groupCollapsed('css() 함수 작성')

// 이곳에 코드를 작성하세요.

console.groupEnd()


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. getStyle (읽기): 브라우저가 계산한 최종 스타일 값을 가져옵니다. (getComputedStyle)
// 2. setStyle (쓰기): 인라인 스타일을 적용하고, 연속 작업을 위해 요소를 다시 반환합니다. (체이닝)
// 3. removeStyle (삭제): 적용된 인라인 스타일을 깔끔하게 지워 초기화합니다.
// 4. css (유용): 상황에 따라 눈치껏 행동하는 통합 함수입니다. (다형성)
//    - 객체를 주면? -> 여러 스타일을 한 번에 싹 바꿈 (재귀)
//    - 값을 안 주면? -> 스타일 값을 물어봄 (읽기)
//    - 값을 주면? -> 스타일을 적용함 (쓰기)
//    - null을 주면? -> 스타일을 지움 (삭제)
// --------------------------------------------------------------------------