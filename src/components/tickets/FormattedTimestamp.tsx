import React from 'react'
interface FormattedTimestampProps {
    timestamp: number;
    options?: Intl.DateTimeFormatOptions;
}

const FormattedTimestamp = ({ timestamp, options }: FormattedTimestampProps) => {
    const formatDate = (timestamp: number, options?: Intl.DateTimeFormatOptions) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", options);
    };
    return <>{formatDate(timestamp, options)}</>;
};
export default FormattedTimestamp