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
const wofCommand = {
    description: {
        default: 'Turn the WoF and choose a task for yourself or your sub.',
        localize: {
            de: 'Dreht das WoF und wählt eine Aufgabe für sie selbst oder deinen Sub aus.'
        }
    },
    userOption: {
        description: {
            default: 'Turn the WoF for your sub.',
            localize: {
                de: 'Dreht das WoF für deinen Sub.'
            }
        }
    },
    error: {
        default: 'You are not authorized to turn the wheel for this person.',
        localize: {
            de: 'Du bist nicht berechtigt für diese Person das Rad zu drehen.'
        }
    },
    embed: {
        title: {
            default: 'Task for ',
            localize: {
                de: 'Aufgabe für '
            }
        },
        description: {
            default: 'You have been assigned a task. \n' +
                'You now have 10 minutes to clear up any missing info',
            localize: {
                de: 'Dir wurde eine Aufgabe zugewiesen. \n' +
                    'Du hast jetzt 10 Minuten um alle fehlenden Infos zu klären.'
            }
        },
        fields: {
            task: {
                default: 'TASK',
                localize: {
                    de: 'AUFGABE'
                }
            },
            time: {
                title: {
                    default: 'Time',
                    localize: {
                        de: 'Zeit'
                    }
                },
                description: {
                    default: 'As soon as everything is cleared you have \n' +
                        '1 hour',
                    localize: {
                        de: 'Sobald alles geklärt ist hast du \n' +
                            '1 Stunde'
                    }
                },
            },
            options: {
                title: {
                    default: 'To clarify',
                    localize: {
                        de: 'Zu klären'
                    }
                },
                description: {
                    default: 'nothing',
                    localize: {
                        de: 'nichts'
                    }
                },
            }
        },
        footer: {
            default: 'Your KH wishes you much fun',
            localize: {
                de: 'Dein KH wünscht dir viel Spaß'
            }
        },
    }
}


module.exports = {
    breakCommand,
    verifyCommand,
    wofCommand
}