import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

const EventItem = ({event}) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image src={event.image ? event.image : '/images/event-default.png'} width={170} height={100} alt={'image'} />
      </div>
      <div className={styles.info}>
        <span>
          {event.date}
        </span>
        <h3>{event.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${event.slug}`}>
          <button className="btn">
            Details
          </button>
        </Link> 
      </div>
    </div>
  )
}

export default EventItem