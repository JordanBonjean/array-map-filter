/* Array.prototype.map - Exercice 3

Ecrire une fonction getMoviesFreshness qui reçoit comme un argument un tableau
d'objets représentant des films.
Chaque film a deux propriétés:
  - `name` le nom du film
  - `rating` la note qui lui attribuée sur le site rottentomatoes.com

La fonction getMoviesWithFreshness doit renvoyer un tableau contenant les objets du tableau
d'entrée, auxquels on aura ajouté une propriété, dont la clé sera label, et la valeur,
une chaîne, dépendante de la valeur de rating :

* Si `rating` est infériéur à 60, la valeur à attribuer à label sera "rotten".
* Si `rating` est compris entre 60 et 75 (inclus), la valeur à attribuer à label sera "fresh".
* Si `rating` est supérieur à 75, la valeur à attribuer à label sera "certified fresh".

Exemple d'entrée:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]
En sortie:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93,
      label: 'certified fresh'
    },
    {
      name: 'Skyscraper',
      rating: 46,
      label: 'rotten'
    },
    {
      name: 'Leave No Trace',
      rating: 100,
      label: 'certified fresh'
    },
    {
      name: 'White Boy Rick',
      rating: 60,
      label: 'fresh'
    }
  ]

 */
// const movies =   [
//   {
//     name: 'Crazy Rich Asians',
//     rating: 93
//   },
//   {
//     name: 'Skyscraper',
//     rating: 46
//   },
//   {
//     name: 'Leave No Trace',
//     rating: 100
//   },
//   {
//     name: 'White Boy Rick',
//     rating: 60
//   }
// ];

// const getMoviesFreshness = (movies) => {
//  return movies.map((parameter) => {
//   if (parameter.rating < 60) {
//      parameter.label = "rotten"
//      return parameter  
//   } else if (parameter.rating >= 60 && parameter.rating <= 75) {
//      parameter.label = "fresh"
//      return parameter  
//     } else {
//       parameter.label = "certified fresh";
//       return parameter  
//     }
// })};
// console.log(getMoviesFreshness(movies));

function getMoviesFreshness(movies) {
  const movie = movies.map(function(parameter){
    if (parameter.rating < 60) {
      parameter.label = "rotten"
      return parameter
    } else if (parameter.rating >= 60 && parameter.rating <= 75) {
      parameter.label = "fresh"
      return parameter
    } else {
      parameter.label = "certified fresh";
      return parameter
    }
  })
  return movie
}

// Ne pas modifier l'export
module.exports = getMoviesFreshness;
