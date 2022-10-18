const inputan = (num) => {
  document.getElementById("display").value = document.getElementById("display").value + num;
};

const reset = () => {
  document.getElementById("display").value = "";
};

function hapus() {
  const x = document.getElementById("display").value;
  document.getElementById("display").value = x.substring(0, x.length - 1);
}

function hasil() {
  const x = document.getElementById("display").value;
  document.getElementById("display").value = eval(x);
}
