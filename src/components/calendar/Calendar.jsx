import React, { useState } from 'react';
import MonthView from './MonthView';
import WeekView from './WeekView';
import { useSelector } from 'react-redux';

export const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState('month'); // 'month' or 'week'

    const toggleView = () => {
        setView(view === 'month' ? 'week' : 'month');
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const goToPrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToNextWeek = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7));
    };

    const goToPrevWeek = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7));
    };

    return (
        <div id='calen'>
            <button onClick={toggleView}>{view === 'month' ? 'מעבר לתצוגה שבועית' : 'מעבר לתצוגה חודשית'}</button>
            {view === 'month' ? (
                <>
                    <button onClick={goToPrevMonth}>▶חודש הקודם</button>
                    <button onClick={goToNextMonth}>חודש הבא◀</button>
                    <MonthView currentDate={currentDate} />
                </>
            ) : (
                <>
                    <button onClick={goToPrevWeek}>▶שבוע הקודם</button>
                    <button onClick={goToNextWeek}>שבוע הבא◀</button>
                    <WeekView currentDate={currentDate} />
                </>
            )}
        </div>
    );
};

export default Calendar;
