const apiVersion = 'v1';

export function apiConfig {
    const API_ROOT='';
    if (!process.env.Node_ENV || process.env.NODE_ENV === 'development') {
        const API_ROOT = `http://localhost.homedepot.com/api/${apiVersion}`;
    }
    else {
        const API_ROOT = `http://api.revaluation.hd-opstool-np.gcp.homedepot.com/api/${apiVersion}`;
    }
    return API_ROOT;
}

