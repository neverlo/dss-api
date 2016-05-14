/**
 * database class
 */
var models = {
  //api info model
  apiInfoModel: {"project": "", "developer": "", "name": "", "purpose": "", "desc": "", "host": "", "path": "", "urlAddon": "", "type": "json", "httpType": ["get", "post"], "params": [
    {"name": "", "type": "1", "desc": ""}
  ], "results": [
    {"name": "", "type": "String", "desc": ""}
  ], "demo": {"retcode": 0, "retmsg": "success", "data": []}, "isSimulate": true, "isProxy": true},

  // simulator model
  simulatorModel: {"apiId": "", "mark": "", "simParams": "", "simResults": ""}
};

module.exports = models;