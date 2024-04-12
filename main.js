// Mad Lib

//Event listener??
document.getElementById("button").addEventListener("click", word);

//store
function word() {
  // INPUT
  let Song = document.getElementById("Song-in").value;
  let Friend = document.getElementById("Friend-in").value;
  let Object = document.getElementById("Object-in").value;

  // PROCESS
  let msg = `I was listening to ${Song} when ${Friend} tripped on a(n) ${Object}.`;

  // OUTPUT
  document.getElementById("output").innerHTML = msg;
}
