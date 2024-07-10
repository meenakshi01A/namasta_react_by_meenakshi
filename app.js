import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading=React.createElement("h1",{id:"heading"},"hello world from react");
 const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);



// const parent=React.createElement("div",{id:"parent"},[
//      React.createElement("div",{id:"child"},
//     [
//         React.createElement("h1",{},"this is namasta react "),
//         React.createElement("h2",{},"i m a h2 tag")
//     ]
//     ),
//     React.createElement("div",{id:"child2"},
//     [
//         React.createElement("h1",{},"i m a h1 tag"),
//         React.createElement("h2",{},"i m a h2 tag")
//     ]
//     )]
//     );


const jsxheading =(<h1  className='head'>
    Namasta react using jsx
    </h1>);
root.render(jsxheading);