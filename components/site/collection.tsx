import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";

const PIECES = [
  ["/images/meadow-platter.jpg","The Artisans Craftet","This four-compartment masterpiece features a mesmerizing, raised geometric design with a rich finish that elevates the art of gifting.","ENAMELLED STEEL"],
  ["/images/ruby-blossom.jpg","The Royal Chariot Presentation Trunk","Evoking the regal heritage of Rajasthan, this exquisitely crafted presentation chest transforms the act of gifting into an experience of sheer opulence.","LACQUERED STEEL"],
  ["/images/beawar-chest.jpg","The Petal Reveal Collection","Modern, vibrant, and delightfully interactive. This lotus-inspired serving carousel gently expands to present a comprehensive, five-fold tasting experience.","SHEESHAM WOOD"],
  ["/images/gilded-trunk.jpg","The Heritage Silver Salver","A magnificent tribute to timeless craftsmanship, designed to become a cherished part of your household traditions. This exquisite, silver-finished tray features detailed botanical embossing.","GOLD-PRESSED SHEET"],
  ["/images/jodhpur-duo.jpg","The Imperial Lattice Casket","Exuding warmth and timeless luxury, this gold-toned presentation box is a masterpiece of texture and detail. The lid features a meticulous, diamond-quilted pattern, opening via a classic metal clasp to reveal four generous compartments.","MEENAKARI TRUNK"],
  ["/images/wheeled-treasury.jpg","The Heirloom Glass-Jar Keepsake","Designed to be cherished during joyous family gatherings and festive celebrations, this exquisite box redefines the art of luxury gifting. The vibrant, intricately patterned exterior opens to reveal a brilliantly golden interior that beautifully frames four individual glass vessels.","BRASS & WOOD"],
  ["/images/turquoise-jewelbox.jpg","The Turquoise Jewel Box","Four meenakari jars, enough for a gathering, tucked into a matching turquoise case.","MEENAKARI JARS"],
  ["/images/rajwada-thali.jpg","The Rajwada Thali","A jewelled silver-toned thali with paisley wells circling a centre of soft candies.","SILVER-TONED STEEL"],
];

export function Collection() {
  return <section id="collection" className="section collection-section">
    <Container>
      <div className="section-head"><div><div className="eyebrow">The keepsake edit</div><h2>Made to be <em>opened slowly.</em></h2></div><p>Our boxes are vessels first and packaging second. Each one carries the dry fruits beautifully — and has a life after them.</p></div>
      <div className="collection-grid">
        {PIECES.map(([image,title,description,material],i)=><article className={`product-card product-${i+1}`} key={title}>
          <a href="#contact" className="product-media group"><img src={image} alt={title} loading="lazy"/><span className="product-index">0{i+1}</span><span className="product-arrow"><ArrowUpRight className="size-5"/></span></a>
          <div className="product-meta"><span>{material}</span><h3>{title}</h3><p>{description}</p></div>
        </article>)}
      </div>
    </Container>
  </section>;
}
