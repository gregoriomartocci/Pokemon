import React, { useEffect, useState } from "react";
import "./MobileMenu.css";
import { IoCloseSharp } from "react-icons/io5";
import Accordion from "../Accordion/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { sortItems, generationsItems } from "../Menu/Menu";
import {
  clearFilters,
  filterByGen,
  filterByType,
  getGen,
  sortBy,
} from "../../redux/actions";
import Alert from "../Alert/Alert";
import Toggle from "../Toggle/Toggle";
import Modal from "../Modal/Modal";

function MobileMenu({ setActive, active }) {
  // redux
  const types = useSelector((state) => state.rootReducer.types.data);
  const pokemons = useSelector((state) => state.rootReducer.pokemons.data);
  const loaded = useSelector((state) => state.rootReducer.loaded);
  const loading = useSelector((state) => state.rootReducer.loading);
  const error = useSelector((state) => state.rootReducer.allPokemons.error);
  // state
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState([]);
  const [lastRequest, setLastRequest] = useState([1, 151]);
  const [generation, setGeneration] = useState([
    { id: 1, name: "I", value: [1, 151], loaded: true },
  ]);
  const [open, setOpen] = useState({ filter: false, sort: false, gen: false });
  const dispatch = useDispatch();

  useEffect(() => {
    var array = [];
    filter.map((e) => (array = [...array, e.name.toLowerCase()])); // aca reemplazo el arreglo
    if (loaded && !loading) {
      pokemons && dispatch(filterByType(array));
    }
    return () => {};
  }, [filter]);

  useEffect(() => {
    if (loaded && !loading) {
      sort[0] && dispatch(sortBy(sort[0].value));
    }
    return () => {};
  }, [sort]);

  useEffect(() => {
    if (loaded && !loading) {
      // si la app no esta cargando y ya se cargo todo

      generation.map((g) =>
        g.loaded === false
          ? pokemons &&
            dispatch(getGen(g.value)) &&
            (g.loaded = true) &&
            setLastRequest(g.value)
          : dispatch(filterByGen(generation))
      );
    }

    // por cada posicion en el arreglo tengo que checkear que todos los ids estan entre la generacion que vino
  }, [generation]);

  const onClickHandler = () => {
    dispatch(clearFilters());
    setSort([]);
    setFilter([]);
  };

  const handleModal = () => {
    setActive((prev) => !prev);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {error && <Alert req={lastRequest} />}
      {active ? <div className={"mobile-menu-container"}></div> : null}
      <div className={`${!active ? "mobile-menu" : "active-mobile-menu"}`}>
        <i
          className="mobile-menu-cancel"
          onClick={() => setActive((prev) => !prev)}
        >
          <IoCloseSharp />
        </i>
        <ul className="mobile-menu-options">
          <li>
            <Accordion
              title="FILTER"
              elements={types?.length && types}
              selection={filter}
              setSelection={setFilter}
              open={open}
              setOpen={setOpen}
              value="filter"
            />
          </li>
          <li>
            <Accordion
              title="SORT"
              elements={sortItems}
              selection={sort}
              setSelection={setSort}
              open={open}
              setOpen={setOpen}
              value="sort"
            />
          </li>
          <li>
            <Accordion
              title="GENERATION"
              elements={generationsItems}
              selection={generation}
              setSelection={setGeneration}
              open={open}
              setOpen={setOpen}
              value="gen"
            />
          </li>
          <li className="mobile-menu-option">
            <Toggle op1="API" op2="DB" mobile={true} />
          </li>
          <li className="mobile-menu-option" onClick={() => onClickHandler()}>
            Reset Filters
          </li>
          <li className="mobile-menu-option">
            <div
              className="mobile-menu-option-create"
              onClick={() => handleModal()}
            >
              Create
            </div>
          </li>
        </ul>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default MobileMenu;
