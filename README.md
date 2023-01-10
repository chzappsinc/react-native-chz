# Usefull prebuild script and functions for react native

# Installation

`yarn add react-native-chz`

-----
- [Networking](#network)
- [Short Url](#short-url)
-----

## Network 

**Make network calling easy and fast! with one line**

<details>

### Make Network call

```js
const getRandomPhotos = async () => {
    const response = await makeNetworkCall({
      ulr: 'https://jsonplaceholder.typicode.com/photos',
    });
    console.log(response.data);
  };
  getRandomPhotos();
  
```
**Output**
```json
[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },...+4999]
```
Available params

| PARAMS        | DESCRIPITON                                                    | REQUIRED|
|---------------|------------------------------------------------------------------|-------|
| url  | Url with endpoints for network requesting                          |    true   |
| method | Request methods   |   false    |
| body | request body                                 |   false    |
| headers| Request headers                                   |     false  |
| contentType   | Request content type                                             |  false     |
|authorization|Request Authorization|false|

*Send tokens through authorization if you don't want to use headers.*

##### Available Methods

`'get' | 'post' | 'put' | 'delete' | 'options' | 'patch' | 'head'`
</details>

--------------

## Short Url 

**Create Short Url fast and unlimited**

<details>

### Create short url 

```js
 await makeShortUrl({
      url: 'https://chzapps.com',
      provider: 'is.gd',
    });
```
**Output**
```json
https://is.gd/6ycptD
```
Available params

| PARAMS        | DESCRIPITON                                                    | REQUIRED|
|---------------|------------------------------------------------------------------|-------|
| url  | Url with endpoints for network requesting                          |    true   |
| method | Request methods   |   false    |
| body | request body                                 |   false    |
| headers| Request headers                                   |     false  |
| contentType   | Request content type                                             |  false     |
|authorization|Request Authorization|false|

*Send tokens through authorization if you don't want to use headers.*

##### Available Methods

`'get' | 'post' | 'put' | 'delete' | 'options' | 'patch' | 'head'`
</details>

