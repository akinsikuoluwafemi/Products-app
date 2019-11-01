import React from 'react';


class Purchase extends React.Component {
  
    render(){
        
        return (
            <div>
                <p>This is how many items you have bought : {this.props.count}</p>
            </div>
        )
    }


}


export default Purchase;