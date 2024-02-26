import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>So Good And Tasty Food, Delivered To You</h2>
      <p>
        On our website, you can order your favorite food for a designated time
        and enjoy it at home.
      </p>
      <p>
        All of our meals are prepared by experienced chefs using high-quality
        ingredients and cooked just-in-time.
      </p>
    </section>
  );
};

export default MealsSummary;
