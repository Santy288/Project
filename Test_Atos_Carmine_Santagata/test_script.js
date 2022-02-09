window.addEventListener('load',function(event){
 

    for(var x=1;x<=data.length;x++){
  
      var label = document.querySelector('label[for="titolo'+x+'"]');
      var content = document.querySelector('p[for="content'+x+'"]');
  
      label.innerHTML = "<b>"+data[x-1].title+"</b>";
      content.textContent = data[x-1].body;
  
    }
  
  },false);
  
  
  
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
  
    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
  