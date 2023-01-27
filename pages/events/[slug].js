import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from '@/styles/Event.module.css'
import Image from "next/image";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
// import { useRoute r } from "next/router";


const EventPage = ({ event }) => {
  // const router = useRouter();
  // console.log(event);
  const deleteEvent = () => {
    console.log('delete');
  }

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${event.id}`}>
            <FaPencilAlt /> Edit Event
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image && (
          <div className={styles.image}>
            <Image
              src={event.image}
              alt='event image' 
              fill={true}
              priority={true}
            />
          </div>
        )}

        <h3>Performers : </h3>
        <p>{event.performers}</p>
        <h3>Description : </h3>
        <p>{event.description}</p>
        <h3>Venue : {event.venue}</h3>
        <p>{event.address}</p>

        <Link className="styles.back" href='/events'>
          {'<'} Go Back 
        </Link>
      </div>
      {/* <h3>{router.query.slug}</h3>
      <button onClick={()=>router.push("/")}>Home</button> */}
    </Layout>
  )
}

export async function getStaticPaths(){
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map(evt => ({
    params: {
      slug: evt.slug
    }
  }))

  return {
    paths,
    fallback: true, // if false return 404 good for static website
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  // console.log(events);
  return {
    props: {
      event: events[0]
    },
    revalidate: 1
  }
}


// export async function getStaticProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();
//   // console.log(events);
//   return {
//     props: { event: events[0] },
//     // revalidate: 1
//   }
// }
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();
//   // console.log(events);
//   return {
//     props: { event : events[0] }
//   }
// }




export default EventPage