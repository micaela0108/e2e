const sites = require("./sites.json") 
const ACTIVE  = 1;
const INACTIVE = 0;
sites.forEach(site => {
    if (site.active == INACTIVE) {   console.log(site.uri) }  
});