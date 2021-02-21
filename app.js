/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MssExt.Application',

    name: 'MssExt',

    requires: [
        // This will automatically load all classes in the MssExt namespace
        // so that application classes do not need to require each other.
        'MssExt.*'
    ],

    // The name of the initial view to create.
    mainView: 'MssExt.view.main.Main'
});
