import ScrubText from '../../components/ScrubText';
import './Statement.css';

export default function Statement() {
  return (
    <section className="statement section" aria-label="What Trippechalo saves you">
      <div className="wrap">
        <ScrubText
          as="p"
          className="statement__text"
          text="Trippechalo removes 80% of the manual work so you can focus 100% on creating unforgettable experiences."
          start="top 80%"
          end="bottom 55%"
        />
      </div>
    </section>
  );
}
