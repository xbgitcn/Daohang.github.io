//δ����


<script src="js/jquery-1.11.1.min.js"></script>

<script>

$(function(){

$(".showBarrage,.s_close").click(function(){

$(".barrage,.s_close").toggle("slow");

});

init_animated();

})

//�ύ����

$(".send .s_btn").click(function(){

var text = $(".s_text").val();

if(text == ""){

return;

};

var _lable = $("<div style='right:20px;top:0px;opacity:1;color:"+getRandomColor()+";'>"+text+"</div>");

$(".mask").append(_lable.show());

init_barrage();

})

//��ʼ����Ļ����

function init_barrage(){

var _top = 0;

$(".mask div").show().each(function(){

var _left = $(window).width()-$(this).width();//���������ȣ���Ϊ��λleft��ֵ

var _height = $(window).height();//��������߶�

_top +=75;

if(_top >= (_height -130)){

_top = 0;

}

$(this).css({left:_left,top:_top,color:getRandomColor()});

//��ʱ��������

var time = 10000;

if($(this).index() % 2 == 0){

time = 15000;

}

$(this).animate({left:"-"+_left+"px"},time,function(){

$(this).remove();

});

}

);

}

//��ȡ�����ɫ

function getRandomColor(){

return '#' + (function(h){

return new Array(7 - h.length).join("0") + h

}

)((Math.random() * 0x1000000 << 0).toString(16))

}

</script>