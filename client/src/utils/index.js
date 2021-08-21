export const paginate = (array, page) => {
  if (array) {
    const limit = 12;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const pagination = {};
    const result = {};
    pagination.actual = page;
    const pageCount = Math.ceil(array.length / limit);

    if (startIndex > 0) {
      pagination.previous = page - 1;
    }

    if (page < pageCount) {
      pagination.next = page + 1;
    }

    if (page !== pageCount) {
      pagination.pageCount = pageCount;
    }
    
    result.pagination = pagination;
    result.result = array.slice(startIndex, endIndex);
    return result;
  } else {
    console.log("No cargo el array");
  }
};

export const filterType = (item, types) => {
  if (!types.length) return true;
  return (
    types.includes(item.types[0]?.name) || types.includes(item.types[1]?.name)
  );
};

export const getChainData = (item, array) => {
  if (array && array.length) {
    return array.includes(item.name);
  }
};

export const searchFilter = (array, searchTearm) => {
  if (searchTearm === "") return array;
  return array.filter((e) =>
    e.name.toLowerCase().includes(searchTearm.toLowerCase())
  );
};

export const keysToLowerCase = (obj) => {
  let key,
    keys = Object.keys(obj);
  let n = keys.length;
  let newobj = {};
  while (n--) {
    key = keys[n];
    newobj[key.toLowerCase()] = obj[key];
  }
  return newobj;
};

export const sort = (array, item) => {
  let newArray = [...array];

  // console.log("ARRAY DE POKEMONS", array);

  // const stat = stats.filter((obj) => {
  //   return obj.name === item;
  // });

  const getStat = (stats) => {
    return stats.find((stat) => stat.name === item).value;
  };

  if (item === "name" || item === "weight" || item === "height") {
    newArray.sort((a, b) => (a[item] < b[item] ? 1 : -1));
    console.log(
      item,
      newArray.map((poke) => poke.stats.find((s) => s[item]))
    );
  } else {
    newArray.sort((a, b) => (getStat(a.stats) < getStat(b.stats) ? 1 : -1));
    console.log(
      item,
      newArray.map((p) => p.stats.find((s) => s.name === item).value)
    );
  }

  return newArray;
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const percentage = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue;
};
