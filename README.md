# France covid
Pour ma partie Front-end j'ai utilisé que le javascript.
Récupération des données pour la France et par département.


## Source de l'api :https://github.com/florianzemma/CoronavirusAPI-France

### GET Toutes les données connues à l'heure actuelles peu importe le département // GET all live data for any departement.
GET "https://coronavirusapi-france.now.sh/AllLiveData"

REMARQUE : les données sont actualisées chaque jours aux alentours de 20h si vous requetez les données pour le jour meme avant 20h vous aurez les données du jour d'avant mais ne vous inquiétez pas tout ceci est automatiquement géré par l'API ;)
NOTE : The data are actualised at 8pm everyday if you request data for today before 8pm you'll get the data for the previous date but don't worry this is handling automatically by the API ;).
EX: Si vous faites cette requete 28/04/2020 avant 20h l'api vous fournira les données du 27/04/2020.

EX: If you request /AllLiveData at 28/04/2020 before 8pm the api will give you the data for the 27/04/2020.

Aujourd'hui : 28/04/2020 11h. Today : 28/04/2020 11am.

Résultats/Results:

{
    "allLiveFranceData": [
        {
            "code": "DEP-01",
            "nom": "Ain",
            "date": "2020-04-27",
            "hospitalises": 162,
            "reanimation": 18,
            "deces": 75,
            "gueris": 237,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        },
        {
            "code": "DEP-02",
            "nom": "Aisne",
            "date": "2020-04-27",
            "hospitalises": 288,
            "reanimation": 38,
            "deces": 200,
            "gueris": 581,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        },    
........... 121

#### GET Toutes les données disponibles pour un département précis peu importe la date // GET all the data for a departement at any date.
GET "https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement={departement}"

EX: GET "https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Rhône"

Liste des départements

Résultats/Results :

{
    "allDataByDepartement": [
        {
            "date": "2020-03-02",
            "source": {
                "nom": "ARS Auvergne-Rhône-Alpes",
                "url": "https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200302_ARSARA_COVID-19_Point_Situation.pdf",
                "archive": "https://web.archive.org/web/20200321171945/https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200302_ARSARA_COVID-19_Point_Situation.pdf"
            },
            "sourceType": "agences-regionales-sante",
            "nom": "Rhône",
            "code": "DEP-69",
            "casConfirmes": 4,
            "deces": 0
        },
        {
            "date": "2020-03-03",
            "source": {
                "nom": "ARS Auvergne-Rhône-Alpes",
                "url": "https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200303_ARSARA_COVID-19_Point_Situation.pdf",
                "archive": "https://web.archive.org/web/20200321171859/https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200303_ARSARA_COVID-19_Point_Situation.pdf"
            },
            "sourceType": "agences-regionales-sante",
            "nom": "Rhône",
            "code": "DEP-69",
            "casConfirmes": 4,
            "deces": 0
        },

......