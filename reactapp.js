
// const heading = React.createElement("h1",{id:'headingobj'},"Hello from React")
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


 const innerEle = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:'heading'},"I am h1 from first child div")
    ]),
    React.createElement("div",{id:'secondchild'},[
        React.createElement("h2",{id:'heading2'},"I am h2 from second child div")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(innerEle);