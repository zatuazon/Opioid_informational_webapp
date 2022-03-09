import { initializeApp } from 'firebase/app'
import {
    getFirestore, //tpye of database
    collection, //same as a column for mysql 
    onSnapshot, //same as getDocs but it does it without the need to reload page 
    //getDocs,//read documents in collections
    addDoc, // add documents to collections
  } from 'firebase/firestore'
  

const firebaseConfig = {
    apiKey: "AIzaSyBuOmHXmSI6k2uERnSDPeMcz19piu4XvXs",
    authDomain: "opioid-f0673.firebaseapp.com",
    projectId: "opioid-f0673",
    storageBucket: "opioid-f0673.appspot.com",
    messagingSenderId: "42171715859",
    appId: "1:42171715859:web:1e1c2749d0175365de4ae6",
    measurementId: "G-S17FZRWB3Y" // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  };

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'signup-data')

//real time data collection,post automatically to firestore database 
onSnapshot(colRef, (snapshot) => {
    let userdata = []
    snapshot.docs.forEach(doc => {
    userdata.push({ ...doc.data(), id: doc.id })
    })
console.log(userdata)
})

// adding docs(new signups)
const addSignupForm = document.querySelector('.add')
    addSignupForm.addEventListener('submit', (e) => { // e is an object
    e.preventDefault()

    addDoc(colRef, {
        age: addSignupForm.age.value,
        annual_income: addSignupForm.annual_income.value,
        comorbid_conditions: addSignupForm.comorbid_conditions.value,
        current_employment_status: addSignupForm.current_employment_status.value,
        current_health_insurance_status: addSignupForm.current_health_insurance_status.value,
        current_marital_status: addSignupForm.current_marital_status.value,
        education: addSignupForm.education.value,
        ethnicity: addSignupForm.ethnicity.value,
        gender: addSignupForm.gender.value,
        general_self_rated_health: addSignupForm.general_self_rated_health.value,
        health_literacy: addSignupForm.health_literacy.value,
        height: addSignupForm.height.value,
        weight: addSignupForm.weight.value,
       
        social_isolaton_1: addSignupForm.social_isolaton_1.value,
        social_isolaton_2: addSignupForm.social_isolaton_2.value,
        social_isolaton_3: addSignupForm.social_isolaton_3.value,
        social_isolaton_4: addSignupForm.social_isolaton_4.value,
        social_isolaton_5: addSignupForm.social_isolaton_5.value,
        social_isolaton_6: addSignupForm.social_isolaton_6.value,
        social_isolaton_7: addSignupForm.social_isolaton_7.value,
        social_isolaton_8: addSignupForm.social_isolaton_8.value,
        social_isolaton_9: addSignupForm.social_isolaton_9.value,
        social_isolaton_10: addSignupForm.social_isolaton_10.value,
        social_isolaton_11: addSignupForm.social_isolaton_11.value,
        social_isolaton_12: addSignupForm.social_isolaton_12.value,
        social_isolaton_13: addSignupForm.social_isolaton_13.value,
        social_isolaton_14: addSignupForm.social_isolaton_14.value,
        social_isolaton_15: addSignupForm.social_isolaton_15.value,
        social_isolaton_16: addSignupForm.social_isolaton_16.value,
        social_isolaton_17: addSignupForm.social_isolaton_17.value,
        social_isolaton_18: addSignupForm.social_isolaton_18.value,
        social_isolaton_19: addSignupForm.social_isolaton_19.value,
        social_isolaton_20: addSignupForm.social_isolaton_20.value,

        risk_for_opioid_misuse_1: addSignupForm.risk_for_opioid_misuse_1.value,
        risk_for_opioid_misuse_2: addSignupForm.risk_for_opioid_misuse_2.value,
        risk_for_opioid_misuse_3: addSignupForm.risk_for_opioid_misuse_3.value,
        risk_for_opioid_misuse_4: addSignupForm.risk_for_opioid_misuse_4.value,
        risk_for_opioid_misuse_5: addSignupForm.risk_for_opioid_misuse_5.value,
        risk_for_opioid_misuse_6: addSignupForm.risk_for_opioid_misuse_6.value,
        risk_for_opioid_misuse_7: addSignupForm.risk_for_opioid_misuse_7.value,
        risk_for_opioid_misuse_8: addSignupForm.risk_for_opioid_misuse_8.value,
        risk_for_opioid_misuse_9: addSignupForm.risk_for_opioid_misuse_9.value,
        risk_for_opioid_misuse_10: addSignupForm.risk_for_opioid_misuse_10.value,
        risk_for_opioid_misuse_11: addSignupForm.risk_for_opioid_misuse_11.value,
        risk_for_opioid_misuse_12: addSignupForm.risk_for_opioid_misuse_12.value,
        risk_for_opioid_misuse_13: addSignupForm.risk_for_opioid_misuse_13.value,
    })
    .then(() => {
        addSignupForm.reset()//clears the page 
    })
})
