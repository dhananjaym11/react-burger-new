import React from 'react';

const Layout = (props) => (
    <div>
        <header>Header</header>
        <main>
            {props.children}
        </main>
    </div>
)

export default Layout;