
//!get only tip per person
export const getTipPerPerson = (bill, discount, persons) => {
  const tipPerPerson = (bill * discount / 100) / persons

  if (isNaN(tipPerPerson) || tipPerPerson == Infinity) {
    return 0
  }
  return tipPerPerson

}

//!getTotalPerPerson
export const getTotalPerPerson = (bill, discount, persons) => {
  const totalPerPerson = (bill * discount / 100) / persons + bill / persons
  if (isNaN(totalPerPerson) || totalPerPerson == Infinity) {
    return 0
  }
  return totalPerPerson.toFixed(2)
}


//!extract a number to a string
export const extractNumber = (str) => {
  var matches = str.match(/(\d+)/);
  return matches ? Number(matches[0]) : 0;
}