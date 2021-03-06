import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

export class GoogleMap extends Component {
  render() {
    return (
      <Map style={{ height: "465px" }} google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAckrQeKuv3MD17j_R3WuLAu7W-kaamiJY",
})(GoogleMap);
