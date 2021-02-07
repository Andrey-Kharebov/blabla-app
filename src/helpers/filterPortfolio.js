const filterPortfolio = (portfolio, category) => {

  let filteredPortfolio = [];

  switch(category) {
    case 'web':
      filteredPortfolio = portfolio.filter(work => work.category === 'web');
      break;
    case 'graphic': 
      filteredPortfolio = portfolio.filter(work => work.category === 'graphic');
      break;
    case 'flat': 
      filteredPortfolio = portfolio.filter(work => work.category === 'flat');
      break;
    default:
      filteredPortfolio = portfolio;
      break;
  }

  return filteredPortfolio
}

export default filterPortfolio;