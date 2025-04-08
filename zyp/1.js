$(function(){
    $('.tupian li').eq(0).siblings().hide()
    $('.wenzi li').mouseover(function(){
    var index=$(this).index()
        $('.tupian li').eq(index).show()
        $('.tupian li').eq(index).siblings().hide()
    })
})
  $(function(){
      $('.box3 div').eq(0).siblings().hide()
      $('.wenzi1 li').mouseover(function(){
          var index1=$(this).index()
          $('.box3 div').eq(index1).show()
          $('.box3 div').eq(index1).siblings().hide()
      })
  })