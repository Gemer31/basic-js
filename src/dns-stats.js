/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {};

  domains.forEach(domain => {
    const splitedDNS = domain.split(".").reverse();
    let fullDNS = "";

    splitedDNS.forEach(dns => {
      fullDNS += (`.${dns}`);
      DNS[fullDNS] = DNS[fullDNS] ? DNS[fullDNS] + 1 : 1;
    })
  });

  return DNS;
}

module.exports = {
  getDNSStats
};
