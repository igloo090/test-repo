'use strict';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Component</h1>
            </div>
        );
    }
}


ReactDOM.render(
    <Hello />, 
    document.getElementById("root")
);
