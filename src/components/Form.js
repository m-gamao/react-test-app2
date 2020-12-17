import React from 'react';

function Form( props ) {
    console.log(props)
    const order = props.orderFood + props.customerName + "1";
    return (
        <div>
            <h4>{order}</h4>

            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="name">Menu Item:</label>
                    <input className="userForm" type="text" name="menu-item" id="menu-item"></input><br></br>
                </div>

                <div>
                    <label htmlFor="name">Quantity:</label>
                    <input type="text" name="quantity" id="quantity"></input><br></br>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;