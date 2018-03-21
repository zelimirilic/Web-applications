import React from "react"



export const Grid = (props) => {
    const userDateOfBirth = props.user.dateOfBirth;
    const formatedEmail = props.user.email;
    const gender = props.user.gender;

    const checkGender = () => {
        return gender === 'female' ? 'card red lighten-5' : 'card'
    }
    


    const formatDate = (date) => {
        const newDate = new Date(date)
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const formatedDate = `${day}.${month}.${year}.`
        return formatedDate
    }
    const hideEmail = (email) => {
        var part1 = email.slice(3, email.indexOf("@") - 3);
        var hidden = email.replace(part1, "...");
        return hidden;
    }

    return (
        <div className="col s4">
            <div className={checkGender()}>
                <div className="card-image">
                    <img src={props.user.picture} alt={props.user.name} />
                    <span className="card-title">{props.user.name}</span>
                </div>
                <div className="card-content">
                    <p>Email: {hideEmail(formatedEmail)}</p>
                    <p>Date of birth: {formatDate(userDateOfBirth)}</p>
                </div>
            </div>
        </div>
    )
}


