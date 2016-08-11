import React from 'react';
import ReactDOM from 'react-dom';
import MapView from './resources/map/MapView.js';
import LoginView from './resources/authentication/LoginView';
import Header from './resources/headerComponent.js';
import { Provider } from 'react-redux';
import { store } from './Store.js';
import { socket } from './Socket';
import FacebookButton from './resources/authentication/fbookButtonView';
import UploadView from './resources/upload/UploadView';

class Dashboard extends React.Component {

  addMarker(latLong) {
    console.log(latLong);
  }

  render() {
    return (
      <div className="main">
        <div className="headerContainer">
          <Header />
          <div className="fbook-button"><FacebookButton /></div>
        </div>
        <UploadView />
        <div className="container">
          <div className="list">
            <ul>
              <li>I'm Conor</li>
              <li>And I immensely enjoy apps</li>
              <li>Long walks on the beach</li>
              <li>And fruity beverages</li>
            </ul>
          </div>
          <div className="mapContainer"><MapView /></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><Dashboard/></Provider>, document.querySelector('#app'));
