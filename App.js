/*<div id="parent">
*   <div id="child1">
        <h1> I am an H1 Tag..</h1>
        <h2>I am an h2 tag and sibling of h1 in child 1</h2>
    </div>
    <div id="child2">
        <h2>I am an h2 tag in child2</h2>
         <h2>I am an h2 tag and sibling of h1 in child 2</h2>
    </div>
*</div>
*
*
*
*/

// const heading = React.createElement("h1", 
//     {id: "heading", 
//     xyz: "abc", class: "headingTab"}, "Hello World From React!!")

const parent = React.createElement("div",
    {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, 
        [React.createElement("h1", {}, "I am h1 tag!!"), React.createElement("h2", {}, "I am h2 tag!!")]),
        React.createElement("div", {id: "child1"}, 
        [React.createElement("h1", {}, "I am h1 tag!!"), React.createElement("h2", {}, "I am h2 tag!!")])
    ]
);

// const element = <div id="my-div"><p>Hello this is a div created from react....</p></div>
const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(parent);
root.render(parent)