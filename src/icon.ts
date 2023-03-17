// 載入 font-awesome icon，只載入有用到的，可大幅減少檔案大小
import { library } from "@fortawesome/fontawesome-svg-core";

import { faBookOpen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faGoogle, faLine } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBookOpen, faMagnifyingGlass, faFacebook, faGoogle, faLine
);

export default FontAwesomeIcon;
