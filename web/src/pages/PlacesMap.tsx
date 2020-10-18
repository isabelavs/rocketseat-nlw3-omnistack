import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/pages/places-map.css';

interface Place {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function PlacesMap() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    api.get('places').then(response => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy logo"/>

          <h2>Escolha um lugar no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        center={[-25.436214, -49.274571]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {places.map(place => {
          return (
            <Marker
              key={place.id}
              icon={mapIcon}
              position={[place.latitude, place.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {place.name}
                <Link to={`/places/${place.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/places/create" className="create-place">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default PlacesMap;
