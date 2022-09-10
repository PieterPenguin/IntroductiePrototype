// Import correct data for current person
import {cornell} from '/cornell/cornell.js';
import {jimme} from '/jimme/jimme.js';
import {pieter} from '/pieter/pieter.js';
import {rick} from '/rick/rick.js';
import {ishak} from '/ishak/ishak.js';


localStorage.setItem('cornell.html', JSON.stringify(cornell()));
localStorage.setItem('jimme.html', JSON.stringify(jimme()));
localStorage.setItem('pieter.html', JSON.stringify(pieter()));
localStorage.setItem('rick.html', JSON.stringify(rick()));
localStorage.setItem('ishak.html', JSON.stringify(ishak()));
