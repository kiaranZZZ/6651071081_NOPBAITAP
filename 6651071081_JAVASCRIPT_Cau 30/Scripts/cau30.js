function insert_Row(){
  const t=document.getElementById("sampleTable");
  const r=t.insertRow(t.rows.length);
  const n=t.rows.length;
  r.insertCell(0).innerHTML="Row"+n+" cell1";
  r.insertCell(1).innerHTML="Row"+n+" cell2";
}
