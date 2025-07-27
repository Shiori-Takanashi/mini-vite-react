/*
    Alert Card Component
    A specialized card component for displaying alerts and warnings.
    Uses red color scheme by default.
*/

import BaseCard, { CardColor } from '../Base/BaseCard';
import { MdError, MdWarning, MdInfo } from 'react-icons/md';

interface AlertCardProps {
    title: string;
    content: string;
    color?: CardColor; // Optional, defaults to RED
    severity?: 'high' | 'medium' | 'low'; // Alert severity level
}

export default function AlertCard({
    title,
    content,
    color = CardColor.RED,
    severity = 'high'
}: AlertCardProps) {
    // Add severity indicator to title
    const getSeverityIcon = (severity: string) => {
        switch (severity) {
            case 'high': return <MdError style={{ color: '#d32f2f', marginRight: '8px' }} />;
            case 'medium': return <MdWarning style={{ color: '#f57c00', marginRight: '8px' }} />;
            case 'low': return <MdInfo style={{ color: '#388e3c', marginRight: '8px' }} />;
            default: return <MdError style={{ color: '#d32f2f', marginRight: '8px' }} />;
        }
    };

    const titleWithSeverity = (
        <span style={{ display: 'flex', alignItems: 'center' }}>
            {getSeverityIcon(severity)}
            {title}
        </span>
    );

    return (
        <BaseCard
            title={titleWithSeverity}
            content={content}
            color={color}
        />
    );
}
