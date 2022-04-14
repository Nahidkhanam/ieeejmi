import faker from "@faker-js/faker";
import dayjs from "dayjs";
const data = Array(10)
  .fill(0)
  .map(() => {
    return {
      title: faker.lorem.sentence(),
      icon: faker.image.abstract(100, 100, true),
      date: dayjs(faker.date.past()).format("MMM, DD YYYY"),
      description: faker.lorem.paragraph(),
    };
  });

console.log(data);
