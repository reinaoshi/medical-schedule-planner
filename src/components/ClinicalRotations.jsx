import React from 'react';

const ClinicalRotations = () => {
    const rotations = [
        {
            department: 'Pediatrics',
            dates: '2026-05-01 to 2026-05-15',
            mentor: 'Dr. Smith',
            location: 'Children’s Hospital'
        },
        {
            department: 'Internal Medicine',
            dates: '2026-05-16 to 2026-05-30',
            mentor: 'Dr. Johnson',
            location: 'City Hospital'
        }
    ];

    return (
        <div>
            <h1>Clinical Rotations</h1>
            <table>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Dates</th>
                        <th>Mentor</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {rotations.map((rotation, index) => (
                        <tr key={index}>
                            <td>{rotation.department}</td>
                            <td>{rotation.dates}</td>
                            <td>{rotation.mentor}</td>
                            <td>{rotation.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClinicalRotations;