/*
<자바스크립트 객체 만들기>
1. 중괄호를 쓰는 방법
2. 함수 = 객체
 */

 //객체의 원형에서 새로운 인스턴스 객체 만들어보자
 function Person(name,age){ // Person함수 정의
     this.name = name; // this도 객체. this는 함수의 속성접근용도
     this.age = age;
 }

 // prototype속성 쓴 이유 : Person객체가 실제 데이터를 담기 위한 것이 아니라 인스턴스 객체 생성위한 틀이기 때문. 인스턴스 객체 생성시 메모리 효율적 관리 가능
 // 이처럼 새 인스턴스 객체를 만들기 위해 정의한 객체를 프로토타입 객체라함
 Person.prototype.walk = functioon(speed){
     console.log(speed + 'km 속도로 걸어갑니다.');
 }

 var person01 = new Person('Soso',20);
 var person02 = new Person('baba',29);

 function Person2(name,age){
     this.name = name;
     this.age = age
 }