/*
    Info Card Component
    A specialized card component for displaying informational content.
    Uses blue color scheme by default.
*/

import BaseCard, { CardColor } from '../Base/BaseCard';

interface InfoCardProps {
    title: string;
    content: string;
    color?: CardColor; // Optional, defaults to BLUE
}

export default function InfoCard({ title, content, color = CardColor.BLUE }: InfoCardProps) {
    return (
        <BaseCard
            title={title}
            content={content}
            color={color}
        />
    );
}
