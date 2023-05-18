

 document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
   	  const src = e.target.getAttribute("src");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 })


 $(function(){
    $('#harsh').popover({
        html : true,
        
        title:"<h1>Hire me as a Web Developer</h1>",
        animation : false,
        // delay:{"show":1000,"hide":1000},
        placement:"bottom",
        // trigger:"click",
        offset:30
    });
});
