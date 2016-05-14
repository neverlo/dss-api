/**
 * utils class
 */

/**
 * Module dependencies.
 */

var crypto = require('crypto'),
  config = require('../config');

/**
 * extend ejs to have more functions
 * @param ejs
 */
exports.extendEjs = function(ejs){
  ejs.filters.dateFormat = function(date,formater){
    return exports.dateFormat(date, formater);
  };
  ejs.filters.encodeURI = function(str){
    return encodeURI(str);
  };
};

/**
 * md5 crypto
 */
exports.md5 = function(text){
  return crypto.createHash('md5').update(text).digest('hex');
};

/**
 * other filters
 */
exports.sundry = function(req,res,next){
  //1.active select menu
  res.locals.activeMenu = function (nav){
    var result = '',
      current = req.path || '';
    if(current == nav){
      result = 'active';
    }
    return result;
  };
  //2.active select project
  res.locals.activeProject = function (nav){
    var result = '',
      current = req.query.project || '';
    if(current == nav){
      result = 'active';
    }
    return result;
  };
  //set i18n to view template
  res.locals.t = req.t;
  res.locals.i18n = req.i18n;

  next();
};

/**
 * format date display
 */
exports.dateFormat = function(date, fstr, utc) {
  utc = utc ? 'getUTC' : 'get';
  return fstr.replace (/%[yMdhms]/g, function (m) {
    switch (m) {
      case '%y': return date[utc + 'FullYear'] ();
      case '%M': m = 1 + date[utc + 'Month'] (); break;
      case '%d': m = date[utc + 'Date'] (); break;
      case '%h': m = date[utc + 'Hours'] (); break;
      case '%m': m = date[utc + 'Minutes'] (); break;
      case '%s': m = date[utc + 'Seconds'] (); break;
      case '%ms' : m = date[utc + 'Milliseconds'] (); break;
      default: return m.slice (1);
    }
    return ('0' + m).slice (-2);
  });
};
/**
 * filter html tags
 * @param str
 * @returns {XML|string}
 */
exports.htmlFilter = function(str){
  str = str.replace(/<(.[^>]*)>/g,'');
  str = str.replace(/\s+|\t|\r|\n/g,' ');
  return str;
};
/**
 * make a unique guid
 * @param arr
 * @returns {*}
 */
exports.unique = function(arr){
  if(Object.prototype.toString.call(arr) != "[object Array]"){
    return arr;
  }
  var obj = {},tmp=[];
  arr.forEach(function(val){
    if(val && !obj[val]){
      obj[val] = true;
      tmp.push(val);
    }
  });
  return tmp;
};

/**
 * extend object
 * @param destination
 * @param source
 * @returns {*}
 */
exports.extends = function(destination, source){
  for (var property in source) {
    if(source.hasOwnProperty(property)) {
      destination[property] = source[property];
    }
  }
  return destination;
};

/**
 * convert params(name=value&name2=value2...) to json format
 * @param params
 */
exports.paramsToJson = function(params){
  if(params){
    params = params.split('&');
  }else{
    params = [];
  }
  var json = Object.create({});
  params.forEach(function(v){
    var param = v.split('=');
    json[param[0]] = param[1];
  });
  return json;
};

exports.rightsControl = function(req, res, next){
  if(!config.enableEdit){
    var path = req.path,
      method = req.method;
    if((method === 'POST' && (path.indexOf('edit') > -1 || path.indexOf('add') > -1)) || path.indexOf('delete') > -1){
      res.jsonp({retcode: -1, retmsg: req.t('tips.noRights')});
      return;
    }
  }
  next();
};