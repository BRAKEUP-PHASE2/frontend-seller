import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.dev.brakeup.in/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export const baseURL = "https://api.dev.brakeup.in/api/v2";

export const StatesData = [
  {
    S_No: 1,
    COUNTRY_CODE: "IN",
    CODE: "IN-AN",
    ISO2_CODE: "AN",
    STATE_NAME: "Andaman & Nicobar Islands",
  },
  {
    S_No: 2,
    COUNTRY_CODE: "IN",
    CODE: "IN-AP",
    ISO2_CODE: "AP",
    STATE_NAME: "Andhra Pradesh (Old)",
  },
  {
    S_No: 3,
    COUNTRY_CODE: "IN",
    CODE: "IN-AR",
    ISO2_CODE: "AR",
    STATE_NAME: "Arunachal Pradesh",
  },
  {
    S_No: 4,
    COUNTRY_CODE: "IN",
    CODE: "IN-AS",
    ISO2_CODE: "AS",
    STATE_NAME: "Assam",
  },
  {
    S_No: 5,
    COUNTRY_CODE: "IN",
    CODE: "IN-BR",
    ISO2_CODE: "BR",
    STATE_NAME: "Bihar",
  },
  {
    S_No: 6,
    COUNTRY_CODE: "IN",
    CODE: "IN-CH",
    ISO2_CODE: "CH",
    STATE_NAME: "Chandigarh",
  },
  {
    S_No: 7,
    COUNTRY_CODE: "IN",
    CODE: "IN-CT",
    ISO2_CODE: "CT",
    STATE_NAME: "Chhattisgarh",
  },
  {
    S_No: 8,
    COUNTRY_CODE: "IN",
    CODE: "IN-DN",
    ISO2_CODE: "DN",
    STATE_NAME: "Dadra & Nagar Haveli",
  },
  {
    S_No: 9,
    COUNTRY_CODE: "IN",
    CODE: "IN-DD",
    ISO2_CODE: "DD",
    STATE_NAME: "Daman & Diu",
  },
  {
    S_No: 10,
    COUNTRY_CODE: "IN",
    CODE: "IN-DL",
    ISO2_CODE: "DL",
    STATE_NAME: "Delhi",
  },
  {
    S_No: 11,
    COUNTRY_CODE: "IN",
    CODE: "IN-GA",
    ISO2_CODE: "GA",
    STATE_NAME: "Goa",
  },
  {
    S_No: 12,
    COUNTRY_CODE: "IN",
    CODE: "IN-GJ",
    ISO2_CODE: "GJ",
    STATE_NAME: "Gujarat",
  },
  {
    S_No: 13,
    COUNTRY_CODE: "IN",
    CODE: "IN-HR",
    ISO2_CODE: "HR",
    STATE_NAME: "Haryana",
  },
  {
    S_No: 14,
    COUNTRY_CODE: "IN",
    CODE: "IN-HP",
    ISO2_CODE: "HP",
    STATE_NAME: "Himachal Pradesh",
  },
  {
    S_No: 15,
    COUNTRY_CODE: "IN",
    CODE: "IN-JK",
    ISO2_CODE: "JK",
    STATE_NAME: "Jammu & Kashmir",
  },
  {
    S_No: 16,
    COUNTRY_CODE: "IN",
    CODE: "IN-JH | IN-JR",
    ISO2_CODE: "JH | JR",
    STATE_NAME: "Jharkhand",
  },
  {
    S_No: 17,
    COUNTRY_CODE: "IN",
    CODE: "IN-KA",
    ISO2_CODE: "KA",
    STATE_NAME: "Karnataka",
  },
  {
    S_No: 18,
    COUNTRY_CODE: "IN",
    CODE: "IN-KL",
    ISO2_CODE: "KL",
    STATE_NAME: "Kerala",
  },
  {
    S_No: 19,
    COUNTRY_CODE: "IN",
    CODE: "IN-LD",
    ISO2_CODE: "LD",
    STATE_NAME: "Lakshadweep",
  },
  {
    S_No: 20,
    COUNTRY_CODE: "IN",
    CODE: "IN-MP",
    ISO2_CODE: "MP",
    STATE_NAME: "Madhya Pradesh",
  },
  {
    S_No: 21,
    COUNTRY_CODE: "IN",
    CODE: "IN-MH",
    ISO2_CODE: "MH",
    STATE_NAME: "Maharashtra",
  },
  {
    S_No: 22,
    COUNTRY_CODE: "IN",
    CODE: "IN-MN",
    ISO2_CODE: "MN",
    STATE_NAME: "Manipur",
  },
  {
    S_No: 23,
    COUNTRY_CODE: "IN",
    CODE: "IN-ML",
    ISO2_CODE: "ML",
    STATE_NAME: "Meghalaya",
  },
  {
    S_No: 24,
    COUNTRY_CODE: "IN",
    CODE: "IN-MZ",
    ISO2_CODE: "MZ",
    STATE_NAME: "Mizoram",
  },
  {
    S_No: 25,
    COUNTRY_CODE: "IN",
    CODE: "IN-NL",
    ISO2_CODE: "NL",
    STATE_NAME: "Nagaland",
  },
  {
    S_No: 26,
    COUNTRY_CODE: "IN",
    CODE: "IN-OR",
    ISO2_CODE: "OR",
    STATE_NAME: "Odisha",
  },
  {
    S_No: 27,
    COUNTRY_CODE: "IN",
    CODE: "IN-PY",
    ISO2_CODE: "PY",
    STATE_NAME: "Puducherry",
  },
  {
    S_No: 28,
    COUNTRY_CODE: "IN",
    CODE: "IN-PB",
    ISO2_CODE: "PB",
    STATE_NAME: "Punjab",
  },
  {
    S_No: 29,
    COUNTRY_CODE: "IN",
    CODE: "IN-RJ",
    ISO2_CODE: "RJ",
    STATE_NAME: "Rajasthan",
  },
  {
    S_No: 30,
    COUNTRY_CODE: "IN",
    CODE: "IN-SK",
    ISO2_CODE: "SK",
    STATE_NAME: "Sikkim",
  },
  {
    S_No: 31,
    COUNTRY_CODE: "IN",
    CODE: "IN-TN",
    ISO2_CODE: "TN",
    STATE_NAME: "Tamil Nadu",
  },
  {
    S_No: 32,
    COUNTRY_CODE: "IN",
    CODE: "IN-TR",
    ISO2_CODE: "TR",
    STATE_NAME: "Tripura",
  },
  {
    S_No: 33,
    COUNTRY_CODE: "IN",
    CODE: "IN-UP",
    ISO2_CODE: "UP",
    STATE_NAME: "Uttar Pradesh",
  },
  {
    S_No: 34,
    COUNTRY_CODE: "IN",
    CODE: "IN-UT | IN-UL",
    ISO2_CODE: "UT | UL",
    STATE_NAME: "Uttarakhand",
  },
  {
    S_No: 35,
    COUNTRY_CODE: "IN",
    CODE: "IN-WB",
    ISO2_CODE: "WB",
    STATE_NAME: "West Bengal",
  },
  {
    S_No: 36,
    COUNTRY_CODE: "IN",
    CODE: "IN-TL",
    ISO2_CODE: "TL",
    STATE_NAME: "Telangana",
  },
  {
    S_No: 37,
    COUNTRY_CODE: "IN",
    CODE: "IN-AD",
    ISO2_CODE: "AD",
    STATE_NAME: "Andhra Pradesh",
  },
  {
    S_No: 38,
    COUNTRY_CODE: "IN",
    CODE: "IN-LA",
    ISO2_CODE: "LA",
    STATE_NAME: "Ladakh",
  },
];