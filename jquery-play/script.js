// I'm some javascript!

// $('body').css('background', 'pink')

$('h1').click(function () {
  $('body').toggleClass('purple')
})

// let rainbow = 0
// let colorVal = `hsl(${rainbow},100,100)`

// $('.button').click(function () {
//   rainbow + 30
//   $('body').css('background', `${colorVal}`)
// })

$('.one').click(function () {
  $('.kitties').attr('src', 'https://placekitten.com/400/401').css('border', '1px dashed red').css('padding', '20px')
})

$('.two').click(function () {
  document.getElementsByClassName('kitties').attr('src', 'https://placekitten.com/401/401')
})

$('.three').click(function () {
  $('.kitties').attr('src', 'https://placekitten.com/402/401')
})
