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
      endIndex = 80;
    }

    return array.slice(startIndex, endIndex);
  } else {
    console.log("No cargo el array");
  }
}

module.exports = { generation };
