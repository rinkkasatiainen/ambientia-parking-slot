import React from 'react';

class LoggedIn extends React.Component {

    doLogin(e) {
        e.preventDefault()
        return this.props.login(this.email.value, this.password.value);

    }

    reserve() {
        this.props.reserve()
    }

    render() {
        return (
            <div>
                <form>
                    <input type="email" name="email" placeholder="email" ref={(input) => {this.email = input}} />
                    <input type="password" name="password" placeholder="password" ref={(input) => {this.password = input}} />
                    <button onClick={ (e) => this.doLogin(e) }>Log In</button>
                </form>
            </div>
        )
    }
}

export default LoggedIn
