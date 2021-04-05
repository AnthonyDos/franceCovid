let containerDepartement = document.getElementById("container");

function getNom(){
	const param = window.location.search
	const name = param.replace("?Departement=","") 
	if (!name) throw new Error ('il manque le name')
	return name
}
fetch(`https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=${getNom()}`)
.then(response => response.json())
.then(response =>{
    function afficherLesResultats(response) {
        console.log(response.LiveDataByDepartement[0].nom);
        let headerDep = document.createElement('header')
        containerDepartement.appendChild(headerDep)
        headerDep.className = ('headerDep')
        
		let headerDepartement = document.createElement('img');
        headerDep.appendChild(headerDepartement);
        headerDepartement.className= ('headerDepartement');
        headerDepartement.src = './images/virus.jpg'

        let pHeader = document.createElement('p')
        headerDep.appendChild(pHeader)
        pHeader.className= ('paragrapheHeader')
        pHeader.textContent = 'France covid résultat par département'

        let titleDepartement = document.createElement('h2');
        containerDepartement.appendChild(titleDepartement);
        titleDepartement.className= ('titleDepartement');
        titleDepartement.textContent = `Résultat par département : ${response.LiveDataByDepartement[0].nom} `

        let section = document.createElement('section');
        containerDepartement.appendChild(section);
        section.className = ('section');

        let div = document.createElement('div');
        section.appendChild(div);
        div.className = ('blocDepartement')

        let titleBlocDepartement = document.createElement('h2');
        div.appendChild(titleBlocDepartement);
        titleBlocDepartement.className = ('titleDepartement')
        titleBlocDepartement.textContent = `Données statistiques du département ${response.LiveDataByDepartement[0].code}` 

        let divText = document.createElement('div');
        div.appendChild(divText);
        divText.className = ('blocTextDepartement')

        let textDepartementNom = document.createElement('p')
        divText.appendChild(textDepartementNom)
        textDepartementNom.className = ('textDepartement')
        textDepartementNom.textContent = `Nom du département : ${response.LiveDataByDepartement[0].nom}`

        let textDepartementDate = document.createElement('p')
        divText.appendChild(textDepartementDate)
        textDepartementDate.className = ('textDepartement')
        textDepartementDate.textContent = `Date des données : ${response.LiveDataByDepartement[0].date}`;

        let textDepartementHospitalises = document.createElement('p')
        divText.appendChild(textDepartementHospitalises)
        textDepartementHospitalises.className = ('textDepartement')
        textDepartementHospitalises.textContent = `Nombres d'hospitalisés : ${response.LiveDataByDepartement[0].hospitalises}`;

        let textDepartementReanimation = document.createElement('p')
        divText.appendChild(textDepartementReanimation)
        textDepartementReanimation.className = ('textDepartement')
        textDepartementReanimation.textContent = `Nombres en réanimations : ${response.LiveDataByDepartement[0].reanimation}`;

        let textDepartementNouvellesHospitalisations = document.createElement('p')
        divText.appendChild(textDepartementNouvellesHospitalisations)
        textDepartementNouvellesHospitalisations.className = ('textDepartement')
        textDepartementNouvellesHospitalisations.textContent = `Nouvelles hospitalisations : ${response.LiveDataByDepartement[0].nouvellesHospitalisations}`;

        let textDepartementNouvellesReanimations = document.createElement('p')
        divText.appendChild(textDepartementNouvellesReanimations)
        textDepartementNouvellesReanimations.className = ('textDepartement')
        textDepartementNouvellesReanimations.textContent = `Nouvelles réanimations : ${response.LiveDataByDepartement[0].nouvellesReanimations}`;

        let textDepartementDeces = document.createElement('p')
        divText.appendChild(textDepartementDeces)
        textDepartementDeces.className = ('textDepartement')
        textDepartementDeces.textContent = `Personnes décédées en date du  ${response.LiveDataByDepartement[0].date} : ${response.LiveDataByDepartement[0].deces}`;

        let textDepartementGueris = document.createElement('p')
        divText.appendChild(textDepartementGueris)
        textDepartementGueris.className = ('textDepartement')
        textDepartementGueris.textContent = `Nombres de personnes guéris : ${response.LiveDataByDepartement[0].gueris}`;
        

    }
    afficherLesResultats(response)
})
