const {getDocs, collection} = require("firebase/firestore");
const {db} = require("./firebase");

let storage = {
    savedSub: {},
    savedWheel: [],
}


async function getAllWofTasks(forced = false) {
    let allDocs = [];

    if (storage.savedWheel.length === 0 || forced) {
        const querySnapshot = await getDocs(collection(db, "wheel"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            allDocs.push(doc.data())
            //console.log("Document data:", doc.id);
        });
        storage.savedWheel = allDocs;
    } else {
        allDocs = storage.savedWheel;
    }

    return allDocs;
}

async function getAllSubs() {
    let allUser = {};

    if (Object.keys(storage.savedSub).length === 0) {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            allUser[doc.id] = {
                owner: doc.data().ownerId,
                rules: doc.data().rules,
            }

            //console.log("Document id:", doc.id);
        });
        storage.savedSub = allUser;
    } else {
        allUser = storage.savedSub;
    }

    return allUser;
}

async function getAllData() {
    await getAllWofTasks();
    await getAllSubs();
}

module.exports = {
    getAllData,
    storage
}