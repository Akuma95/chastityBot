const breakCommand = {
    description: {
        default: 'Open the Cage for Hygiene or Other Short-Term Breaks.',
        localize: {
            de: 'Öffnet den Cage zur Hygiene oder andere kurzfriste Pausen.'
        }
    },
    initialText: {
        default: 'You are about to open the cage. \n' +
            'You have 30 minutes to do it. \n' +
            'The time ends when the second verification image is uploaded to the corresponding channel.\n' +
            '\n' +
            'As soon as you click on "Open" you will receive a code. With this you verify that you are still in the cage. ' +
            'As soon as the image is uploaded the time runs',
        localize: {
            de: 'Du bist dabei den Cage zu öffnen. \n' +
                'Du hast dafür 30 Minuten Zeit. \n' +
                'Die Zeit endet, sobald das zweite Verifizierungsbild im entsprechenden Channel hochgeladen ist.\n' +
                '\n' +
                'Sobald du auf "Öffnen" klickst erhältst du ein Code. Damit verifizierst du dass du noch im Cage bist. ' +
                'Sobald das Bild hochgeladen ist läuft die Zeit.'
        }
    },
    closingText: {
        default: 'As soon as you click on "Close", you will receive the code to show that you are back in the cage.',
        localize: {
            de: 'Sobald du auf "Schließen" klickst, erhälst du den Code um zu zeigen, dass du wieder im Cage bist.'
        }
    },
    btn1: {
        default: 'Open',
        localize: {
            de: 'Öffnen'
        }
    },
    btn2: {
        default: 'Close',
        localize: {
            de: 'Schließen'
        }
    },
}
const verifyCommand = {
    description: {
        default: 'Generates a 6-Digit code to verify the cage.',
        localize: {
            de: 'Generiert einen sechstelligen Code zum verifizieren des Cages.'
        }
    },
}


module.exports = {
    breakCommand,
    verifyCommand
}