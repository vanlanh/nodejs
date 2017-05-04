var listSV = [
    {
        'maSV': '15513120018',
        'ten': 'Trần Văn Lanh',
        'nSinh': '17/5/1997',
    },
    {
        'maSV': '15513120019',
        'ten': 'Phạm Công Luận',
        'nSinh': '10/1/1997',
    },
    { 
        'maSV': '15513120048',
        'ten': 'Võ Quang Phước',
        'nSinh': '19/9/1997',
    }        
];

//Hàm duyệt mảng
function inDSSV() {
    for(var i=0; i<listSV.length; i++){
        console.log(listSV[i]);
    }
}

//Gọi hàm
inDSSV();

//Hàm tìm đối tượng trong mảng
function timSV(x) {
    for(var i=0; i<listSV.length; i++){
        if(listSV[i]['maSV'] == x){
            console.log(listSV[i]['maSV']);
            console.log(listSV[i]);
        }else {
            console.log('Không tồn tại');
        }
    }
}

timSV('15513120048');