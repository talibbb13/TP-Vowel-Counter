var count = document.querySelector("#count");
var cont = document.querySelector("#cont");

function vowelCount(str) {
 var refStr = str.toLowerCase()
    var counter = 0;
 var vowelWords = ["a", "e", "i", "u", "o"];
  // EXPLAINATION OF THIS LOOP
  for (let ltr of refStr) {
    if (vowelWords.includes(ltr)) {
      counter++
    }
    count.innerHTML = counter;
  };
};

function clearText() {
  cont.value="";
}
