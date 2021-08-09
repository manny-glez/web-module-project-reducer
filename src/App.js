import React, { useReducer } from 'react';
import reducer, { initialState } from "./reducers";

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

// import { addOne } from "./actions";
import { applyNumber, changeOp, clearDisplay, addToMemory, useMemory, deleteMemory } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handeleAddOne = () => {
  //   dispatch(addOne())
  // }

  const handeleAll = num => {
    dispatch(applyNumber(num))
  }

  const handeleOpChange = (operation) => {
    dispatch(changeOp(operation))
  }

  const handleReset = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryAdd = () => {
    dispatch(addToMemory())
  }

  const HandleUsingMemory = () => {
    dispatch(useMemory())
  }

  const handleDeleteMemory = () => {
    dispatch(deleteMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick={HandleUsingMemory}/>
              <CalcButton value={"MC"} onClick={handleDeleteMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handeleAll(1)} />
              <CalcButton value={2} onClick={() => handeleAll(2)} />
              <CalcButton value={3} onClick={() => handeleAll(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handeleAll(4)} />
              <CalcButton value={5} onClick={() => handeleAll(5)} />
              <CalcButton value={6} onClick={() => handeleAll(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handeleAll(7)} />
              <CalcButton value={8} onClick={() => handeleAll(8)} />
              <CalcButton value={9} onClick={() => handeleAll(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handeleOpChange("+")} />
              <CalcButton value={"*"} onClick={() => handeleOpChange("*")} />
              <CalcButton value={"-"} onClick={() => handeleOpChange("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleReset}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
