var listStudent =
[
	{
		'masv':'123456789',
		'ho':'Nguyen Van',
		'ten':'A',
		'ngaysinh':'20/10/1997',
		'lop':'15CDTH21',
		'khoa':'CNTT',
		'diachi':'70 Nguyen Hue, Hue',
		'gioitinh':'Nam',
		'nganhhoc':'CNTT'
	},
	{
		'masv':'123456789',
		'ho':'Nguyen Van',
		'ten':'B',
		'ngaysinh':'20/10/1997',
		'lop':'15CDTH21',
		'khoa':'CNTT',
		'diachi':'70 Nguyen Hue, Hue',
		'gioitinh':'Nam',
		'nganhhoc':'CNTT'
	},
	{
		'masv':'123456789',
		'ho':'Nguyen Van',
		'ten':'C',
		'ngaysinh':'20/10/1997',
		'lop':'15CDTH21',
		'khoa':'CNTT',
		'diachi':'70 Nguyen Hue, Hue',
		'gioitinh':'Nam',
		'nganhhoc':'CNTT'
	}
];

function printListStudent()
{
    for (var i = 0;i<listStudent.length;i++)
    {
        console.log(listStudent[i]);
    }
}
function findStudent(studentCode)
{
    for (var i = 0;i<listStudent.length;i++)
    {
        //console.log(listStudent[i]);
        if (listStudent[i]['masv']==studentCode)
        {
            console.log(listStudent[i]);
            break;
        }
    }
}
//printListStudent();
findStudent('123456789');