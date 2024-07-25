function opentab(tabname)
      {
         for(tablink of tablinks){
            tablink.classlist.remove("active-link");
         }
         for(tabcontent of tabcontents){
            tabcontent.classlist.remove("active-tab");
         }
         event.currentTarget.classlist.add("active-link");
      }this.classList.add("active-link");
      this.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  const tabElement = document.getElementById(tabname);
  if (tabElement) {
    tabElement.classList.add("active-tab");
  } else {
    console.error("Element with ID", tabname, "not found");
  }
//   .......................nothing..................
{/* <i class="fa-solid fa-circle-xmark" onclick="closemenu()"></i> */}
{/* <i class="fa-solid fa-bars" onclick="openmenu()"></i> */}
// 
// .then(response => 
//    {
//       msg.innerHTML = "Message sent Successfully"
//       setTimeout(function(){
//          msg.innerHTML = ""
//       },5000)
//       form.reset()
//    }
//  )