import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';


const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();
        async function handleCLick() {
            const confirm = window.confirm('Tem certeza que deseja deletar?');
            if (confirm) {
                const { url, options } = PHOTO_DELETE(id);
                const { response } = await request(url, options);
                if (response.ok) window.location.reload();
            }
        }
    


    return (
        <>
            { loading ? (
            <button disabled className={styles.delete}>Deletar</button>
            ) : (
            <button onClick={handleCLick} className={styles.delete}>Deletar</button>
            )}
        </>
    )
}

export default PhotoDelete