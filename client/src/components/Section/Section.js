/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination.js";
import Cards from "../Cards/Cards";
import { paginate } from "../../utils/index.js";
import { useDispatch, useSelector } from "react-redux";
import { setUp } from "../../redux/actions/index.js";
import Loading from "../Loading/Loading";

function Section() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.rootReducer.pokemons.data);
  const loading = useSelector((state) => state.rootReducer.loading);
  const loaded = useSelector((state) => state.rootReducer.loaded);

  var pokemons;

  if (data) {
    pokemons = paginate(data, page);
  }

  useEffect(() => {
    if (!loaded) {
      dispatch(setUp());
    }
    return () => {};
  }, []);

  useEffect(() => {
    setPage(1);
  }, [data]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <Cards data={pokemons?.result} />
          <Pagination
            pagination={pokemons?.result.length && pokemons?.pagination}
            setPage={setPage}
            page={page}
          />
        </div>
      )}
    </div>
  );
}

export default Section;
