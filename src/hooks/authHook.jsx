import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';
const anonimStorData = 'anonim';

export const useAuth = () => {
    const [name, setName] = useState(null);
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [userId, setUserId] = useState(null);
    const [anonim, setAnonim] = useState(false);

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

    const withoutLogin = useCallback(() => {
        setAnonim(true);

        localStorage.setItem(anonimStorData, JSON.stringify(true));
    }, []);

    const logout = useCallback(() => {
        setName(null);
        setToken(null);
        setUserId(null);
        setAnonim(false);
        localStorage.removeItem(storageName);
        localStorage.removeItem(anonimStorData);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.name, data.token, data.userId);
        }
        setReady(true);
    }, [login]);

    return { login, logout, withoutLogin, token, name, userId, ready, anonim };
};
