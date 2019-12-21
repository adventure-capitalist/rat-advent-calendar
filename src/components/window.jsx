import React, { Component } from 'react';
class Window extends Component {
    state = {  }

    getCSS = (day) => {
        var date = new Date();
        if(day <= date.getDate() && date.getMonth() == 11 && this.props.clicked == true) {
            return "open-window";
        } 
        return "closed-window"
      };

    render() { 
    return ( <div onClick={() => this.props.clickHandler(this.props.index)} className="window"><img alt={this.props.alt} className={this.getCSS(this.props.day)} alt={this.props.alt} src={this.props.image}/><p>{this.props.day}</p></div>
             );
    }
}


export default Window;