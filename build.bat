cordova plugins remove vulnerable
cordova plugin add https://github.com/bernardyip/phonegap-plugin.git
cordova build android
copy /Y D:\vulnerable-phonegap\platforms\android\build\outputs\apk\android-debug.apk D:\Downloads\mod\test
D:\Downloads\mod\sign.bat D:\Downloads\mod\test
del D:\Downloads\mod\test
move /Y D:\Downloads\mod\test_signed.apk D:\Dropbox\Public\test_signed.apk
