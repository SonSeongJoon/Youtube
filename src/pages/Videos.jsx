import React from 'react';
import {useParams} from "react-router-dom";

export function Videos() {
    const {keyword} = useParams();
    return (
        <div>
            Videos {keyword ? `${keyword}` : null}
        </div>
    )
}