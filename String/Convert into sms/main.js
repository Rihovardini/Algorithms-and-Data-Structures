  function solutionMessages(string, maxSmsLength) {
    const words = string.split(' ');
    const isValid = words.every(word => word.length <= maxSmsLength) 
                    && string.length <= 500
                    && string.length > 0;

    if(!isValid) {
      return -1;
    }

    return words.reduce((acc, word) => {
          const lastELement = acc.pop();
          const newSms = `${lastELement} ${word}`.trim();
          return newSms.length > maxSmsLength
                         ? [...acc, lastELement, word]
                         : [...acc, newSms];
    }, ['']).length;
  }
