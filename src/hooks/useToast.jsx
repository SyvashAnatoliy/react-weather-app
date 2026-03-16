import { useState } from 'react';

export const useToast = () => {
    const [toastMessage, setToastMessage] = useState('');
    const [isToastVisible, setIsToastVisible] = useState(false);

        const showToast = (message) => {
        setToastMessage(message);
        setIsToastVisible(true);
        setTimeout(() => {
            setIsToastVisible(false);
        }, 3000);
    };

    return { toastMessage, isToastVisible, showToast };
}