function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.toString = toString;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  this.dataStore.shift();
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}
