import React from 'react'

class LoggedIn extends React.Component {

    login(e) {
        e.preventDefault()
        this.props.login(this.email.value, this.password.value)
    }


    render() {
        const {reservedToday} = this.props;

        return (
            <div>
                <form>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" ref={(input) => {this.email = input} }/>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" ref={(input) => {this.password = input} }/>
                <button onClick={(e) => this.login(e)}>login</button>
                    </form>
            </div>
        )
    }
}

export default LoggedIn