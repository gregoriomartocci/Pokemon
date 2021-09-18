const apiWithTimeout = (request, milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Data fetch failed in 10 seconds"));
    }, milliseconds);

    request.then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

const getEvolutions = (evoData) => {
  var evoChain = [];

  do {
    var evoDetails = evoData["evolution_details"][0];

    evoChain = [
      ...evoChain,
      {
        species_name: evoData.species.name,
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
      },
    ];

    evoData = evoData["evolves_to"][0];
  } while (evoData && evoData.hasOwnProperty("evolves_to"));

  return evoChain;
};

module.exports = { getEvolutions, apiWithTimeout };
