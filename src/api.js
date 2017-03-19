import content from './translations'

let api = {
  getContent(language = 'pl') {
    return content.filter(obj => obj.lang === language)[0];
  }
};

module.exports = api;