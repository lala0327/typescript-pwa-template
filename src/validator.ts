/* eslint-disable no-useless-escape */
import { configure, defineRule } from "vee-validate";
// Configuration
configure({
  validateOnInput: true, // 每一個輸入
  validateOnModelUpdate: true, // 送出
});
// 定義多個規則需加 |

// 必填、select
defineRule("required", (value:any) => {
  if (!value) {
    return "*必填";
  }
  return true;
});

// 中文姓名 unicode編碼
defineRule("CnName", (value:any) => {
  if (!/^[\u4e00-\u9fa5]{2,4}$/.test(value)) {
    return "中文姓名格式錯誤 !";
  }
  return true;
});

// 身分證
defineRule("IdentityCard", (value:any) => {
  if (!/^[A-Za-z][12]\d{8}$/.test(value)) {
    return "身分證格式錯誤 !";
  }
  return true;
});

// 手機號碼
defineRule("PhoneNum", (value:any) => {
  if (!/^09[0-9]{8}$/.test(value)) {
    return "手機號碼格式錯誤 !";
  }
  return true;
});

// Email
defineRule("Email", (value:any) => {
  if (
    !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
  ) {
    return "電子信箱格式錯誤 !";
  }
  return true;
});

// 自訂義
defineRule("CreditCard", (value:any) => {
  if (!/[0-9]{4}/.test(value)) {
    return "信用卡格式錯誤 !";
  }
  return true;
});
defineRule("CardThree", (value:any) => {
  if (!/[0-9]{3}/.test(value)) {
    return "格式錯誤 !";
  }
  return true;
});
defineRule("visa", (value:any) => {
  const twonum = value[0] + value[1];
  if (value[0] === "4") {
    return true;
  } else if ((twonum >= "51") && (twonum <= "55")) {
    return true;
  } else if ((value >= "3528") && (value <= "3589")) {
    return true;
  }
  return "發卡號碼錯誤 !";
});

// 全部的大小寫英文加數字/[A-Za-z0-9]/
// 全部的大寫英文/[A-Z]/
// 全部的小寫英文/[a-z]/
// 全部的數字 /[0-9]/
