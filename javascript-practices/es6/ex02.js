/**
 * const: Block Scope의 상수
 */

// 1. block scope 확인
try {
  if (true) {
    const num = 20;
  }
  console.log(m);
} catch (e) {
  console.error('[오류] ' + e);
}

// 2. 대입(Assignment) 에러
try {
  const o = {};
  o.name = '둘리'; // 에러 x

  o = {}; // 에러 o
} catch (e) {
  console.error('[오류] ' + e);
}