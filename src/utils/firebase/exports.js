const { db } = require('./firebase');
const { doc, setDoc, updateDoc } = require('firebase/firestore');
const {getAllWofTasks} = require("./imports");

async function setAllWofTasks(wheel) {
    for (let i = 0; i < wheel.length; i++) {
        await setDoc(doc(db, "wheel", i.toString()), wheel[i]).then();
    }
    getAllWofTasks(true);
}

async function setYourOwner(user, owner) {

    const userObj = {
        ownerId: owner,
    }
    const userDbRef = doc(db, "users", user)

    await updateDoc(userDbRef, userObj).catch(async (err) => {
        if (err.code === 'not-found') {
            await setDoc(userDbRef, userObj)
        }
    });
}

async function setRules(user) {

    const userObj = {
        rules: {
            1: {
                title: 'Dauer des Locks',
                description: 'Die Dauer des Locks wird nicht beschränkt.',
                subRules: {
                    title: 'A',
                    description: 'Beenden des Locks nur aus gutem Grund.'
                }
            },
            2: {
                title: 'Hygiene',
                description: 'Hygiene ist wichtig, deshalb sollte man alle 2 bis 3 Tage eine Hygieneöffnung machen.',
                subRules: [
                    {
                        title: 'A',
                        description: 'Diese Öffnung sollte nach Möglichkeit unter Beobachtung sein. Erlaubt sind Videos und Live-Session.',
                    },
                    {
                        title: 'B',
                        description: 'Dabei ist keine sexuelle Stimulation erlaubt.'

                    }
                ]
            },
            3: {
                title: 'Orgasmen',
                description: 'Orgasmen bedürfen meiner Zustimmung!',
                subRules: [
                    {
                        title: 'A',
                        description: 'Orgasmen darfst du in der Regel nur bekommen, durch Anale Stimulation oder das Benutzen einer Magic Wand im Cage.'

                    },
                    {
                        title: 'B',
                        description: 'Ein "normaler" Orgasmus durch Wichsen, oder Sex ist nur dann möglich, wenn du ihn dir ausreichend verdient hast. Dieser stellt aber die Ausnahme dar oder kann durch Spiele gestaltet werden.'
                    }
                ]
            },
        }
    }
    const userDbRef = doc(db, "users", user)

    await updateDoc(userDbRef, userObj).catch(async (err) => {
        if (err.code === 'not-found') {
            await setDoc(userDbRef, userObj)
        }
    });
}


module.exports = {
    setAllWofTasks,
    setYourOwner,
    setRules
}