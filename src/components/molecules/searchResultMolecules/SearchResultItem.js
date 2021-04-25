import React from "react";
import styles from "../../styles/searchResultItem.module.css";

function SearchResultItem(props) {

    const {
        imageUrl,
        title,
        description,
        category = "Painting"
    } = props

    return (
        <div className={styles.item_card}
             onClick={props?.onItemClicked}>
            <div className={styles.item_flex_container}>
                <div className={styles.flex_child}>
                    <img src={imageUrl} alt={"product image"} className={styles.feature_image}/>
                </div>
                <div className={styles.flex_child}>
                    <div className={styles.category_container}>
                        <div className={styles.category_chip}>{category}</div>
                    </div>
                    <div className={styles.product_title}>{title}</div>
                    <div className={styles.product_description}>{description}</div>
                </div>

            </div>
        </div>
    );
}

export default SearchResultItem