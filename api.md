
#### <a name="FS.Store.SmartFile"></a>new FS.Store.SmartFile(name, options)&nbsp;&nbsp;<sub><i>Server</i></sub> ####
-
*This method __SmartFile__ is defined in `FS.Store`*

__Arguments__

* __name__ *{String}*  
 The store name
* __options__ *{Object}*  
    - __beforeSave__ *{Function}*    (Optional)
 Function to run before saving a file from the server. The context of the function will be the `FS.File` instance we're saving. The function may alter its properties.
    - __maxTries__ *{Number}*    (Default = 5)
 Max times to attempt saving a file

-

__Returns__  *{FS.StorageAdapter}*
An instance of FS.StorageAdapter.


Creates a SmartFile store instance on the server. Inherits from FS.StorageAdapter
type.

> ```FS.Store.SmartFile = function(name, options) { ...``` [smartfile.server.js:15](smartfile.server.js#L15)

-


---

#### <a name="FS.Store.SmartFile"></a>new FS.Store.SmartFile(name, options)&nbsp;&nbsp;<sub><i>Client</i></sub> ####
-
*This method __SmartFile__ is defined in `FS.Store`*

__Arguments__

* __name__ *{String}*  
 The store name
* __options__ *{Object}*  
    - __beforeSave__ *{Function}*    (Optional)
 Function to run before saving a file from the client. The context of the function will be the `FS.File` instance we're saving. The function may alter its properties.
    - __maxTries__ *{Number}*    (Default = 5)
 Max times to attempt saving a file

-

__Returns__  *{undefined}*


Creates a SmartFile store instance on the client, which is just a shell object
storing some info.

> ```FS.Store.SmartFile = function(name, options) { ...``` [smartfile.client.js:13](smartfile.client.js#L13)

-
