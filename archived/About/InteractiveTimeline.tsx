// InteractiveTimeline.tsx
import React from 'react';
import styled from 'styled-components';

interface TimelineEvent {
  year: number;
  text: string;
}

const TimelineContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Event = styled.div`
  margin: 10px;
  border-left: 3px solid #5e81ac;
  padding-left: 20px;
  position: relative;
`;

const Year = styled.span`
  font-weight: bold;
`;

const EventText = styled.p``;

const events: TimelineEvent[] = [
  { year: 2010, text: 'Started my journey as a developer.' },
  { year: 2015, text: 'Launched my first major app.' },
  { year: 2020, text: 'Became a team leader.' }
  // Add more events as needed
];

export const InteractiveTimeline: React.FC = () => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <Event key={index}>
          <Year>{event.year}</Year>
          <EventText>{event.text}</EventText>
        </Event>
      ))}
    </TimelineContainer>
  );
};
