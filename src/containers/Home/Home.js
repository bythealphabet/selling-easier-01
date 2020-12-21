import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import heroStyles from "./home-hero-styles";
import subsStyles from "./home-subs-styles";
import whoamiStyles from "./home-whoami-styles";
import testimonialsStyles from "./home-testimonials-styles";
import latestPostStyles from "./home-latestPost-styles";
import questionsStyles from "./home-questions-styles";
import { Link } from "react-router-dom";
import Ellipse from "../../components/Svgs/Ellipse";
import Input from "../../components/Form/Input";
import rodneyBournImg from "../../assets/images/rodney-bourne.jpg";
import Substract from "../../components/Svgs/Substract";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import QuestionMark from "../../components/Svgs/QuestionMark";
import homeQuestionsStyles from "./home-questions-styles";

function Home(props) {
  const heroGrid = css`
    grid-template-rows: 50px 130px 50px 50px;
  `;

  const subsGrid = css`
    margin-top: 1em;
    grid-template-rows: 50px 160px 70px 50px;
  `;

  const whoami = css`
    margin-top: 4em;
    grid-template-rows: 50px 60px 30px 10px auto 10px auto;
  `;

  const testimonials = css`
    margin-top: 2em;
    grid-template-rows: 60px 40px 100px auto;
  `;

  const latestPost = css`
    margin-top: 4em;
    grid-template-rows: 60px 1fr;
  `;
  const questions = css`
    background-color: var(--pink);
    grid-template-rows: 100px 50px 40px 50px;
    margin-top: 4em;
  `;
  return (
    <>
      <section className="base-grid hero" css={heroGrid}>
        <div css={heroStyles.heroImg}></div>
        <h1 css={heroStyles.heroHeader}>
          Get More <br /> Clients <br />
          Grow your Bussines
          <br />
          Selling Easier
        </h1>
        <Link to="questions" className="btn" css={heroStyles.actionBtn}>
          start here
        </Link>
      </section>
      <section className="base-grid subscribe" css={subsGrid}>
        <Ellipse position={subsStyles.ellipse} />
        <div css={subsStyles.subsTextBox}>
          <h3 css={subsStyles.subsHeader}>Subscribe</h3>
          <p>
            Stay notified with online
            <br /> Workshops, Blog Articles, and Videos with Tips for growing
            your bussines.{" "}
          </p>
          <p css={subsStyles.actionText}>
            Ad your Email and click the Grow Button
          </p>
        </div>
        <form css={subsStyles.form}>
          <Input />
          <button className="btn">Grow</button>
        </form>
      </section>
      <section className="base-grid whoami" css={whoami}>
        <img
          src={rodneyBournImg}
          alt="Rodney Bourne Photo"
          css={whoamiStyles.imgStyles}
        />
        <p css={whoamiStyles.nameText}>
          Hi,
          <br /> my name is <br />
          Rodney Bourne
        </p>
        <p css={whoamiStyles.bodyText}>
          In the past <span>23 years</span> I had the privilege helped up to{" "}
          <span> 3000, Companies and Professionals</span> reach their{" "}
          <span>goals</span> and gain mayor profits.
        </p>
        <p css={whoamiStyles.tail}>
          Be part of this growing family of <span>Entrepreneurs</span> and start
          <br />
          <span>Selling Easier</span>.
        </p>
      </section>
      <section className="base-grid testimonials" css={testimonials}>
        <Substract position={testimonialsStyles.substract} />
        <div
          className="testimonial-background"
          css={testimonialsStyles.background}
        ></div>
        <h3 css={testimonialsStyles.heading}>Testimonials</h3>
        <p css={testimonialsStyles.subHeading}>What our clients have to say</p>
        <Testimonials position={testimonialsStyles.testimonials} />
      </section>
      <section className="base-grid latest-post" css={latestPost}>
        <h3 css={latestPostStyles.heading}>Latest Posts</h3>
        <div css={latestPostStyles.postBox}>
          <Blog />
        </div>
      </section>
      <section className="base-grid" css={questions}>
        <h3 css={questionsStyles.text}>
          Answer This Questions and find out how we can help you Grow your
          bussines today.
        </h3>
        <QuestionMark position={questionsStyles.questionMark} />
        <Link to="/questions" className="btn" css={questionsStyles.btn}>
          Go to Questions
        </Link>
      </section>
    </>
  );
}

export default Home;

//  css={css`
//           height: 500px;
//         `}
