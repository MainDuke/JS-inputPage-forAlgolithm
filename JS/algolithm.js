function initFunction(data) {
  console.log("start algolithm");
  console.log("input value = " + data);

  console.log("typeof = " + typeof data);


  count = -1;

  console.log('start Roof =' + count);
  while(count) {
    console.log('start While =' + count);
    count++;

    console.log('end While =' + count);
  }
  console.log('end roof =' + count);






  //outputSlot 에 값 넣기!
  //setAttribute 는 디폴트 값을 설정하는거고, 현재 데이터를 넣기 위해서는
  //value 값에 직접 컨트롤하는게 맞다.
  document.getElementById("outputSlot").value = data;
  console.log("end init function");

} //initFunction end

function ListNode(val) {
     this.val = val;
     this.next = null;
  }