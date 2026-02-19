'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

export function AuthSync({ serverIsAuthenticated }: { serverIsAuthenticated: boolean }) {
    const { setAuthenticated, isAuthenticated } = useAuthStore();

    useEffect(() => {
        setAuthenticated(serverIsAuthenticated);
        
        if (!serverIsAuthenticated && isAuthenticated) {
            useAuthStore.persist.clearStorage();
        }
    }, [serverIsAuthenticated, setAuthenticated, isAuthenticated]);

    return null;
}