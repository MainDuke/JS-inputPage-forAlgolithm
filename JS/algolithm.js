function initFunction(arrangement) {


  //console.log(arrangement);
  //console.log(typeof(arrangement));
  console.log("start init function");

  testPrint()


  console.log("end init function");
} //initFunction end

function testCase(int){
  switch(int){
    case 1: return "1";
    case 2: return "2"; 
    case 3: return "3"; 
    default : console.log("default");
    
    console.log("test break;");
  }
}

function Person() {
  // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
  var that= this;
  that.age = 0;

  setInterval(function growUp() {
    // 비엄격 모드에서, growUp() 함수는 `this`를
    // 전역 객체로 정의하고, 이는 Person() 생성자에
    // 정의된 `this`와 다름.
    that.age++;
    console.log("this age : "+that.age);
  }, 1000);
}

function testPrint(){

  function foo(x) {
    this.x = x;
};

var A = new foo('hello'); 
console.log(A.x);

console.log(A.prototype.x)

}