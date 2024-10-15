import useScrollTop from "../hooks/useScrollTop";

const blog = {
  title: "Exercise: 7 benefits of regular physical activity",
  subtitle:
    "You know exercise is good for you, but do you know how good? From boosting your mood to improving your sex life, find out how exercise can improve your life.",
  body: `Want to feel better, have more energy and even add years to your life? Just exercise.\n
  The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, no matter their age, sex or physical ability.\n
  Need more convincing to get moving? Check out these seven ways that exercise can lead to a happier, healthier you.\n
  1. Exercise controls weight\n
    Exercise can help prevent excess weight gain or help you keep off lost weight. When you take part in physical activity, you burn calories. The more intense the activity, the more calories you burn.\n

    Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day. Any amount of activity is better than none. To gain the benefits of exercise, just get more active throughout your day. For example, take the stairs instead of the elevator or rev up your household chores. Consistency is key.\n

  2. Exercise combats health conditions and diseases\n
    Worried about heart disease? Hoping to prevent high blood pressure? No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, the "good" cholesterol, and it decreases unhealthy triglycerides. This one-two punch keeps your blood flowing smoothly, which lowers your risk of heart and blood vessel, called cardiovascular, diseases.\n

    Regular exercise helps prevent or manage many health problems and concerns, including:\n

    - Stroke.\n
    - Metabolic syndrome.\n
    - High blood pressure.\n
    - Type 2 diabetes.\n
    - Depression.\n
    - Anxiety.\n
    - Many types of cancer.\n
    - Arthritis.\n
    - Falls.\n
    - It also can help improve cognitive function and helps lower the risk of death from all causes.\n

  3. Exercise improves mood\n
    Need an emotional lift? Or need to lower stress after a stressful day? A gym session or brisk walk can help. Physical activity stimulates many brain chemicals that may leave you feeling happier, more relaxed and less anxious.\n

    You also may feel better about your appearance and yourself when you exercise regularly, which can boost your confidence and improve your self-esteem.\n

  4. Exercise boosts energy\n
    Winded by grocery shopping or household chores? Regular physical activity can improve your muscle strength and boost your endurance.\n

    Exercise sends oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.\n

  5. Exercise promotes better sleep\n
    Struggling to snooze? Regular physical activity can help you fall asleep faster, get better sleep and deepen your sleep. Just don't exercise too close to bedtime, or you may be too energized to go to sleep.\n

  6. Exercise puts the spark back into your sex life\n
    Do you feel too tired or too out of shape to enjoy physical intimacy? Regular physical activity can improve energy levels and give you more confidence about your physical appearance, which may boost your sex life.\n

    But there's even more to it than that. Regular physical activity may enhance arousal for women. And men who exercise regularly are less likely to have problems with erectile dysfunction than are men who don't exercise.\n

  7. Exercise can be fun — and social!\n
    Exercise and physical activity can be fun. They give you a chance to unwind, enjoy the outdoors or simply do activities that make you happy. Physical activity also can help you connect with family or friends in a fun social setting.\n

    So take a dance class, hit the hiking trails or join a soccer team. Find a physical activity you enjoy, and just do it. Bored? Try something new, or do something with friends or family.\n

    Exercise to feel better and have fun\n
    Exercise and physical activity are great ways to feel better, boost your health and have fun. For most healthy adults, the U.S. Department of Health and Human Services recommends these exercise guidelines:\n

    - Aerobic activity. Get at least 150 minutes of moderate aerobic activity. Or get at least 75 minutes of vigorous aerobic activity a week. You also can get an equal combination of moderate and vigorous activity. Aim to spread out this exercise over a few days or more in a week.\n

    - For even more health benefits, the guidelines suggest getting 300 minutes a week or more of moderate aerobic activity. Exercising this much may help with weight loss or keeping off lost weight. But even small amounts of physical activity can be helpful. Being active for short periods of time during the day can add up and have health benefits.\n

    - Strength training. Do strength training exercises for all major muscle groups at least two times a week. One set of each exercise is enough for health and fitness benefits. Use a weight or resistance level heavy enough to tire your muscles after about 12 to 15 repetitions.\n
    Moderate aerobic exercise includes activities such as brisk walking, biking, swimming and mowing the lawn.\n

    Vigorous aerobic exercise includes activities such as running, swimming laps, heavy yardwork and aerobic dancing.\n

    You can do strength training by using weight machines or free weights, your own body weight, heavy bags, or resistance bands. You also can use resistance paddles in the water or do activities such as rock climbing.\n

    If you want to lose weight, keep off lost weight or meet specific fitness goals, you may need to exercise more.\n

    Remember to check with a health care professional before starting a new exercise program, especially if you have any concerns about your fitness or haven't exercised for a long time. Also check with a health care professional if you have chronic health problems, such as heart disease, diabetes or arthritis.`,
};

const Blog = () => {
  useScrollTop();

  return (
    <div className="my-8">
      <div className="container">
        <div className="max-w-[768px] w-full mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-600 py-4">
            {blog.title}
          </h1>
          <h4 className="text-xl font-bold text-gray-600 py-4">
            {blog.subtitle}
          </h4>
          <div>
            {blog.body.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
