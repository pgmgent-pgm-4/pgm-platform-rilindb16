import React from 'react';
import '../styles/main.css';

const Grid = () => {
    const data = [
        {
        year: 'Jaar 1',
        periods: [
            {
            period: 'Periode 1',
            courses: [
                { name: 'IT Professional', sp: 2 },
                { name: 'Data Management 1', sp: 3 },
                { name: 'Web 1: Essentials', sp: 4 },
                { name: 'Programming 1: Essentials', sp: 5 }
            ]
            },
            {
            period: 'Periode 2',
            courses: [
                { name: 'IT Professional', sp: 4 },
                { name: 'Web 2: Intermediate', sp: 4 },
                { name: 'Programming 2: Intermediate', sp: 5 },
                { name: '@Work 1: Static Web Projects', sp: 6 }
            ]
            },
            {
            period: 'Periode 3',
            courses: [
                { name: 'IT Portfolio', sp: 4 },
                { name: 'Data Management 2', sp: 3 },
                { name: 'Web 3: Advanced', sp: 6 },
                { name: 'Programming 3: Advanced', sp: 5 }
            ]
            },
            {
            period: 'Periode 4',
            courses: [
                { name: 'IT Portfolio', sp: 3 },
                { name: 'Data Management 2', sp: 3 },
                { name: 'Programming 4: JAMStack', sp: 6 },
                { name: '@Work 2: Dynamic Web Projects', sp: 10 }
            ]
            }
        ]
        },
        {
        year: 'Jaar 2',
        periods: [
            {
            period: 'Periode 5',
            courses: [
                { name: 'IT Exploration', sp: 4 },
                { name: 'Data Management 3', sp: 6 },
                { name: 'Programming 5: Full-stack', sp: 6 },
                { name: '@Work 3: Multidisciplinary Web Projects', sp: 9 }
            ]
            },
            {
            period: 'Periode 6',
            courses: [
                { name: 'IT Exploration', sp: 3 },
                { name: 'Data Management 3', sp: 8 },
                { name: 'Programming 6: Mobile', sp: 8 },
                { name: '@Work 3: Multidisciplinary Web Projects', sp: 14 }
            ]
            },
            {
            period: 'Periode 7',
            courses: [
                { name: '@Work 4: Graduation Project', sp: 9 }
            ]
            },
            {
            period: 'Periode 8',
            courses: [
                { name: '@Work 5: Internship', sp: 38 }
            ]
            }
        ]
        }
    ];

    return (
        <div className="grid-container">
        {data.map((yearData, yearIndex) => (
            <div key={yearIndex} className="year-section">
            <div className="year-title">{yearData.year}</div>
            <div className="periods-container">
                {yearData.periods.map((periodData, periodIndex) => (
                <div key={periodIndex} className="period-column">
                    <div className="period-title">{periodData.period}</div>
                    {periodData.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="course-card">
                        <div className="course-name">{course.name}</div>
                        <div className="course-sp">{course.sp} SP</div>
                    </div>
                    ))}
                </div>
                ))}
            </div>
            </div>
        ))}
        </div>
    );
};

export default Grid;
