import React, {Suspense} from 'react';

import Loader from './Loader';

const SuspenseComponent = ({children}) => {
    return(
        <Suspense fallback = {<Loader></Loader>} >
            {children}
        </Suspense>
    )
}

export default SuspenseComponent;