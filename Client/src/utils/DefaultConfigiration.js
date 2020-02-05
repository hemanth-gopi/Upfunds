import Axios from "axios";

import qs from "qs";


/*eslint no-undef: "warn"*/
__webpack_public_path__ =  "/";

Axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded"; // no i18n

Axios.defaults.paramsSerializer = function(params) {
    // https://github.com/ljharb/qs
    return qs.stringify(params, { encoder: str => encodeURIComponent(str) });
  };
  