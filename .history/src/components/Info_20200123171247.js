import React from 'react';

function Info({info}) {
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Info del Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Logo Artista"/>
                <p className="card-text">
                    Genero: {info.strGenre}
                </p>
                <h2 className="card-text text-center">
                    Biografia
                </h2>
                <p className="card-text">
                {info.strBiographyEN}
                </p>
            </div>
        </div>
    );
}

export default Info;