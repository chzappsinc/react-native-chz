# Usefull prebuild script and functions for react native

# COMING SOON

# Installation

`yarn add react-native-chz`

-----

## Functions

- [randomUUID](#randomuuid)
- [getOTP](#getotp)
- [getDimensions](#getDimensions)

## randomUUID

```js
import React from 'react'
import { Text, View } from 'react-native'
import chz from 'react-native-chz'

const App = () => {
  return (
    <View style={{ margin: 30 }}>
      <Text>Random UUID : {chz.randomUUID()}</Text>
    </View>
  )
}
export default App

/*
OUTPUT 
Rnadom UUID : 51b343be-ce73-4e3d-a0ae-46ab9a44c38e
*/
```

## getOTP

OTP value -> 4,6,8

```js
import React from 'react'
import { Text, View } from 'react-native'
import chz from 'react-native-chz'


const App = () => {
  const OTP = chz.getOTP(8)
  return (
    <View style={{ margin: 30 }}>
      <Text>Random OTP : {OTP}</Text>
    </View>
  )
}

export default App

/*
OUTPUT 
Rnadom OTP : 98541253
*/
```

## getDimensions

| PARAMS        | RETURN TYPE                                                      | PROPS |
|---------------|------------------------------------------------------------------|-------|
| window-width  | Number  Get width of current window                              |       |
| window-height | Number Get Height of current window exclude statusBar and NavBar |       |
| screen-height | Number  Get Device Screen Height                                 |       |
| screen -width | Number Get Device Screen Width                                   |       |
| font-scale    | get Font scale                                                   |       |

```js

import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import chz from './libs'

const App = () => {

  return (
    <ScrollView style={{ margin: 30 }}>
      <Text>{chz.getDimensions('window-height')}</Text>
    </ScrollView>
  )
}

export default App

```
