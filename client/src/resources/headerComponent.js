import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import UploadButton from './upload/UploadButton.js';
import Logout from './authentication/LogoutButton.js';
import ColorPickerButton from './colorPicker/ColorPickerButton.js';
import { connection } from './headerState.js';

class headerComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <img src="./../assets/logo.png" role="presentation" className="logo" />
        <ButtonToolbar className="headerButtonToolbar buttonToolbar">
          <ColorPickerButton class="headerColorButton" />
          <UploadButton text="Art Library" />
          <Logout />
        </ButtonToolbar>
        <h1><i>Emblem</i></h1>
      </div>
    );
  }
}

export default connection(headerComponent);
