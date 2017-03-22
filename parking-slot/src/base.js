import Rebase from 're-base';

const base = Rebase.createClass({
    apiKey: "AIzaSyB4sHBXy6bjHMDuOD-J_ZLr_Id4J35XASg",
    authDomain: "parking-slot-app.firebaseapp.com",
    databaseURL: "https://parking-slot-app.firebaseio.com",


})

export function login(email, password) {
    return base.auth().createUserWithEmailAndPassword(email, password).
        catch(function (error) {
        const {code : errorCode, errorMessage} = error
        alert(errorCode)
    })
}

export default base