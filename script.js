function inputan(num){
    document.form.tampilan.value = document.form.tampilan.value + num;
}
function hasil(){
    var nilai = document.form.tampilan.value;
    if(nilai) document.form.tampilan.value = eval(nilai);
}
function reset(){
    document.form.tampilan.value = "";
}
function hapus(){
    var nilai = document.form.tampilan.value;
    document.form.tampilan.value = nilai.substring(0,nilai.length-1);
}