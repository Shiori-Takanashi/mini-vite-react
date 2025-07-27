/*
    Basic Card Component
    This component is used to display a card with a title and content.
    Colors can be specified using the CardColor enum.
    Size and style can be customized using CSS.
*/

import React from 'react';
import styles from '../../../style/components/Dashboard/BaseCard.module.css';
import BaseCardColor from './BaseCardColor';

export { BaseCardColor as CardColor };

export default function BaseCard
    (props: { title: React.ReactNode; content: string; color: BaseCardColor; }) {
    return (
        <div className={`${styles.card} ${styles[props.color] || styles[BaseCardColor.DEFAULT]}`}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}
