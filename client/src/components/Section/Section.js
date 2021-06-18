import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination.js";
import Cards from "../Cards/Cards";
import { paginate } from "../../utils/index.js";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../../redux/actions/index.js";

function Section() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.rootReducer.pokemons.data);

  useEffect(() => {
    return () => {};
  }, []);

  console.log("actual page", page);

  var pokemons;

  if (data) {
    pokemons = paginate(data, page);
  }

  useEffect(() => {
    dispatch(setPokemons());
    // return () => console.log("cleanup");
  }, []);

  return (
    <div>
      <Cards data={pokemons.result} />
      <Pagination pagination={pokemons.pagination} setPage={setPage} />
    </div>
  );
}

export default Section;
