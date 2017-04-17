const panels = document.querySelectorAll('.panel')

function toggleOpen () {
  this.classList.toggle('open')
}

function toggleActive (e) {
  /* some browsers use flex and some flex-grow as a nem so to cover both cases we can not just write if(e.propertyName === 'flex-grow') It is better to check if there si a word flex */
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
