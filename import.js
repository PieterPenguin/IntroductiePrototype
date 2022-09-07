// Import correct data for current person
import {cornell} from '/cornell/cornell.js';
import {jimme} from '/jimme/jimme.js';


localStorage.setItem('cornell.html', JSON.stringify(cornell()));
localStorage.setItem('jimme.html', JSON.stringify(jimme()));
