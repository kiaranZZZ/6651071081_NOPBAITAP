function removecolor(){
  const x=document.getElementById("colorSelect");
  if(x.options.length===0){ alert("Danh sách đã hết!"); return; }
  x.remove(x.selectedIndex);
}
