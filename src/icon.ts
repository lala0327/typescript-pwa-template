// 載入 font-awesome icon，只載入有用到的，可大幅減少檔案大小
import { library } from "@fortawesome/fontawesome-svg-core";

import { faBookOpen, faHouse, faList, faBell, faGear, faMagnifyingGlass, faAngleRight, faCircleCheck, faInfoCircle, faExclamationCircle, faTimesCircle, faCheck, faTimes, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

import { faFacebook, faGoogle, faLine } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBookOpen, faHouse, faList, faBell, faGear, faMagnifyingGlass, faAngleRight, faCircleCheck, faInfoCircle, faExclamationCircle, faTimesCircle, faCheck, faTimes, faArrowUpFromBracket, faSun, faMoon, faFacebook, faGoogle, faLine
);
export default FontAwesomeIcon;
