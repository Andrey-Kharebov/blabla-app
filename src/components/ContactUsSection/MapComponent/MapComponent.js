import React, { useState } from 'react';
import classes from './MapComponent.module.sass';
import { YMaps, Map, Placemark, RoutePanel } from 'react-yandex-maps';
import myIcon from '../../../assets/header/logo.png';

function MapComponent() {
  const [mapState] = useState({ center: [55.798682, 37.695816], zoom: 15 })
  const [placeMark] = useState({
    geometry: [55.798682, 37.695816],
    properties: {
      hintContent: 'Москва, Колодезный переулок, д. 2а',
      // balloonContent: 'This is a balloon'
    },
    options: {
      iconLayout: 'default#image',
      iconImageHref: myIcon,
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    },
    modules:  ['geoObject.addon.balloon', 'geoObject.addon.hint'] 
  })
  const [routePanelOpions] = useState({ float: 'left', visible: false });
  const [sokolnikiRoute] = useState({
    fromEnabled: false,
    from: 'м. Сокольники',
    toEnabled: false,
    to: 'Москва, Колодезный переулок, д. 2а',
    type: 'auto'
  })
  const [preobrazenskayaSquare] = useState({
    fromEnabled: false,
    from: 'м. Преображенская площадь',
    toEnabled: false,
    to: 'Москва, Колодезный переулок, д. 2а',
    type: 'auto'
  })

  return (
    <div className={ classes.map }>
      <div className={ classes.address }>
        <span><i className='fas fa-map-marker-alt'></i> Bla Bla Company 125009 Moscow, Red Square 1</span>
      </div>
      <div className={ classes.mapBlock }>
        <YMaps enterprise query={{ apikey: 'cae785f8-a481-4079-83c3-6b580448bdb1' }}>
          <Map width='100%' height='100%' defaultState={ mapState } >
            <Placemark {...placeMark} />
            <RoutePanel options={ routePanelOpions }

              instanceRef={ref => {
                if (ref) {
                  ref.routePanel.state.set(preobrazenskayaSquare);        
                }
              }}
            />
            
            <RoutePanel options={ routePanelOpions }

              instanceRef={ref => {
                if (ref) {
                  ref.routePanel.state.set(sokolnikiRoute);
                }
              }}
            />
          </Map>
        </YMaps>
        {/* <h3>Map</h3> */}
      </div>
    </div>
  )
}

export default MapComponent
