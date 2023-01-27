import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from '@/config/index';
import Link from "next/link";

export default function HomePage({ events }) {
  // console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} event={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events' className="btn-secondary" >
          View All
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  // console.log(res.json());
  const events = await res.json();

  // console.log(events);

  return {
    props: { events : events.slice(0,3) },
    revalidate: 1
  }
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();

//   return {
//     props: { events }
//   }
// }