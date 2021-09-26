import axios from 'axios';

import { baseUrl } from './baseUrl';

const API = axios.create({ baseUrl: `${baseUrl}/api` });
