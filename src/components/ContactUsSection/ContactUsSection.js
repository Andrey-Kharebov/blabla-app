import React, { useState } from 'react'
import { YMaps, Map, Placemark, RoutePanel } from 'react-yandex-maps';
import classes from './ContactUsSection.module.sass';
import myIcon from '../../assets/header/logo.png';

function ContactUsSection() {
  const [mapState, setMapState] = useState({ center: [55.798682, 37.695816], zoom: 1 })
  const placeMark = {
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
  }

  const routePanel = {
    fromEnabled: false,
  }
  
  return (
    <div className={ classes.contactUsSection }>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <div className={ classes.formAndMapSection }>
          <div className={ classes.contactForm }>
            <form>
              <div>
                <input id='name' type='text' placeholder='Your name' name='name' />
              </div>
              <div>
                <input id='emailame' type='text' placeholder='Your email' name='email' />
              </div>
              <div>
                <textarea id='message' type='text' placeholder='Your message' name='message' />
              </div>
              <div>
                <button type='submit'>SUBMIT</button>
              </div>
            </form>
          </div>
          <div className={ classes.map }>
            <div className={ classes.address }>
              <span><i className='fas fa-map-marker-alt'></i> Bla Bla Company 125009 Moscow, Red Square 1</span>
            </div>
            <div className={ classes.mapBlock }>
              <YMaps
                enterprise
                query={{
                  apikey: 'cae785f8-a481-4079-83c3-6b580448bdb1',
                }}
              >
                <Map 
                  width='100%'
                  height='100%'
                  defaultState={ mapState } 
                >
                  <Placemark {...placeMark} />
                  <RoutePanel 
                    options={{ 
                      float: 'left',
                      visible: false
                    }}

                    instanceRef={ref => {
                      if (ref) {
                        ref.routePanel.state.set({
                          fromEnabled: false,
                          from: 'м. Преображенская площадь',
                          toEnabled: false,
                          to: 'Москва, Колодезный переулок, д. 2а',
                          type: 'auto'
                        });
                        
                      }
                    }}
                  />
                  <RoutePanel 
                    options={{ 
                      float: 'right',
                      visible: false,
                    }}

                    instanceRef={ref => {
                      if (ref) {
                        ref.routePanel.state.set({
                          fromEnabled: false,
                          from: 'м. Сокольники',
                          toEnabled: false,
                          to: 'Москва, Колодезный переулок, д. 2а',
                          type: 'auto'
                        });
                      }
                    }}
                  />
                </Map>
              </YMaps>
              {/* <h3>Map</h3> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactUsSection
