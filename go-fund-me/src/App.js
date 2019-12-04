import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='main-page'>

        <div className='header'>

          <div className='header-text'>
            <h1>GO FUND <div id='me'>ME</div></h1>
            <p>Help me go on a vacation somewhere</p>
          </div>

        </div>
        <div className='body'>

          <div className='body-left'>
            <h6>Recent Donations</h6>
            <ul>
              <li className='donation'>___ donated some money
              <p className='comment'>do you love me</p>
              </li>
              <li className='donation'>___ donated some money
              <p className='comment'>do you love me</p>
              </li><
                li className='donation'>___ donated some money
              <p className='comment'>do you love me</p>
              </li>
              <li className='donation'>___ donated some money
              <p className='comment'>do you love me</p>
              </li>
            </ul>
          </div>

          <div className='body-right'>
            <div id='goal'>
              <h4>Raised $441 of <div id='total'>$1000</div> </h4>
              <div id='progress-bar'>100%</div>
            </div>

            <div id='donation-stage'>
              <form className='donation-form'>
                <p className='label' htmlFor='name'>Name <br></br>
                  <input type='text' placeholder='John Doe' id='input-name' /></p> <br></br>
                <p className='label' htmlFor='comment'>Comment <br></br>
                  <input type='text' placeholder='. . .' id='input-comment' /></p>
                <br></br>
                <button>Donate</button>
              </form>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
