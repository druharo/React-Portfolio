import React from 'react';

function Project(props) {
    return (
        <div className='project'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.image} class="card-img-top" alt={props.name} />
                <div class="card-body">
                    <p class="card-text"><a href={props.deployed}>Deployed</a></p>
                    <p class="card-text"><a href={props.github}>Github</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project;