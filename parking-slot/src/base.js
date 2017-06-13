import Rebase from 're-base'
import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyB4sHBXy6bjHMDuOD-J_ZLr_Id4J35XASg",
  authDomain: "parking-slot-app.firebaseapp.com",
  databaseURL: "https://parking-slot-app.firebaseio.com",
});

const base = Rebase.createClass(app.database());

export function makeReservation() {
  console.log('reserved')
}

export function login(email, password) {
                console.log( email, password )
	return app.auth().signInWithEmailAndPassword(email, password).
		then( (result) => {
			const uid = result.uid
			return {uid}
  		}). 
		catch((error) => {
			return { error }
		})
}
