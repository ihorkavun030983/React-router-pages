import React from 'react';
import { useParams } from 'react-router-dom';


function CatName() {
const params = useParams();
console.log(params)

    return ( 
        <>CatName: {params.catName}</>
     );
}

export default CatName;