import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="Joe" />
            <CommentDetail author="Paul" />
            <CommentDetail author="John" />
            <CommentDetail author="Mark" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));