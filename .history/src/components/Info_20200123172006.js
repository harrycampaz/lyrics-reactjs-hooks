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
                <p className="card-text">
                    <a href={`http://${info.strFacebook}`}>
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href={`http://${info.strTwitter}`}>
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href={`http://${info.strLastFMChart}`}>
                        <i class="fab fa-lastfm" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Info;