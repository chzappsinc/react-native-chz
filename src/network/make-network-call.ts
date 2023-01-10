import axios from 'axios';
import {Platform} from 'react-native';
import {makeNetworkCallSchema} from './types';
import {version} from 'react';
/**
 * Make Network call with one line,
 * 
 * @example  makeNetworkCall({
      url: 'https://jsonplaceholder.typicode.com/photos',
    });
 * */
const makeNetworkCall = async (schema: makeNetworkCallSchema) => {
  return await axios({
    /**
     * Don't edit this headers,
     */
    headers: {
      'x-api-requested-from': 'react-native',
      'access-control-allow-origin': '*',
      'Content-type': schema.contentType || 'application/json; charset=UTF-8',
      'x-provider': 'chzapps.com',
      'x-requested-os': Platform.OS.toString(),
      'x-framework': 'react ' + version,
      'access-control-allow-credentials': '*',
      'x-chz-auth': '4c5b21bf-331d-4089-a542-c4a5bcb31696',
      'x-date': new Date().toISOString(),
      'x-date-format': 'ISO',
      'x-cache-id': schema.ulr.toLocaleUpperCase(),
      Authorization: schema.authorization,
      ...schema.headers,
    },
    url: schema.ulr,
    method: schema.method || 'get',
    data: schema.body,
  });
};

export default makeNetworkCall;
