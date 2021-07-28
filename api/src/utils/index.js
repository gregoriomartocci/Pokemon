function generation(array, gen) {
  // page = 3 // page = 5

  let startIndex;
  let endIndex;

  if (array) {
    if (!gen) {
      gen = 1;
    }

    if (gen === 1) {
      startIndex = 0;
      endIndex = 20;
    }

    return array.slice(startIndex, endIndex);
  } else {
    console.log("No cargo el array");
  }
}

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

module.exports = { generation, getEvolutions };
