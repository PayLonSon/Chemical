function addLocalData() {
  localStorage.supplyChemical = JSON.stringify(chemicals);
}

const chemicals = [
  {
    "casNo": "1336-36-3",
    "chemicalTW": "多氯聯苯",
    "chemicalEN": "Polychlorinated biphenyls",
    "w": 0.1,
    "remain": 50,
    "isToxic": "是"
  },
  {
    "casNo": "57-74-9",
    "chemicalTW": "可氯丹",
    "chemicalEN": "Chlordane",
    "w": 1,
    "remain": 50,
    "isToxic": "是"
  },
  {
    "casNo": "1332-21-4",
    "chemicalTW": "石綿",
    "chemicalEN": "Asbestos",
    "w": 1,
    "remain": 500,
    "isToxic": "是"

  },
  {
    "casNo": "60-57-1",
    "chemicalTW": "地特靈",
    "chemicalEN": "Dieldrin",
    "w": 1,
    "remain": 50,
    "isToxic": "是"

  },
  {
    "casNo": "50-29-3",
    "chemicalTW": "滴滴涕",
    "chemicalEN": "DDT",
    "w": 1,
    "remain": 50,
    "isToxic": "是"

  },
  {
    "casNo": "8001-35-2",
    "chemicalTW": "毒殺芬",
    "chemicalEN": "Toxaphene",
    "w": 1,
    "remain": 50,
    "isToxic": "是"
  },
];
