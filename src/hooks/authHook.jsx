import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';
const anonimStorData = 'anonim';

export const useAuth = () => {
    const [name, setName] = useState(null);
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [userId, setUserId] = useState(null);
    const [anonim, setAnonim] = useState(false);
    const [image, setImage] = useState(null);

    const login = useCallback((name, jwtToken, id, image) => {
        setName(name);
        setToken(jwtToken);
        setUserId(id);
        setImage(image);

        localStorage.setItem(
            storageName,
            JSON.stringify({
                name,
                userId: id,
                token: jwtToken,
                image,
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
        setImage(null);
        localStorage.removeItem(storageName);
        localStorage.removeItem(anonimStorData);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.name, data.token, data.userId, data.image);
        }
        setReady(true);
    }, [login]);

    return { login, logout, withoutLogin, token, name, userId, ready, image, anonim };
};
