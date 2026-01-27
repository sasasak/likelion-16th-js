// --------------------------------------------------------------------------
// 실습: 속성 제어 유틸리티 함수 작성 (Utilities)
// --------------------------------------------------------------------------

// [실습] getAttr() 함수
// 1. 요소(element)와 속성 이름(attributeName)을 인자로 받습니다.
// 2. getAttribute()를 사용하여 요소의 속성 값을 반환하는 로직을 작성하세요.


console.groupCollapsed('getAttr() 함수 작성')

// 쌤이 짠 코드 
const prose = document.querySelector('.prose')
const paragraph = prose.querySelector('p')
const strong = paragraph.querySelector('strong')

const paragraphDataAttr = getAttr(paragraph, 'data-has-strong')
console.log(paragraphDataAttr)

const strongTitleAttr = getAttr(strong, 'title')
console.log(strongTitleAttr)

function getAttr(element, attributeName) {
  return element.getAttribute(attributeName)
}

// 내가 짠 코드 
// function getAttr(element, attributeName){
// const returnValue = element.getAttribute(attributeName)
// return returnValue
// }


console.groupEnd()


// [실습] setAttr() 함수
// 1. 요소, 속성 이름, 속성 값을 인자로 받습니다.
// 2. 요소의 setAttribute() 메서드를 사용해 값을 설정하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.group('setAttr() 함수 작성')

// 쌤이 짠 코드 

setAttr(strong, 'id', 'powerful')
setAttr(strong, 'data-id', 'emphasis element')

function setAttr(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue)
}


// 내가 짠 코드 
// function setAttr(element,attributeName,property){
//   const returnValue = element.setAttribute(attributeName,property)
//   return element
// }
console.groupEnd()


// [실습] removeAttr() 함수
// 1. 요소, 속성 이름 값을 인자로 받습니다.
// 2. 요소의 removeAttribute() 메서드를 활용하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.group('setAttr() 함수 작성')

setAttr(strong, 'id', 'powerful')
setAttr(strong, 'data-id', 'emphasis element')

function setAttr(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue)
}

console.groupEnd()
// [실습] attr() 함수
// 1. 위에서 작성한 getAttr, setAttr, removeAttr을 내부에서 활용하세요.
// 2. attributeName이 객체({})인 경우, 재귀 호출을 통해 여러 속성을 한 번에 적용하세요.
// 3. attributeValue가 null이면 '삭제', 값이 있으면 '설정', 없으면 '읽기'를 수행하세요.
console.group('attr() 함수 작성')

// 속성 추가(쓰기)
attr(prose, 'id', 'main-container')
attr(prose, 'data-id', 'main-element')

// 속성 확인(읽기)
const proseId = attr(prose, 'id')
const proseDataId = attr(prose, 'data-id')
console.log(proseId, proseDataId)

// 속성 제거(삭제)
setTimeout(() => {
  // 2.4초 뒤에 제거
  attr(prose, 'id', null)
  attr(prose, 'data-id', null)
  console.log('prose 요소의 id, data-id 속성 모두 삭제')
}, 2400)

function attr(element, attributeName, attributeValue) {
  if (attributeValue === undefined) {
    return getAttr(element, attributeName)
  }

  if (attributeValue === null) {
    return removeAttr(element, attributeName)
  }

  setAttr(element, attributeName, attributeValue)
}

console.groupEnd()

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. getAttr (읽기): HTML 태그에 명시된 속성 값을 문자열로 가져옵니다. (getAttribute)
// 2. setAttr (쓰기): 속성 값을 변경하거나 추가하고, 요소를 반환합니다. (setAttribute)
// 3. removeAttr (삭제): 불필요한 속성을 완전히 제거합니다. (removeAttribute)
// 4. attr (만능): 인자에 따라 읽기/쓰기/삭제를 자동으로 판단합니다. (다형성)
//    - 객체를 주면? -> 여러 속성을 한 번에 설정 (재귀)
//    - 값을 안 주면? -> 속성 값을 읽어옴 (읽기)
//    - 값을 주면? -> 속성을 설정함 (쓰기)
//    - null을 주면? -> 속성을 삭제함 (삭제)
// --------------------------------------------------------------------------
