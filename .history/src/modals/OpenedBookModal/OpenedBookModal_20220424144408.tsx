import React, { FC } from 'react';
import style from './OpenedBookModal.module.scss'

type OpenBookModalType = {
    close: boolean
    onClose: (close: boolean) => void
}

const OpenedBookModal: FC<OpenBookModalType> = ({ close, onClose }) => {
    return (
        <div className={style.wraper}>
            <div className={style.container}>
                close <button onClick={() => onClose(!close)}>X</button>
                Modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit ratione minima placeat amet perspiciatis incidunt voluptas, minus architecto at excepturi? Culpa qui neque, facere quas iste totam eius similique, distinctio amet eum aut tenetur rerum labore nam dicta perspiciatis maiores tempora, vitae eaque? A amet dicta doloribus consequatur cum tempora, repudiandae, molestias unde dolor voluptas corporis minus numquam minima. Optio, pariatur, necessitatibus dolorum porro in commodi rem quae obcaecati mollitia qui aliquid explicabo debitis ex iste reiciendis cum ipsam non doloremque. Numquam officiis quaerat deserunt, quasi, hic esse cum quis eius aspernatur illo soluta eum laborum non voluptate maiores.
            </div>
        </div>
    )
}

export default OpenedBookModal