/*!
 * ApiFaker is a simulator that help developers to improve efficiency in development,
 * especially for front-end engineers.
 * Lets define api and run it yourself.
 *
 * @license
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * Copyright (c) 2014 ApiFaker, http://apifaker.com/
 *
 * @author  hylin, <admin@hylin.org>
 * @version 0.0.2
 * @date    2014-05-12
 */
var config = {

  staticVersion: '201605141900',
  //server's run port
  port: 80,
  //once you have gaven a project key,then you should never change it,however value is editable.
  projects: {
    "p1": "dss-view",
    "p2": "dss-data"
  },
  //url of this site.don't add last '/'
  siteUrl: "http://localhost",
  //assets(files under public dir) url of api faker,usually same as siteUrl.Unless you expect to use cdn.don't add last '/'
  staticUrl: "http://localhost",
  //api manager's default path.
  managerPath: "/dss-api/",
  //use to auto return query's value
  returnPlaceholder: "$return$",
  //override the callback function name in a jsonp request
  jsonpName: "callback",
  //if we don't match any query,should we play as proxy server?
  //set true to enable,false to disable.
  //notice: you shouldn't enable this feature
  // when the domain of this query is actually host on this server
  proxy: true,

  enableEdit: true
};

module.exports = config;