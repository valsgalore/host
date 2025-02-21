javascript:
if (!curr) {
    var curr;
    var host;
    curr = new URL(location.href);
    host = curr.hostname.endsWith('nist.gov' || 'acquia-sites.com') ? 'nistwww.localhost' : 'www.nist.gov';
}
window.open(`${curr.protocol}//${host}${curr.pathname}`, "_blank");