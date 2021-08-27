// Paginate

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
    result.result = array?.slice(startIndex, endIndex);
    return result;
  } else {
    console.log("No cargo el array");
  }
};

// Filter by Type

export const filterType = (item, types) => {
  if (!types.length) return true;
  return (
    types.includes(item.types[0]?.name) || types.includes(item.types[1]?.name)
  );
};

// get Chain

export const getChainData = (item, array) => {
  if (array && array.length) {
    return array.includes(item.name);
  }
};

// Perform Search

export const searchFilter = (array, searchTearm) => {
  if (searchTearm === "") return array;
  return array?.filter((e) =>
    e.name.toLowerCase().includes(searchTearm.toLowerCase())
  );
};

// KeystoLowerCase

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

// Gen Filtering

export const genFiltering = (array, gens) => {
  let pokemons = [];

  const sort = gens.sort((a, b) => a.id - b.id);

  if (array) {
    if (sort.length > 1) {
      sort.map(
        (g) =>
          (pokemons = [
            ...pokemons,
            ...array.filter((p) => p?.id >= g.value[0] && p?.id <= g.value[1]),
          ])
      );
      return pokemons;
    } else {
      return array.filter(
        (p) => p.id >= gens[0]?.value[0] && p?.id <= gens[0].value[1]
      );
    }
  }
};

// Sort

export const sort = (array, item) => {
  let newArray = [...array];

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

// Capitalize

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// only DB

export const onlyDB = (id) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    id
  );
};

// only API

export const onlyAPI = (id) => {
  return !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    id
  );
};

// get Percentage

export const percentage = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue;
};
