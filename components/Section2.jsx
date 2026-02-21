import "../styles/section2.scss";

const Section2 = () => {
  return (
    <section className="clarity">
      <div className="clarity-top">
        <span className="clarity-eyebrow">
          READY TO LEVEL UP YOUR BUSINESS?
        </span>

        <div className="clarity-header">
          <div className="clarity-left">
            <h1>
              Clarity for today. Insight from yesterday.
              <br />
              Growth for tomorrow.
            </h1>

            <p>
              Running a growing business means juggling the numbers, the people
              and the future – all at once.
            </p>
          </div>

          <div className="clarity-right">
            <p>
              At SignAge, we aim to make things simpler. Our three tailored
              service levels – Today, Yesterday, Tomorrow – build on each other
              to give you accurate records, clear reports and the insights to
              grow with confidence.
            </p>

            <a href="#" className="clarity-link">
              Explore our products →
            </a>
          </div>
        </div>
      </div>

      <div className="clarity-cards">
        <div className="clarity-card">
          <h3>Product1</h3>
          <span className="clarity-sub">Keep it accurate.</span>
          <p>
            day-to-day operations handled, records accurate, compliance sorted
          </p>

          <div className="clarity-visual today">
            <img src="today.webp" />
          </div>
        </div>

        <div className="clarity-card">
          <h3>Product2</h3>
          <span className="clarity-sub">Know where you stand.</span>
          <p>reports and KPIs to track your progress and performance</p>

          <div className="clarity-visual yesterday">
            <img src="yesterday.webp" />
          </div>
        </div>

        <div className="clarity-card">
          <h3>Product3</h3>
          <span className="clarity-sub">See what’s next.</span>
          <p>data-driven insights and advisory to help you grow smarter</p>

          <div className="clarity-visual tomorrow">
            <img src="tomorrow.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
