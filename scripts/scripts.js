window.addEventListener('message', function(event) {
  var p = document.createElement('p')
  p.textContent = JSON.stringify({ttwxxss: event})
  document.body.appendChild(p)
})