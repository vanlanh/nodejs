function code(x){
    switch(x){
        case 0: console.log('lanh'); break;
        case 1: console.log('ly'); break;
        case 2: console.log('an'); break;
        default: console.log('deo');
    }
}
code(3);

function code2(x){
    for(var i=0; i<=x; i++){
        console.log('van lanh');
    }
}
code2(10);

function code3(x){
    var i=0;
    while(i<=x){
        console.log('van lanh');
        i++;
    }
}
code3(10);

function code4(x){
    var i=0;
    do{
        console.log('van lanh');
        i++;
    }while(i<=x);
}
code4(10);

 var listSVName = ['Nam', 'Hung', 'Lanh', 'Cuong', 'Tuan'];
 var svName = 'Lanh';
 for (var i = 0; i < listSVName.length; i++)
 {
      if (listSVName[i] == svName)
     {
         console.log('Danh sach sinh vien co ban ten la ' + svName + ' co chi so la ' + i);
	 }else{
         console.log('Khong co ten trong danh sach');
     }
 }

 for (var i = 0; i < listSVName.length; i++) {
     console.log(listSVName[i]+ '\t');
 }

 function month(year,month){
     switch(month){
         case 1:
         case 3:
         case 5:
         case 7:
         case 8:
         case 10: console.log('Thang '+month+' co 31 ngay'); break;
         case 4:
         case 6:
         case 9:
         case 11: console.log('Thang '+month+' co 30 ngay'); break;
         case 2: if(year%4==0 && year%100!=0){
             console.log('Thang '+month+' co 29 ngay'); break;
         }else{
             console.log('Thang '+month+' co 28 ngay'); break;
         }
         default: console.log('Loi xin nhap thang tu 1-12');
     }
 }
 month(2015,2);

function tinhChan(a){
    var s=0;
    for(var i=1; i<=a; i++){
        if(i%2==0){
            console.log(i);
            s+=i;
        }
    }
    console.log('Tong la: '+s);
}
tinhChan(10);

function tinhLe(a){
    var s=0;
    console.log('Cac so le la:');
    for(var i=1; i<=a; i++){
        if(i%2==1){
            console.log(i);
            s+=i;
        }
    }
    console.log('Tong la: '+s);
}
tinhLe(99);

function tinhBoi(a){
    var s=0;
    console.log('Cac so la boi cua 7 la:');
    for(var i=1; i<=a; i++){
        if(i%7==0){
            console.log(i);
            s+=i;
        }
    }
    console.log('Tong cac so boi cua 7 la: '+s);
}
tinhBoi(100);

function tinhTu(a){
    var s=0;
    console.log('Day so la:');
    for(var i=1; i<=a; i++){
        console.log(i);
        s+=i;
    }
    console.log('Tong la: '+s);
}
tinhTu(10);

