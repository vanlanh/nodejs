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

 var listSVName = ['Nam', 'Hung', 'Sang', 'Cuong', 'Tuan'];
 var svName = 'Binh';
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