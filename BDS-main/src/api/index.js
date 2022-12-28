/** @format */

import axios from 'axios';

export const productConfig = () =>
  axios.get('https://brilliant-zuccutto-0850f3.netlify.app/api/products');
export const productId = (productId) =>
  axios.get(
    `https://brilliant-zuccutto-0850f3.netlify.app/api/products/${productId}`
  );
export const projectConfig = () =>
  axios.get('https://brilliant-zuccutto-0850f3.netlify.app/api/project');
export const projectId = (projectId) =>
  axios.get(`https://brilliant-zuccutto-0850f3.netlify.app/api/${projectId}`);
