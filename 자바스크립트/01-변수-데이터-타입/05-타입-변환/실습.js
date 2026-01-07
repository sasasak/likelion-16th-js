// --------------------------------------------------------------------------
// 실습: 타입 변환
// --------------------------------------------------------------------------
// * 문자 → 숫자(정수) 변환
// * 문자 → 실수(소수) 변환
// * 숫자 → 문자 변환
// * 숫자 → 불리언 변환
// * 문자 → 불리언 변환
// * 숫자가 아님(NaN)
// * NaN 확인
// * Falsy 값 (6가지)
// * 권장 사항
// --------------------------------------------------------------------------


const LAST_YEAR = '2025년', 
      CURRENT_YEAR = '2026', 
      NEXT_YEAR = 2027,
      PI = '3.141592',
      RATING = '9.24점'


// --------------------------------------------------------------------------
// 문자 → 숫자(정수) 변환
// --------------------------------------------------------------------------
// * parseInt(str): 정수 변환 (앞에서부터 숫자 추출)
// * Number(str): 순수 숫자 문자열만 변환
// * +str: Number(str)과 동일 결과 출력
// --------------------------------------------------------------------------

// 출력 결과: '2025년' → 2025
console.log(LAST_YEAR)
console.log()
// 출력 결과: '2026' → 2026
console.log(parseInt(LAST_YEAR, 10) +1)
console.log(parseInt(CURRENT_YEAR) + '년')

console.log(parseInt('1280px', 10) + 5 + 'px')
console.log(parseInt('4rem',10) + 5 + 'rem')

console.log(parseInt('123abc', 10))
console.log(parseInt('abc123',10))
console.log(parseInt('123.456',10))

//Number()
const n1 = '1274', n2 = '1274년', n3 ='1247.457'

console.log(Number(n1))
console.log(Number(n2))
console.log(Number(n3))

console.log(Number(+n1))
console.log(Number(+n2))
console.log(Number(+n3))

const a1 = '1', a2 = '2', a3 = '3'

console.log('1' + '2' + '3')
console.log(a1 + a2 + a3)
console.log(Number(a1) + Number(a2) + Number(a3))
console.log(+a1 + +a2 + +a3)



// --------------------------------------------------------------------------
// 문자 → 실수(소수) 변환
// --------------------------------------------------------------------------
// * parseFloat(str): 실수 변환
// --------------------------------------------------------------------------

// 출력 결과: '3.141592' → 3.141592
console.log(parseFloat('3.141592'))

// 출력 결과: '9.24점' → 9.24
console.log(parseFloat('9.24점'))


// --------------------------------------------------------------------------
// 숫자 → 문자 변환
// --------------------------------------------------------------------------
// * String(num): 함수
// * num + '': 빈 문자 더하기
// * num.toString(radix?): 메서드 (진법 변환 가능)
// --------------------------------------------------------------------------

// 출력 결과: 2027 → '2027'
console.log(NEXT_YEAR)
console.log(String(NEXT_YEAR))
console.log(NEXT_YEAR + '')
console.log(NEXT_YEAR.toString())

// 출력 결과: 2027 → '2027년'
console.log(2027)
console.log(String(2027) + '년')
console.log(2027 + '년') // ✅추천

console.log(String(1960) + 'px')
console.log(1960 + 'px') // ✅추천

// 출력 결과: 255 → '11111111' (2진수)
 const myNumber = 255

// 숫자 -> 문자열 변환 (기본 기능)
console.log(myNumber.toString())

// 진법 변환(2진수)
console.log(myNumber.toString(2))

// 출력 결과: 255 → 'ff' (16진수)
console.log(myNumber.toString(16))


// 색상 값(일상, 10진수) → 색상 코드(컴퓨터, 16진수) 변환
const red = 255, green = 120, blue = 30

const redHexValue = red.toString(16).padStart(2, '0')
console.log(redHexValue)
const greenHexValue = green.toString(16).padStart(2, '0')
console.log(greenHexValue)
const blueHexValue = blue.toString(16).padStart(2, '0')
console.log(blueHexValue)

let hexCode = '#'

// hexCode = hexCode + redHexValue
// 복합 할당 연산자 (+=)
// x += 'hey'
hexCode += redHexValue
hexCode += greenHexValue
hexCode += blueHexValue

const tempHexCode = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0')
console.log(tempHexCode)

// 출력 결과 (예시): '#ff8000'
console.log(hexCode)

// 색상 코드(컴퓨터, 16진수) → 색상 값(일상, 10진수) 변환
// --------------------------------------------------------------------------
// 숫자 → 불리언 변환
// --------------------------------------------------------------------------
// * Boolean(num): 0은 false, 나머지는 true
// --------------------------------------------------------------------------

// 출력 결과: 0 → false

// 출력 결과: 1 → true

// 출력 결과: -1 → true

// 출력 결과: 0.1 → true

// 출력 결과: -0.1 → true


// --------------------------------------------------------------------------
// 문자 → 불리언 변환
// --------------------------------------------------------------------------
// * Boolean(str): ''은 false, 나머지는 true
// --------------------------------------------------------------------------

// 출력 결과: '' → false

// 출력 결과: ' ' → true

// 출력 결과: '0' → true


// --------------------------------------------------------------------------
// 숫자가 아님(NaN): 숫자 연산 실패 시, 생성
// --------------------------------------------------------------------------
// * Math.sqrt(-1)
// * 숫자 + NaN
// * undefined + undefined
// * 문자를 숫자로 나누기
// * Number(str), parseInt(str), parseFloat(str)
// * 0 / 0
// * Infinity - Infinity
// --------------------------------------------------------------------------

// 출력 결과: Math.sqrt(-1) → NaN

// 출력 결과: 숫자 + NaN → NaN

// 출력 결과: undefined + undefined → NaN

// 출력 결과: 문자 / 숫자 → NaN

// 출력 결과: Number(str) → NaN

// 출력 결과: parseInt(str) → NaN

// 출력 결과: parseFloat(str) → NaN

// 출력 결과: 0 / 0 → NaN

// 출력 결과: Infinity - Infinity → NaN


// --------------------------------------------------------------------------
// NaN 확인
// --------------------------------------------------------------------------
// * typeof 연산자 ('number' 반환) ⚠️
// * isNaN(): 타입 변환 후 판단 (부정확) ⚠️
// * Number.isNaN(): 진짜 NaN만 판단 (정확) ✅
// --------------------------------------------------------------------------

// 출력 결과: typeof NaN → 'number' (⚠️ NaN이지만, number 타입으로 인식)

// 출력 결과: isNaN(1) → false (✅ NaN 아님)

// 출력 결과: isNaN('3') → false (✅ NaN 아님)

// 출력 결과: isNaN([]) → false (✅ NaN 아님)

// 출력 결과: isNaN(null) → false (✅ NaN 아님)

// 출력 결과: isNaN(NaN) → true (✅ NaN 맞음)

// 출력 결과: isNaN('3n') → true (⚠️ NaN 맞음? 부정확한 이유: 타입 변환 후, 검사)

// 출력 결과: isNaN(undefined) → true (⚠️ NaN 맞음?)

// 출력 결과: isNaN({}) → true (⚠️ NaN 맞음?)

// 출력 결과: Number.isNaN('3n') → false (✅ NaN 아님, 정확한 이유: 타입 변환 없이 검사)

// 출력 결과: Number.isNaN(undefined) → false (✅ NaN 아님)

// 출력 결과: Number.isNaN({}) → false (✅ NaN 아님)


// --------------------------------------------------------------------------
// Falsy & Truthy
// --------------------------------------------------------------------------
// * Falsy 값 (6가지): 0, '', false, null, undefined, NaN
// * 나머지 값은 모두 Truthy
// --------------------------------------------------------------------------

// 출력 결과: 0 → false

// 출력 결과: '' → false

// 출력 결과: false → false

// 출력 결과: null → false

// 출력 결과: undefined → false

// 출력 결과: NaN → false


// --------------------------------------------------------------------------
// 권장 사항
// --------------------------------------------------------------------------
// * 문자 변환: String() 또는 toString()
// * 숫자 변환: Number() 또는 parseInt()/parseFloat()
// * NaN 확인: Number.isNaN() 사용
// --------------------------------------------------------------------------