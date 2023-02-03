var mang = [];
function add() {
    var order1 = {
        name : document.getElementById("name").value,
        mota : document.getElementById("mt").value,
        sdt : document.getElementById("sdt").value,
        email : document.getElementById("email").value

    };
    mang.push(order1);
}
console.log(mang)
function themvaolocal(){
    localStorage.setItem("order", JSON.stringify(mang));
    window.location.href = "order.htm";
}