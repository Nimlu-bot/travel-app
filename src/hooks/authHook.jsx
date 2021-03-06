import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
    const [name, setName] = useState(null);
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [userId, setUserId] = useState(null);

    const login = useCallback((name, jwtToken, id) => {
        setName(name);
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(
            storageName,
            JSON.stringify({
                userName: name,
                userId: id,
                token: jwtToken,
            }),
        );
    }, []);

    const logout = useCallback(() => {
        setName(null);
        setToken(null);
        setUserId(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.name, data.token, data.userId);
        }
        setReady(true);
    }, [login]);

    return { login, logout, token, name, userId, ready };
};
