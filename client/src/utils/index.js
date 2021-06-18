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
