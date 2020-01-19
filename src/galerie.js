import React from 'react';

const galerie = props =>{
    return(<div>
        <div class="discription-container">
            <h1 class="h2-dicrpt">Improve the lives of millions. Change yours forever</h1>
            <p class="p-discrpt">More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
        </div>
        <div class="galerie">
            {props.galerie.map(el => <div class="galerie-part">
                <img alt='pic' class="galerie-img" src={el.image} />
                <div class="galerie-soustitre">
                    <h4 class="galerie-h4">{el.city}</h4>
                    <button>SEE OPENINGS</button>
                    </div>
                </div>)}
        </div>
        </div>)
}

export default galerie