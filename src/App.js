import  'bootstrap/dist/js/bootstrap.min.js'
import  'bootstrap/dist/css/bootstrap.min.css'
import Alert from './components/Alert'
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
          <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Ligas SIPOT</h1>
              <p className="lead">
                Este portal te ayudará a solicitar corrcetamnte la carga
                de tus archivos al servidor de Transparencia
              </p>
            </div>
          </div>
        );
    }
}
