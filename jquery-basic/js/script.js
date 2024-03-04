$(function() {
  $('div').on('click dblclick', (tinko) => {
    
    if(tinko.type === 'click'){
      $('div').css('background-color', 'red');
    }

    if(tinko.type === 'dblclick'){
      $('div').css('background-color', 'green');
    }
  })

  $('button').off('click', (e) => {
    if (e.type === 'click') {
      $('div').off(css);
    }
  })

});