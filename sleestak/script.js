let posVals = {
  curX: 0,
  curY: 0
}

function moveStuff(posVals) {
  $(document).keydown(function (event) {
    //e.which is set by jQuery for those browsers that do not normally support e.keyCode.
    let keyCode = event.keyCode || event.which

    if (keyCode == 38) {
      moveUp()
    }

    if (keyCode == 40) {
      moveDown()
    }

    if (keyCode == 37) {
      moveLeft()
    }

    if (keyCode == 39) {
      moveRight()
    }

    return true
  })
}
function moveUp() {
  posVals.curY = posVals.curY - 50
  console.log(posVals.curY)
  $('.sleestak').css('transform', `translate(${posVals.curX}px, ${posVals.curY}px)`)
  //$('.sleestak').css('transform', 'translate(' + posVals.curX + 'px,' + posVals.curY + 'px)')
  return posVals
}
function moveDown() {
  posVals.curY = posVals.curY + 50
  $('.sleestak').css('transform', `translate(${posVals.curX}px, ${posVals.curY}px)`)
  return posVals
}
function moveLeft() {
  posVals.curX -= 50
  $('.sleestak').css('transform', `translate(${posVals.curX}px, ${posVals.curY}px)`)
  $('.sleestak').attr('src', 'images/sleestak-left.gif')
  return posVals
}
function moveRight() {
  posVals.curX += 50
  $('.sleestak').css('transform', `translate(${posVals.curX}px, ${posVals.curY}px)`)
  if ($('.sleestak').attr('src') != 'images/sleestak-right.gif') {
    $('.sleestak').attr('src', 'images/sleestak-right.gif')
  }
  return posVals
}

function init() {
  moveStuff()
}

//this loads any function through jquery that we want listening as soon as the page loads.
$(init)
