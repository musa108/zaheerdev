import Data from '../data';
import tesla from '/src/images/tesla website.png';
import advice from '/src/images/advice website.png';
import artsy from '/src/images/artsy website.png';
import card from '/src/images/card website.png';
import todo from '/src/images/todo website.png';
import page from '/src/images/page website.png';

export default function Project() {
  return (
    <div className="Project">
     <Data
     img={tesla}
     Name='Cloned Tesla Website'
     link='https://musa108.github.io/cloned-tesla-landingpage'
     />
     <Data
     img={artsy}
     Name='Artsy Website'
     link='https://musa108.github.io/artsy'
     />
     <Data
     img={page}
     Name='Landing Page'
     link=':https://musa108.github.io/into-section-with-navigation/'
     />
     <Data
     img={card}
     Name='Interactive Card'
     link='https://musa108.github.io/interactive-card-form'
     />
     <Data
     img={advice}
     Name='Advice Website'
     link='https://musa108.github.io/advice-generator-app'
     />
     <Data
     img={todo}
     Name='ToDo Website'
     link='https://musa108.github.io/to-do-list/'
     />
    </div>
  );
}


