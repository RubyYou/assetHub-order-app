
import firebase from 'firebase'
import store from '../store/index'

const config = {
    apiKey: "AIzaSyABzMG21mytB-OW1mv37Rfh4tdpvSLaunQ",
    authDomain: "torrid-inferno-9944.firebaseapp.com",
    databaseURL: "https://torrid-inferno-9944.firebaseio.com",
    projectId: "torrid-inferno-9944",
    storageBucket: "torrid-inferno-9944.appspot.com",
    messagingSenderId: "836178416951"
};

const workOrderDB = "carehub";  // TODO: need to change data base key node
const materialDB = "material";

class Loader {

    constructor()
    {
        firebase.initializeApp(config);
        this._storage = firebase.storage().ref();
        this._workOrderDB = firebase.database().ref(workOrderDB); 
        this._materialDB = firebase.database().ref(materialDB);
        this._init ();
    }

    _init ()
    {
        var databaseRef = firebase.database().ref();
        
        databaseRef.child(workOrderDB).on('value', (snapshots) => { 
            let items = [];
            console.log('done workOrderDB snapshot', snapshots.val());
            snapshots.forEach( snap => {
                var data = Object.assign ({}, snap.val(), {key: snap.key});
                items.push (data);
            });
            store.commit('setWorkOrders', items);
        });
        
        databaseRef.child(materialDB).on('value', (snapshots) => { 
            let materials = [];
            console.log('done material snapshot', snapshots.val());
            snapshots.forEach( snap => {
                var data = Object.assign ({}, snap.val(), {key: snap.key});
                materials.push(data);
            });
            store.commit('setMaterials', materials);
        });        
    }

    addNewWorkOrder (payload, callback)
    {
        this._workOrderDB.push (payload).then (function () {
            console.log ('updatePayload, finished');
            callback ();
        });
    }

    updateWorkOrder (key, payload, callback)
    {
        firebase.database().ref (workOrderDB + "/" + key).set (payload).then (function () {
            callback ();
        });
    }

    deleteWorkOrder (key, callback)
    {
        this._workOrderDB.child(key).remove(()=> {
            console.log ('delete finish', key);
            callback ();
        });
    }

    // addProject (name, callback)
    // {
    //     const payload = {
    //         name: name,
    //         lastUpdate: new Date ().getTime ()
    //     };
    //     this._projectDB.push(payload).then(function (){
    //         callback();
    //     });
    // }

    // updateProject (key, value)
    // {
    //     const payload = {
    //         name: value,
    //         lastUpdate: new Date ().getTime ()
    //     };
    //     console.log(payload);
    //     firebase.database().ref("projects/" + key).set(payload).then (function(){
    //         alert ('儲存完成');
    //     });
    // }

    // deleteProject (key, callback)
    // {
    //     this._projectDB.child(key).remove(()=> {
    //         alert ('刪除成功');
    //         callback ();
    //     });
    // }

    // getDownloadLink (imageUrl) {
    //     return this._storage.child (imageUrl).getDownloadURL();
    // }
}

export default new Loader ();