import React, { useReducer } from 'react';
import reducer from './reducers/index'
import { initialState } from "./reducers/index";
// import { addOne, addTwo } from "./actions";
import { applyNumber, changeOperation, resetDisplay, addMemory, applyMemory, clearMemory } from "./actions";
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const[state, dispatch] = useReducer(reducer, initialState);

  // const handleChange1  = () => {
  //   dispatch(addOne());
  //   // dispatch(applyNumber());
  // }

  // const handleChange2 = () => {
  //   dispatch(addTwo());
  // }
  
  const handleChange = (num) => {
    dispatch(applyNumber(num));
  }

  const handleOperationChange = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleReset = () => {
    dispatch(resetDisplay())
  }

  const handleAddingMemory = () => {
    dispatch(addMemory())
  }

  const handleApplyMemory = () => {
    dispatch(applyMemory())
  }

  const handleMemoryClear = () => {
    dispatch(clearMemory())
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
              <CalcButton value={"M+"} onClick={handleAddingMemory}/>
              <CalcButton value={"MR"} onClick={handleApplyMemory}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleChange(1)}/>
              <CalcButton value={2} onClick={() => handleChange(2)}/>
              <CalcButton value={3} onClick={() => handleChange(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleChange(4)}/>
              <CalcButton value={5} onClick={() => handleChange(5)}/>
              <CalcButton value={6} onClick={() => handleChange(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleChange(7)}/>
              <CalcButton value={8} onClick={() => handleChange(8)}/>
              <CalcButton value={9} onClick={() => handleChange(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperationChange('+')}/>
              <CalcButton value={"*"} onClick={() => handleOperationChange('*')}/>
              <CalcButton value={"-"} onClick={() => handleOperationChange('-')}/>
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
