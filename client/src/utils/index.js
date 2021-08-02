export const paginate = (array, page) => {
  if (array) {
    const limit = 12;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const pagination = {};
    const result = {};
    pagination.actual = page;

    if (startIndex > 0) {
      pagination.previous = page - 1;
    }

    if (endIndex < array.length) {
      pagination.next = page + 1;
    }
    pagination.pageCount = Math.ceil(array.length / limit);
    result.pagination = pagination;
    result.result = array.slice(startIndex, endIndex);
    return result;
  } else {
    console.log("No cargo el array");
  }
};

export const filterType = (item, types) => {
  if (!types.length) return true;
  return types.includes(item.types[0].type.name || item.types[1]?.type.name);
};

export const getChainData = (item, array) => {
  if (!array.length) return true;
  return array.includes(item.name);
};

export const searchFilter = (array, searchTearm) => {
  if (searchTearm === "") return array;
  return array.filter((e) =>
    e.name.toLowerCase().includes(searchTearm.toLowerCase())
  );
};

export const sort = (array, item) => {
  array = [...array];

  if (item === "name" || item === "weight" || item === "height") {
    return array.sort((a, b) => (a[item] < b[item] ? 1 : -1));
  } else {
    return array.sort((a, b) =>
      a.stats.some((stat) => stat.name === item).base_stat <
      b.stats.some((stat) => stat.name === item).base_stat
        ? 1
        : -1
    );
  }
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const percentage = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue;
};
