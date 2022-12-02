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
const addOwnerCommand = {
    description: {
        default: 'With this you can set your owner. He can e.g. turn the wheel of fortune for you',
        localize: {
            de: 'Damit kannst du deinen Owner setzen. Welcher z.B. das Glücksrad für dich drehen kann.'
        }
    },
    options: {
        user: {
            description: {
                default: 'Select your owner\'s tag.',
                localize: {
                    de: 'Wähle den Tag deines Owners aus.'
                }
            }
        }
    },
}
const showOwnerCommand = {
    description: {
        default: 'With this you can show the owner of a sub.',
        localize: {
            de: 'Damit kannst du die den Owner eines Subs zeigen lassen.'
        }
    },
    options: {
        user: {
            description: {
                default: 'Select the tag of a sub.',
                localize: {
                    de: 'Wähle den Tag eines Subs aus.'
                }
            }
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
    options: {
        user: {
            description: {
                default: 'Turn the WoF for your sub.',
                localize: {
                    de: 'Dreht das WoF für deinen Sub.'
                }
            }
        },
        id: {
            description: {
                default: 'You can select a specific task.',
                localize: {
                    de: 'Du kannst eine bestimmte Task auswählen.'
                }
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
            cheating: {
                default: 'OH NO. THE SUB WAS EVIL. \n' +
                        'He assigned himself a task by ID. \n' +
                        'You have to shoot again for that, and you get an additional penalty.',
                localize: {
                    de: 'OH NEIN. DER SUB WAR BÖSE. \n' +
                        'Er hat sich selbst eine Task durch die ID zugewiesen. \n' +
                        'Dafür musst du erneut drehen, und bekommst eine zusätzliche Strafe.'
                }
            },
            default: 'You have a task for the advent calendar :) \n' +
                'You have until the end of the day to complete this task. \n' +
                'Upload the result in the form of a picture or video here in the channel.',
            localize: {
                de: 'Du hast eine Aufgabe für den Adventskalender :) \n' +
                'Du hast bis zum Ende des Tages Zeit, diese Aufgabe auszuführen. \n' +
                'Lade das Ergebnis in Form eines Bildes oder Videos hier im Channel hoch.'
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
                        'Until the end of the day time.',
                    localize: {
                        de: 'Sobald alles geklärt ist hast du \n' +
                            'Bis zum Ende des Tages Zeit.'
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
            },
            taskId: {
                title: {
                    default: 'TaskID',
                    localize: {
                        de: 'AufgabenID'
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
    wofCommand,
    addOwnerCommand,
    showOwnerCommand
}