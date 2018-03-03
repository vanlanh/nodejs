//Disable Update and Delete button by default
$(document).ready(function() {
    $("#updatebtn").attr("disabled", "disabled")
    $("#deletebtn").attr("disabled", "disabled")
})

//Validation form using jQuery Validation Plugin
$("#frmInsert").validate();
$("#frmUpdate").validate();
$("#frmDelete").validate();

//Handle table checkbox click
$('input[type=radio]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'on') {
            $("#updatebtn").removeAttr("disabled")
            $("#deletebtn").removeAttr("disabled")
            var id = $(this).closest('td').next('td').html()
            var imagesCol = $(this).closest('td').next('td').closest('td').next('td').closest('td').next('td')
            var titleCol = imagesCol.closest('td').next('td')
            var acreCol = titleCol.closest('td').next('td')
            var priceCol = acreCol.closest('td').next('td')
            var destCol = priceCol.closest('td').next('td')
            var locationCol = destCol.closest('td').next('td')
            var phoneCol = locationCol.closest('td').next('td')

            $("#userId").val(id)
            $("#idUser").val(id)
            $("#imagesEdit").val(imagesCol.html())
            $("#titleEdit").val(titleCol.html())
            $("#acreEdit").val(acreCol.html())
            $("#priceEdit").val(priceCol.html())
            $("#destEdit").val(destCol.html())
            $("#locationEdit").val(locationCol.html())
            $("#phoneEdit").val(phoneCol.html())
        }
        else {
            $("#updatebtn").attr("disabled", true)
            $("#deletebtn").attr("disabled", true)
        }
})

//Reload table content without reload entire page
function reload() {
    $.getJSON("/reload",
        function (data, textStatus, jqXHR) {
            $("#mytable").find("tr:gt(0)").remove();
            var trHtml = '<tr><th class="col-select">Chọn</th><th>Số thứ tự</th><th>Mã nhà trọ</th><th>Ảnh nhà trọ</th><th>Tiêu đề</th> <th>Diện tích</th><th>Giá</th><th>Mô tả</th><th>Địa chỉ</th><th>Số điện thoại</th>';
            var index = 1;
            $.each(data.result, function(i, item) {
                trHtml += '</tr><tr><td style="width: 40px"><input type="radio" id="row'+ item.id + '" name="check" class="check"></td><td>'+ index +'</td><td>' + item.id + '</td><td>' + item.images + '</td><td>' + item.title + '</td><td>' + item.acre + '</td><td>' + item.price + '</td><td>' + item.dest + '</td><td>' + item.location + '</td><td>' + item.phone + '</td></tr>'
                index++;
            })
            $("#mytable").html(trHtml)
        }
    )
}

$("#reloadLink").click(function(e) {
    e.preventDefault()
    reload()
})