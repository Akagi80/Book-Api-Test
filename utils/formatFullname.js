module.exports = (fullName) => {

  if(typeof fullName !== 'string') return 'Error'; // T1 + T2
  const [ firstName, lastName ] = fullName.split(' ');
  if(fullName.split(' ').length !== 2) return 'Error'; // T3
  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase(); // T4
};
