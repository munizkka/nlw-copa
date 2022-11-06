function creategame(player1,hour,player2) {
  return `
  <li>
  <img src="./assets/icon-${player1}.svg " alt="${player1}"/>
  <strong>${hour}</strong>
  <img src="./assets/icon-${player2}.svg" alt = "${player2}" />

</li>

  `
}

function createcard(date, day,games){
  return `
<div class="card">
      <h2>${date} <span>${day}</span></h2>
 <ul>
      ${games}

      </ul>
     </div>
`
}

document.querySelector('#app').innerHTML=` 
</header>

  <main id="cards">
    ${createcard("20/11"," domingo",creategame("qatar","16:00", "ecuador"))}
    ${createcard("21/11"," segunda",creategame("brazil","16:00", "camaroom")+
    creategame("portugal","10:00", "iran")+
    creategame("senegal","13:00", "holanda")+
    creategame("usa","16:00", "gales")
    )}
    ${createcard("24/11","quinta",creategame("brazil","16:00", "serbia"))} 
    ${createcard("28/11", "segunda",creategame("switzerland","13:00", "brazil")+
      creategame("portugal","16:00", "urugay")
       )}
      ${createcard("02/12"," sexta",creategame("brazil","16:00", "camaroom"))}
        

  </main>

` 