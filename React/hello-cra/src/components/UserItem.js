import React from 'react';

const UserItem=  (props) => {
    const { user } = props;
    const { name, email, dob, picture } = user;
    const { title, first, last } = name;

    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={picture.medium} />
                    <span className="card-title">`{title} {first} {last}`</span>
                </div>
                <div className="card-content">
                    <p>{email}</p>
                    <p>`Date of birth:{dob}`</p>

                </div>
                <div className="card-action">
                    <a href="#"></a>
                </div>
            </div>
        </div>
    )
}

export default UserItem