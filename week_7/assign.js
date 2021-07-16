//const profile = 'https://randomuser.me/api/?results=30';
const url = 'https://randomuser.me/api/?results=30';
const main = document.querySelector('main')
async function getUser() {
    //either result or resp or any thing or profile or url
   // let card = m
    //let resp = await fetch(profile);
    let resp = await fetch(url);
    let {results} = await resp.json();
    results.map((result) =>{
        let card = `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${result.picture.large} class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${result.name.first} ${result.name.last} </h5>
              <p class="card-text">${result.email}.</p>
              <p class="card-text"><small class="text-muted">${result.location.city} ${result.location.country}</small></p>
            </div>
          </div>
        </div>
      </div>`;
     // main.appendChild(card);
      main.innerHTML += card;
    });
    console.log(results);
    //let transformedData = await resp.json();
    //console.log(transformedData);
    //console.log(results);
    
}
getUser();