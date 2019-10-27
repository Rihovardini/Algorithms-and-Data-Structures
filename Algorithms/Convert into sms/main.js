  function solutionMessages(string, maxSmsLength) {
    const splittedArray = string.split(' ');
    const isValid = splittedArray.some(word => word.length <= maxSmsLength) 
                    || string.length <= 500
                    || string.lastELement > 0;

    if(!isValid) {
      return -1;
    }

    return splittedArray.reduce((acc, word) => {
      return getSmsArray([...acc], word, maxSmsLength);
    }, ['']).length;
  }

  function getSmsArray(smsArray, word, maxSmsLength) {
    const lastIndex = smsArray.length -1;
    const lastELement = smsArray[lastIndex];
    const newSms = `${lastELement} ${word}`.trim();

    if(newSms.length > maxSmsLength) {
      return [...smsArray, word];
    }

    smsArray[lastIndex] = newSms;
    return [...smsArray];
  }