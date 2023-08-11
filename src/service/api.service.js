export const API_URL = process.env.REACT_APP_API_URL;


export const apiCall = async (
    url,
    method,
    data,
    headers,
    includeJsonHeader = true,
    includeFormDataHeader = false
) => {
    // const authToken = JSON.parse(localStorage.getItem("myfiles_state"))?.auth?.token?.accessToken || null;
    const authToken = null;

    const config = {
        method,
        headers: new Headers({
            ...(includeJsonHeader ? { 'Content-Type': 'application/json' } : {}),
            ...(includeFormDataHeader ? { 'type': 'formData' } : {}),
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
            ...(headers ?? {})
        }),
        body: includeJsonHeader ? data && JSON.stringify(data) : data
    };

    const result = await fetch(url, config);
    if (!result.ok) {
        if (result.status === 401) {
            window.location.href = "/logout";
        }
        try {
            const body = await result.json();
            return body;
        } catch (_error) {
            console.log('_error ', _error);
            throw new Error(_error);
        }
    }

    return result.json();
};
