import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
    return (
        <div>
            <h2>Página no encontrada </h2>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    );
}