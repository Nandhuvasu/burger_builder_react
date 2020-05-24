import React from 'react';
import wrapper from '../../hoc/wrapper'

const layout = (props) => (
    <wrapper>
        <div>toolbar, side drawer, backdrop</div>
        <main>
            {props.children}
        </main>
    </wrapper>
);
export default layout;