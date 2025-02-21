javascript:
if (!sites) {
    var sites = [
        ['www.nist.gov', 'w3auth.nist.gov'],
        ['w3dev8.nist.gov'],
        ['w3stg8.nist.gov'],
        ['w3auth.nist.gov'],
    ];

    var curr = new URL(location.href);
    var loginHost = curr.host;
    var loginPath = 'user/login';

    for (i=0; i<sites.length; i++) {
        if(sites[i][0] == curr.host) {
            loginHost = sites[i][1] ? sites[i][1] : curr.host;
            loginPath = 'login';
            break;
        }
    };
}
location.href = `${curr.protocol}//${loginHost}/${loginPath}?destination=${curr.pathname}`;
