module.exports = (content, maxLength) => {

  if(typeof content !== 'string') return 'Error'; // T1
  if(typeof maxLength !== 'number') return 'Error'; // T3
  if(maxLength <= 0) return 'Error'; // T4
  if(content.length < 1) return 'Error'; // T2
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...'; 
};
