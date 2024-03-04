$(window).on('load', () => {
  console.log('loadイベントが発生しました')
})

$(function ()  {

  $(document).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  })
})