import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Some Comment" image={faker.image.image()}/>
            <CommentDetail author="Joe" timeAgo="Today at 1:30PM" comment="Another Comment" image={faker.image.image()}/>
            <CommentDetail author="Paul" timeAgo="Yesterday at 1:00AM" comment="Even more comments" image={faker.image.image()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));