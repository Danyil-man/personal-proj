import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyBlock from '../../components/common/emptyItemBlock/EmptyBlock';
import { myFavorites } from '../../consts/favoritePage';
import { getAllFavorites } from '../../store/redux/reducers/favoriteReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Favorite.module.scss'
import FavoriteCard from './FavoriteCard';


const Favorite = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { favorites, favoriteId } = useSelector((state: AppStateType) => state.favorite)
    useEffect(() => {
        dispatch(getAllFavorites(id))
    }, [favoriteId])
    console.log(favorites.length);

    return (
        <div className={favorites.length ? style.container : style.phoneContainer}>
            <h4 className={style.headText}>{myFavorites}</h4>
            {favorites.length ? <p className={style.orderInfo}> {favorites.length}</p> : null}

            <div className={style.favoriteBlock}>
                {favorites.length ? <> {favorites.map((favorite) =>
                    <FavoriteCard
                        key={favorite.id}
                        favoriteId={favorite.id}
                        favorite={favorite.book} />)
                }
                </> :
                    <EmptyBlock
                        title={'У вас немає обраних товарів'}
                        subTitle={'Перейдіть на головну, щоб додати обрані товари.'}
                        image={'https://res.cloudinary.com/wunu/image/upload/v1651853380/personalproject/naughty-heart_wlmfhn.png'} />}

            </div>
        </div>
    )
}

export default Favorite