cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "id": "cordova-plugin-admob-simple.AdMob",
        "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
        "pluginId": "cordova-plugin-admob-simple",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    },
    {
        "id": "com.admob.plugin.admob",
        "file": "plugins/com.admob.plugin/www/admob.js",
        "pluginId": "com.admob.plugin",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "id": "admob.admob",
        "file": "plugins/admob/www/admob.js",
        "pluginId": "admob",
        "clobbers": [
            "window.admob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "onesignal-cordova-plugin": "2.2.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-admob-sdklibs": "2.1.6",
    "cordova-plugin-admob-simple": "3.3.4",
    "com.admob.plugin": "5.5.0",
    "admob": "5.5.0"
};
// BOTTOM OF METADATA
});