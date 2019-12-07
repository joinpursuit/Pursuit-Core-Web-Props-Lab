import React from 'react';
import './App.css';
import Welcome from './Components/WelcomeBanner'
import Recent from './Components/RecentDonations'
import Progress from './Components/Progress'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"></link>

      <Welcome />
      <div class='container'>
        <div class='row'>
          <Recent />
          <Progress />
        </div>
      </div>


    </div>
  );
}

export default App;
