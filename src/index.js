import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import './App.css'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning?</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
               <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Some Comment" image={faker.image.image()}/> 
            </ApprovalCard>
            <ApprovalCard><CommentDetail author="Joe" timeAgo="Today at 1:30PM" comment="Another Comment" image={faker.image.image()}/></ApprovalCard>
            <ApprovalCard><CommentDetail author="Paul" timeAgo="Yesterday at 1:00AM" comment="Even more comments" image={faker.image.image()}/></ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));