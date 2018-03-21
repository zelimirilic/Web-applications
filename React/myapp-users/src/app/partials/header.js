import React from "react";
export const Header = (props) => {
  const renderViewIcon = () => {
    return props.stateView ? <i className="material-icons">view_module</i>:<i className="material-icons">view_list</i>
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">React Users</a>
        <ul className="right hide-on-med-and-down">
          <li><a href=""><i className="material-icons">search</i></a></li>
          <li><a onClick={props.onChangeViewClick}>{renderViewIcon()}</a></li>
          <li><a onClick={props.onRefresh}><i className="material-icons">refresh</i></a></li>
          <li><a ><i className="material-icons">more_vert</i></a></li>
        </ul>
      </div>
    </nav>
  )
}






