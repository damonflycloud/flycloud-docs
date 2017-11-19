/**
 * Created by flycloud on 2017/4/15.
 */

function getJson() {
   
    $.getJSON("./static/json/docs.json",function(data){
        $.each( data, function(i,item) {
            var middle="";
            if(item.middle==null||item.middle==true){
                middle="<h2><span>"+item.title+"</span></h2>";
            }
            var listItem="<div class='list-item'><dl class='m-manual-item manual-item-standard'><dt><a class='e-cover' "+"href='"+ item.href+"' target='_blank'>" +
                middle+
                "<img class='cover b-cover' width='173' height='231' title='" +item.title+"'src='"+item.img+"'></a> </dt><dd>"+
                "<a href='"+item.href+"' target='_blank' class='name' title='"+item.title+"'>"+item.title+"</a></dd></dl></div>";

            $('.m-manual-list').append(listItem);
        });

    })

}
