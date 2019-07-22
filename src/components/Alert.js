import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
          <div>
            <div className="alert alert-success" role="alert">
              ¡Tus archivos estan<strong> bien </strong>nombrados!
            </div>
          </div>
        );
    }
}
