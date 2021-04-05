let container = document.getElementById("list");

fetch('https://coronavirusapi-france.now.sh/FranceLiveGlobalData')
.then(function(response){                   
    return response.json()
  })
.then(function(response2){
    console.log(response2.FranceGlobalLiveData)
    for(let element of response2.FranceGlobalLiveData){
        const titleFrance = document.createElement('h2');
        container.appendChild(titleFrance);
        titleFrance.className= ('titleFrance');
        titleFrance.textContent = 'Résultat statistique de la france entière'
        const info = document.createElement('div');
        container.appendChild(info);
        info.className = ('info');

        const blocStat = document.createElement('div');
        info.appendChild(blocStat);
        blocStat.className = ('blocStat');

        const table = document.createElement('table');
        blocStat.appendChild(table);
        table.className = ('table')

        const thead = document.createElement('thead');
        table.appendChild(thead);
        thead.className = ('thead');

        const tr = document.createElement('tr');
        thead.appendChild(tr);
        tr.className = ('tr');

        const th = document.createElement('th');
        tr.appendChild(th);
        th.className = ('th');
        
        const title = document.createElement('h2');
        th.appendChild(title);
        title.textContent = 'Données statistiques sur le coronavirus en France';
        title.className = ('title')

        const tbody = document.createElement('tbody');
        th.appendChild(tbody);
        tbody.className = ('tbody');

        const trCol = document.createElement('tr');
        tbody.appendChild(trCol);
        trCol.className = ("colonneInfo");

        const blocColonne = document.createElement('div');
        trCol.appendChild(blocColonne);
        blocColonne.className = ('blocColonne');

        const tdCol = document.createElement('td');
        blocColonne.appendChild(tdCol);
        tdCol.className = ("tdCol");
        tdCol.textContent = "Code pays : " ;

        const tdCode = document.createElement('td');
        blocColonne.appendChild(tdCode);
        tdCode.className = ("tdCode");
        tdCode.textContent = element.code;
        
        const blocColonne2 = document.createElement('div');
        trCol.appendChild(blocColonne2);
        blocColonne2.className = ('blocColonne2');

        const tdColNameCountry = document.createElement('td');
        blocColonne2.appendChild(tdColNameCountry);
        tdColNameCountry.className = ("tdColNameCountry");
        tdColNameCountry.textContent = "Nom du pays : "  ;

        const tdName = document.createElement('td');
        blocColonne2.appendChild(tdName);
        tdName.className = ("tdName");
        tdName.textContent = element.nom;

        const blocColonne3 = document.createElement('div');
        trCol.appendChild(blocColonne3);
        blocColonne3.className = ('blocColonne3');

        const date = document.createElement('td');
        blocColonne3.appendChild(date);
        date.className = ("td_date");
        date.textContent = "Date : "  ;

        const tdDate = document.createElement('td');
        blocColonne3.appendChild(tdDate);
        tdDate.className = ("tdDate");
        tdDate.textContent = element.date;

        const blocColonne4 = document.createElement('div');
        trCol.appendChild(blocColonne4);
        blocColonne4.className = ('blocColonne4');

        const hospitalises = document.createElement('td');
        blocColonne4.appendChild(hospitalises);
        hospitalises.className = ("hospitalises");
        hospitalises.textContent = "Hospitalisés : "  ;

        const tdHospitalises = document.createElement('td');
        blocColonne4.appendChild(tdHospitalises);
        tdHospitalises.className = ("tdHospitalises");
        tdHospitalises.textContent = element.hospitalises;

        const blocColonne5 = document.createElement('div');
        trCol.appendChild(blocColonne5);
        blocColonne5.className = ('blocColonne5');

        const reanimation = document.createElement('td');
        blocColonne5.appendChild(reanimation);
        reanimation.className = ("reanimation");
        reanimation.textContent = "Réanimation : "  ;

        const tdReanimation = document.createElement('td');
        blocColonne5.appendChild(tdReanimation);
        tdReanimation.className = ("tdReanimation");
        tdReanimation.textContent = element.reanimation;

        const blocColonne6 = document.createElement('div');
        trCol.appendChild(blocColonne6);
        blocColonne6.className = ('blocColonne6');

        const nouvellesHospitalisations = document.createElement('td');
        blocColonne6.appendChild(nouvellesHospitalisations);
        nouvellesHospitalisations.className = ("nouvellesHospitalisations");
        nouvellesHospitalisations.textContent = "Nouvelles hospitalisations : "  ;

        const tdnouvellesHospitalisations = document.createElement('td');
        blocColonne6.appendChild(tdnouvellesHospitalisations);
        tdnouvellesHospitalisations.className = ("tdnouvellesHospitalisations");
        tdnouvellesHospitalisations.textContent = element.nouvellesHospitalisations;

        const blocColonne7 = document.createElement('div');
        trCol.appendChild(blocColonne7);
        blocColonne7.className = ('blocColonne7');

        const nouvellesReanimations = document.createElement('td');
        blocColonne7.appendChild(nouvellesReanimations);
        nouvellesReanimations.className = ("nouvellesReanimations");
        nouvellesReanimations.textContent = "Nouvelles reanimations : "  ;

        const tdNouvellesReanimations = document.createElement('td');
        blocColonne7.appendChild(tdNouvellesReanimations);
        tdNouvellesReanimations.className = ("tdnouvellesReanimations");
        tdNouvellesReanimations.textContent = element.nouvellesReanimations;

        const blocColonne8 = document.createElement('div');
        trCol.appendChild(blocColonne8);
        blocColonne8.className = ('blocColonne8');

        const deces = document.createElement('td');
        blocColonne8.appendChild(deces);
        deces.className = ("deces");
        deces.textContent = "Décés : "  ;

        const tdDeces = document.createElement('td');
        blocColonne8.appendChild(tdDeces);
        tdDeces.className = ("tdDeces");
        tdDeces.textContent = element.deces;     
        
        const blocColonne9 = document.createElement('div');
        trCol.appendChild(blocColonne9);
        blocColonne9.className = ('blocColonne9');

        const gueris = document.createElement('td');
        blocColonne9.appendChild(gueris);
        gueris.className = ("gueris");
        gueris.textContent = "Gueris : "  ;

        const tdGueris = document.createElement('td');
        blocColonne9.appendChild(tdGueris);
        tdGueris.className = ("tdGueris");
        tdGueris.textContent = element.gueris; 
        
        const blocSource =document.createElement('div');
        blocSource.className = ('blocSource');
        container.appendChild(blocSource)

        const source = document.createElement('p');
        source.className = ('source');
        blocSource.appendChild(source);
        source.textContent = `source : ${element.source.nom}`
    }
})
fetch('https://coronavirusapi-france.now.sh/AllLiveData')
.then(function(response){
    console.log(response)
    return response.json()  
})
.then(function(allLiveFranceData){
    console.log(allLiveFranceData.allLiveFranceData[1].nom)
    let blocDepartementHome = document.querySelector('.blocDepartementHome');
    let select = document.createElement('select')
    blocDepartementHome.appendChild(select)
    
    
    for(let res of allLiveFranceData.allLiveFranceData){        
        console.log(res);
        console.log(res.nom)
        let option = document.createElement('option');
        select.appendChild(option);
        option.innerHTML = res.nom;
        select.setAttribute('value',allLiveFranceData.allLiveFranceData[0].nom)
        console.log(select.setAttribute)
        select.allLiveFranceData = ('value',res.value); 
        console.log(select.res)

    }
    let button = document.createElement('button');
    blocDepartementHome.appendChild(button);
    button.className = ('btn-departement');
    button.addEventListener('click',envoidunom)
    button.textContent = 'Sélectionner'
    function envoidunom(){
        select = select.value
        button.innerHTML = `<a class="lien" href="./departement.html?Departement=${select}" >Voir les résultats</a>`
        localStorage.setItem('nom',select) 
    }
})