// Bài 1: Xuất 3 số theo thứ tự tăng dần 
/**
 * Tao btnSapxep
 * -input:
 * cho nguoi dung nhap vao 3 so:
 * + soNguyen1 =
 * + soNguyen2 = 
 * + soNguyen3 = 
 * -progress:(=>xep tu nho den lon)
 * + if (soNguyen1 > soNguyen3 > soNguyen2)
 * =>sapXep = soNguyen2 < soNguyen1 < soNguyen3
 * + if(soNguyen1 > soNguyen2 && soNguyen2 > soNguyen3)
 * =>sapXep =soNguyen3 < soNguyen2 < soNguyen1
 * + if(soNguyen1 > soNguyen2 && soNguyen3 > soNguyen1)
 * =>sapXep =soNguyen2 < soNguyen1 < soNguyen3
 * + if(soNguyen2 > soNguyen1 && soNguyen1 > soNguyen3)
 * =>sapXep =soNguyen3 < soNguyen1 < soNguyen2
 * + if(soNguyen2 > soNguyen3 && soNguyen3 > soNguyen1)
 * =>sapXep =soNguyen1 < soNguyen3 < soNguyen2
 * + con lai: sapXep =soNguyen1 + "<" + soNguyen2 + "<" + soNguyen3;
 * - out put:
 * inner ra man hinh =sapXep
 */
var btnSapXep = document.getElementById("btnSapXep");
btnSapXep.onclick = function(){
    //input
    var soNguyen1 = document.getElementById("soNguyen1").value*1;
    var soNguyen2 = document.getElementById("soNguyen2").value*1;
    var soNguyen3 = document.getElementById("soNguyen3").value*1;
    var sapXep = 0;
    //progress
    if(soNguyen1 > soNguyen3 && soNguyen3 > soNguyen2 ){
        sapXep =soNguyen2 + "<" + soNguyen3 + "<" + soNguyen1;
    }else if(soNguyen1 > soNguyen2 && soNguyen2 > soNguyen3){
        sapXep =soNguyen3 + "<" + soNguyen2 + "<" + soNguyen1;
    }else if(soNguyen1 > soNguyen2 && soNguyen3 > soNguyen1){
        sapXep =soNguyen2 + "<" + soNguyen1 + "<" + soNguyen3;
    }else if(soNguyen2 > soNguyen1 && soNguyen1 > soNguyen3){
        sapXep =soNguyen3 + "<" + soNguyen1 + "<" + soNguyen2;
    }else if(soNguyen2 > soNguyen3 && soNguyen3 > soNguyen1){
        sapXep =soNguyen1 + "<" + soNguyen3 + "<" + soNguyen2;
    }else{
        sapXep =soNguyen1 + "<" + soNguyen2 + "<" + soNguyen3;
    };
    // console.log(sapXep);
    //output
    ketQua = "Thứ tự tăng dần: "+ sapXep;
    document.getElementById("showInfoSapXep").innerHTML = ketQua;
};

// bai2:Chao thanh vien trong gia dinh 
/**
 * tao btnChao
 * -input:
 * cho nguoi dung chon thanh vien:
 * + thanhVien
 * + Bo
 * + Me
 * + Anh 
 * + Em 
 * + chao
 * - progress:
 * 
 * + if(thanhVien ==Bo) =>chao =  xin chào Bố!
 * + if(thanhVien ==Me) =>chao =  xin chào Mẹ!
 * + if(thanhVien ==Anh) =>chao =  xin chào Anh!
 * + if(thanhVien ==Em) =>chao =  xin chào Em!
 * + con lai =>chao = xin chào người lạ cute!
 * - out put:
 * + inner ra man hinh = chao;
 */

var btnChao = document.getElementById("btnChao");
btnChao.onclick = function(){
    //input
    var thanhVien = document.getElementById("thanhVien").value;
    var Bo = document.getElementById("Bo").value;
    var Me = document.getElementById("Me").value;
    var Anh = document.getElementById("Anh").value;
    var Em = document.getElementById("Em").value;
    var Chao = "";
    
    //progress
    if(thanhVien === Bo){
        Chao = "Xin chào Bố!"
    }else if(thanhVien === Me){
        Chao = "Xin chào Mẹ!"
    }else if(thanhVien === Anh){
        Chao = "Xin chào Anh Trai!"
    }else if(thanhVien === Em){
        Chao = "Xin chào Em Gái!"
    }else{
        Chao = "Xin chào người lạ cute!"
    }; 
    // output 
    document.getElementById("showInfoChao").innerHTML = Chao;

};

//bài 3: Đếm số chẵn và lẽ 
/**
 * - input:
 * - Cho người dùng nhập 3 số nguyên:
 * + numNguyen1
 * + numNguyen2
 * + numNguyen3
 * + DemChan = 0
 * + DemLe = 0
 * - progress:
 * + if(numNguyen1 % 2)  (la so chan) =>DemChan= ++DemChan
 * + if(numNguyen2 % 2)  (la so chan) =>DemChan= ++DemChan
 * + if(numNguyen3 % 2)  (la so chan) =>DemChan= ++DemChan
 *  - chỉ có 3 số nguyên nên DemLe = 3 - DemChan 
 * + input: 
 * inner ra man hinh = DemChan 
 * inner ra man hinh += DemLe 
 */
document.getElementById("btnDemSo").onclick=function(){
// input:
var NumNguyen1 = document.getElementById("NumNguyen1").value*1;
var NumNguyen2 = document.getElementById("NumNguyen2").value*1;
var NumNguyen3 = document.getElementById("NumNguyen3").value*1;
var DemChan = 0;
var DemLe = 0;
//progress:
if(NumNguyen1 % 2 === 0){
    DemChan = ++DemChan;
};
if(NumNguyen2 % 2 === 0){
    DemChan = ++DemChan;
};
if(NumNguyen3 % 2 === 0){
    DemChan = ++DemChan;
};
    DemLe = 3 - DemChan;
//output:
document.getElementById("showInfoDemSo").innerHTML ="<p>Có "+ DemChan + " số chẵn</p>";
document.getElementById("showInfoDemSo").innerHTML +="<p>Có "+ DemLe + " số lẽ</p>";
};

/**
 * Bài 4:Đoán hình tam giác
 * tao onclick btnDoan
 * - input:
 * - Cho người dùng nhập 3 canh:
 * + Canh1
 * + Canh2
 * + Canh3
 * + DuDoan = "";
 * - progress:
 * if(Canh1 === Canh2 & Canh1 === Canh3) =>DuDoan = Tam giác đều
 * else if(Canh1 === Canh2 || Canh2 === Canh3 || Canh3 === Canh1) =>DuDoan = Tam giác cân
 * else if((canh1*canh1)===(canh2*canh2)+(canh3*canh3) || (canh2*canh2)===(canh1*canh1)+(canh3*canh3) || (canh3*canh3) ===(canh1*canh1)+(canh2*canh2)) =>DuDoan = tam giác vuông
 * else:DuDoan =còn lại là một loại tam giac nào đó
 * - output:
 * inner ra man hình = DuDoan;
 */
document.getElementById("btnDoan").onclick=function(){
//input:
var Canh1 = document.getElementById("Canh1").value*1;
var Canh2 = document.getElementById("Canh2").value*1;
var Canh3 = document.getElementById("Canh3").value*1;
var DuDoan = "";
//progress:
if(Canh1 === Canh2 & Canh1 === Canh3){
    DuDoan = "Là hình tam giác đều";
}else if(Canh1 === Canh2 || Canh2 === Canh3 || Canh3 === Canh1){
    DuDoan = "Là hình tam giác cân";
}else if((Canh1*Canh1)===(Canh2*Canh2)+(Canh3*Canh3) || (Canh2*Canh2)===(Canh1*Canh1)+(Canh3*Canh3) || (Canh3*Canh3) ===(Canh1*Canh1)+(Canh2*Canh2)){
    DuDoan = "Là hình tam giác vuông";
}else{
    DuDoan = "Là một loại tam giác nào đó";
};
//output:
document.getElementById("showInfoDoan").innerHTML=DuDoan;

};

