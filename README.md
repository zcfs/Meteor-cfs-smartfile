zcfs:smartfile WIP!
=========================

~~Looking for maintainers - please reach out!~~
This package is to be archived due to inability to find contributors, thanks to everyone who helped make it possible.

**If you're looking for an alternative, we highly recommend [Meteor-Files](https://github.com/VeliovGroup/Meteor-Files) by [VeliovGroup](https://github.com/VeliovGroup)**

---

NOTE: This package is under active development right now (2014-3-1). It has
bugs and the API may continue to change. Please help test it and fix bugs,
but don't use in production yet.

A Meteor package that adds smartfile storage for
[CollectionFS](https://github.com/zcfs/Meteor-CollectionFS). When you
use this storage adapter, file data is stored on the SmartFile servers.

## Installation

Install using Meteorite. When in a Meteor app directory, enter:

```
$ meteor add zcfs:smartfile
```

## Usage

```js
var imageStore = new FS.Store.SmartFile("images", {
  beforeSave: myBeforeSaveFunction, //optional
  maxTries: 1 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});
```

Refer to the [CollectionFS](https://github.com/zcfs/Meteor-CollectionFS)
package documentation for more information.

## Notes

A SmartFile store does not currently support the `sync` option.

## API

[For Users](https://github.com/zcfs/Meteor-cfs-smartfile/blob/master/api.md)

[For Contributors](https://github.com/zcfs/Meteor-cfs-smartfile/blob/master/internal.api.md)
