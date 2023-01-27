import Layout from '@/components/Layout'
import React from 'react'

import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

const Events = ({ events }) => {
  
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} event={evt} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1
  }
}

export default Events
