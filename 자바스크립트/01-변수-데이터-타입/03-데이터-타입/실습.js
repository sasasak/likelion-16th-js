// --------------------------------------------------------------------------
// 실습: 데이터 타입
// --------------------------------------------------------------------------
// * 기본 타입 (Primitive Types)
//   - String (문자): 텍스트 데이터
//   - Number (숫자): 실수 또는 정수, 소수 데이터
//   - Boolean (논리): true 또는 false
//   - Null (널): 의도적으로 비어있는 값
//   - Undefined (언디파인드): 값이 할당되지 않음
//   - Symbol (심볼): 고유한 식별자
//   - BigInt (빅인트): 매우 큰 정수
// * 참조 타입 (Reference Types)
//   - Object (객체): 키-값 쌍의 집합
//   - Array (배열): 여러 값의 목록
//   - Function (함수): 실행 가능한 코드 블록
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 문자 (String)
// --------------------------------------------------------------------------

// 작은따옴표로 문자열 생성
const 작은_따옴표 = '작은 따옴표' //따옴표 쌍이 일치하지 않을 경우 : Error Unterminated string literal

// 큰따옴표로 문자열 생성
const 큰_따옴표 = "큰 따옴표"

// 역따옴표로 문자열 생성
const 역_따옴표 = `역 따옴표`
// 문자열 안에 따옴표 사용
let greetingMessage = "i\'m fine."
greetingMessage ="i'm fine."
greetingMessage = `i'm fine.`
let recordTime = '5\' 32"'
recordTime = "5' 32\""
recordTime = `5' 32"`

console.log(작은_따옴표)
console.log(큰_따옴표)
console.log(역_따옴표)
console.log(greetingMessage)
console.log(recordTime)

// 이스케이프 문자
// * \n - new line
let escapeStringN = '줄바꿈\n문자'
console.log(escapeStringN)
// * \t - tab
console.log('탭\t문자')
console.log('줄바꿈\n\t문자')
console.log('백슬래시(\\)')

// 문자 + 문자 (문자 연결)
const MATERIAL_TYPE='아이언'
const HERO_GENDER ='맨'
const HERO = MATERIAL_TYPE + HERO_GENDER
console.log(HERO) // '아이언' + '맨' = '아이언맨'
console.log('Java' + 'Script') // 'Java' + 'Script' = 'JavaScript'


// --------------------------------------------------------------------------
// 숫자 (Number)
// --------------------------------------------------------------------------

// 정수
console.log(123_456)

// 실수 (정수 + 소수)
console.log(823 + 0.73)

// 음수
console.log(-100)

// 과학적(지수) 표기법
// 2.5 × 10^6 = 2,500,000
console.log(2.5e6)
console.log(25e5)

// 특수 숫자 값
// * Infinity
// * -Infinity
// * NaN

// JavaScript 에서 사용하는 가장 큰 정수값 Number.MAX_SAFE_INTEGER
// JavaScript 에서 사용하는 가장 작은 정수값 Number.MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// 큰 숫자

// 수학 산술 연산자(+, -, x, ÷)
// 프로그래밍 산술 연산자 (+, -, *, /)
// 산술 연산 (숫자 값 끼리 계산)
// * 덧셈(add) 연산 
console.log(9 + 1) // 10
console.log(100 + (-20)) // 80
console.log(0.9 + 0.2) // 1.1
// * 뺄셈(minus) 연산
console.log(9 - 1) // 8
console.log(100 - 20) // 80
console.log(0.9 - 0.2) // 0.7
// * 곰셉(multiply) 연산
console.log(9 * 1) // 9
console.log(100 * 20) // 2e3(2000, 2_000)
console.log(0.9 * 0.2) //0.18000000000000002
// * 나눗셈(divide) 연산
console.log(9 / 1) // 9
console.log(100 / 20) // 5
console.log(0.9 / 0.2) // 4.5
// * 나머지(modulus) 연산
console.log(9 % 1) // 0
console.log(100 % 20) // 0
console.log(0.9 % 0.2) // 0.09999999999999998

// --------------------------------------------------------------------------
// 불리언 (Boolean)
// --------------------------------------------------------------------------

// true 값
console.log(true)
console.log(3 !== '3')
// false 값
console.log(false)
console.log(3 === '3')

// --------------------------------------------------------------------------
// 언디파인드 (Undefined)
// --------------------------------------------------------------------------

// 선언만 하고 값을 할당하지 않음
// 1. 선언 ✅
// 2. 초기화 : 의도적으로 값을 할당하지 않음(엔진이 초기값으로 undefined 할당)
let memoryStick 

console.log(memoryStick) // undefined

// --------------------------------------------------------------------------
// 널 (Null)
// --------------------------------------------------------------------------

// null 값 - 의도적으로 비어있음
// 예시:
// * 선택된 인덱스
let selectedIndex = null // 개발자가 의도를 가지고 값을 비운 경우를 나타냄
selectedIndex = 3 // 4번째 박스가 선택됨(상태)
console.log(selectedIndex)
selectedIndex = 1 // 2번째 박스가 선택됨 (상태 : 시간의 흐름에 따라 변경된 값)
console.log(selectedIndex)
// * 로그인 사용자
let signInUser = null // 로그인 사용자가 없다 (의도를 가지고 비움)
// 로그인 시도
let logInUser = '근영'
console.log('로그인 사용자 : ', logInUser)
// 로그아웃
logInUser = null // 로그인 사용자가 없다. (상태 변경)
console.log('로그인 사용자 : ', logInUser)
// undefined vs null 비교
// undefined → 값이 없음 (자동)
// null     → 값이 없음 (의도적)



// --------------------------------------------------------------------------
// 심볼 (Symbol)
// --------------------------------------------------------------------------
// 문자열의 경우, 같은 키(Key) 값인 경우 동일한 것이다.
const productAIdSting = 'abc' , productBIdString = 'abc'

// 심볼 생성 - 항상 고유한 값
// 심볼인 경우, 같은 키 값을 사용해도 각각 고유한 값이다. 
const productAIdSymbol = Symbol('abc'), productBIdSymbol = Symbol('abc')
// 고유한 값인가? (조건 : productAIdSting 과 productBIdString 값이 달라야한다.)
// 비교 연산자(두 값을 비교 -> 불리언 값 평가)
// 두 값이 같다. true 불리언 평가 (고유하지 않다.)
console.log('문자열을 사용할 때 고유하지 않다?', productAIdSting==productBIdString)
console.log('심볼을 사용할 때 고유하지 않다?', productAIdSymbol==productBIdSymbol)
// 설명이 있는 심볼


// --------------------------------------------------------------------------
// 빅인트 (BigInt)
// --------------------------------------------------------------------------

// 일반 숫자의 한계
// * Number.MAX_SAFE_INTEGER
// * +1 한계 초과
// * +2 정확하지 않음

// BigInt 생성 - 숫자 뒤에 n 붙이기
const bigIntLiteral = 1000n
console.log(bigIntLiteral)

// BigInt() 사용 -> 빅인트(큰 정수) 변환
const bigInt = BigInt(1000)
console.log(bigInt

)
// BigInt와 Number는 섞을 수 없음
// ❌ 숫자와 빅인트를 더할 경우 에러!
// console.log(1000 + 100n) ❌  BigInt와 숫자형을 섞어서 쓰는 경우 타입이 달라서 연산이 불가
// 숫자형과 빅인트형을 더하고싶을 경우 빅인트화 시켜서 더하면 됨
console.log(BigInt(1000)+100n) //✅
// ✅ 빅인트끼리 더할 경우 가능


// --------------------------------------------------------------------------
// 참조 타입 (Reference Types)
// --------------------------------------------------------------------------
// 함수
function 커피_만들기(원두, 물, 얼음){
  // 작업 절차 
  // 1. 원두 갈기
  console.log('1. 원두 갈기')
  // 2. 물 끓이기
  console.log('2. 물 끓이기')
  // 3. 커피 추출
  console.log('3. 커피 추출')
  // 4. 커피 제조
  console.log('4. 커피 제조')
  // 5. 완성된 커피 내보내기
  console.log('5. 완성된 커피 내보내기')
}
//기능 사용(실행, 호출)
커피_만들기('케냐','뜨거운 물', false) 

// 객체

// 배열



// --------------------------------------------------------------------------
// typeof 연산자
// --------------------------------------------------------------------------

// 기본 타입
// * null
// * undefined
// * String
// * Number
// * Boolean
// * BigInt
// * Symbol

// 참조 타입
// * Object
// * Array
// * Function