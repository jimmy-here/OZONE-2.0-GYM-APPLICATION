import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        A gym is a space to transform your body and mind through dedication and hard work.
        It’s where strength is built, limits are pushed, and goals are achieved.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>Unleash Your Inner Strength</h1>
        <p>
        Discover the power within you as you push through challenges.
        Every workout brings you closer to your true potential.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Transform Your Body, Transform Your Life.</h4>
            <p>
            Commit to fitness and witness a total transformation.
            Your body is capable of more than you ever imagined.
            </p>
          </div>
          <div>
            <h4>Strive for Progress, Not Perfection</h4>
            <p>
            Focus on your journey, not just the destination. 
            Every small step forward counts in achieving your fitness goals.
            </p>
          </div>
          <div>
            <h4>Fuel Your Body, Elevate Your Life</h4>
            <p>
            Build strength and resilience through consistent effort. 
            It’s the daily dedication that leads to long-term success.
            </p>
          </div>
          <div>
            <h4>Strength Begins with Consistency</h4>
            <p>
            Nutrition and fitness go hand in hand. 
            Give your body the fuel it needs to perform at its best.
            </p>
          </div>
          <div>
            <h4>Push Your Limits Every Day</h4>
            <p>
            Challenge yourself to go further, lift heavier, and train harder. 
            Growth happens when you step outside your comfort zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
