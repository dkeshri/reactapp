import { useState, useEffect } from 'react'
import axios from 'axios';
const staticProperty = {
  baseUrl: `https://jsonplaceholder.typicode.com`,
  responseType: 'json',
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}
export const useHttpRequest = (argData = {}, dependencies = []) => {
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    setFetchedData(null);
    axios({
      // `url` is the server URL that will be used for the request
      url: argData.url,
      method: argData.method, // default
      baseURL: staticProperty.baseUrl,
      responseType: staticProperty.responseType,
      params: argData.params,
      data: argData.data,
      transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return data;
      }],
      transformResponse: [function (data) {
        // Do whatever you want to transform the data

        return data;
      }],
      headers: staticProperty.headers,
    })
      .then(res => {
        setFetchedData(res.data);
      }).catch((e) => {
        console.log(e);
      });
  }, dependencies);
  return { fetchedData };
};



// httpRequest for class component/Or for any EventHandler method like (onclick,onChange,componentDidMount, .....)

export const httpRequest = (argData = {}) => {
  let fetchedData = null;
  let promise = new Promise((resolve, reject) => {
    axios({
      // `url` is the server URL that will be used for the request
      url: argData.url,
      method: argData.method, // default
      baseURL: staticProperty.baseUrl,
      params: argData.params,
      data: argData.data,
      transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return data;
      }],
      transformResponse: [function (data) {
        // Do whatever you want to transform the data

        return data;
      }],
    })
      .then(res => {
        fetchedData = res.data;
        resolve({ fetchedData });
      }).catch((e) => {
        reject(new Error(e));
      });
  });
  return promise;
};


//Promise close
//https://raw.githubusercontent.com/dkeshri/React/master/src/Components/Javascript/Utilfunction.js

export const httpGitHubRequest = (argData = {}) => {
  let fetchedData = null;
  let promise = new Promise((resolve, reject) => {
    axios({
      // `url` is the server URL that will be used for the request
      url: argData.url,
      method: argData.method, // default
      baseURL: `https://raw.githubusercontent.com/dkeshri/React/master/src`,
      responseType: 'text',
      params: argData.params,
      data: argData.data,
      transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return data;
      }],
      transformResponse: [function (data) {
        // Do whatever you want to transform the data

        return data;
      }],
      headers: staticProperty.headers,
    })
      .then(res => {
        fetchedData = res.data;
        resolve({ fetchedData });
      }).catch((e) => {
        reject(new Error(e));
      });
  });
  return promise;
};