import { events } from "./data.json";

export default function handler(req, res) {
  const slug = req.query.slug;
  // console.log(slug);
  const x = events.filter(e => e.slug === slug);
    
    // if (x.length > 0) {
    //   res.status(404).json({message : 'Not found'});
    // }
    // else {
    //   res.status(200).json(x);
    // }
  
  if (req.method === 'GET') {
    res.status(200).json(x);
  }
  else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` }); 
  }
}